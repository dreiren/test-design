# Guideline: Call a Worker from Laravel to Turn On the Maintenance Page

This guide shows how an **external Laravel app** can call a **Cloudflare Worker** to enable (and disable) a site-wide maintenance page at the edge—before traffic reaches your origin.

## Flow overview

1. Deploy a Cloudflare Worker that serves a maintenance HTML page when a flag is on.
2. Store the flag in **Workers KV** (or Durable Object) so it is fast and shared.
3. Protect a small **control API** on the Worker with a shared secret.
4. From Laravel, send an authenticated HTTP request to that API to turn maintenance **on** or **off**.
5. Visitors hitting the site see the maintenance page (HTTP `503`) while the flag is on; allowlisted IPs can still reach origin.

```text
[Laravel app] --POST /maintenance--auth--> [Cloudflare Worker]
                                              |
                                              +--> KV: maintenance=true
                                              |
[Visitor browser] --GET /* ---------------> [Worker]
                                              |
                                              +--> 503 Maintenance HTML
                                              +--> (or proxy to origin if off / allowlisted)
```

---

## Prerequisites

| Item | Purpose |
|------|---------|
| Cloudflare account + zone | Domain must be proxied (orange cloud) |
| Workers + KV namespace | Host logic and store the on/off flag |
| Shared secret | Authenticate Laravel → Worker control calls |
| Laravel HTTP client | `Illuminate\Support\Facades\Http` (built-in) |

Store secrets in env vars — never commit them.

---

## 1. Worker: maintenance page + control API

Create a Worker (e.g. `maintenance-gate`) bound to a KV namespace named `MAINTENANCE`.

**Bindings (Wrangler / dashboard)**

| Binding | Type | Notes |
|---------|------|-------|
| `MAINTENANCE` | KV namespace | Keys: `enabled`, optional `message`, `retry_after` |
| `CONTROL_SECRET` | Secret | Same value as Laravel `WORKER_MAINTENANCE_SECRET` |

### Example Worker (`src/index.js`)

```js
const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>We'll be right back</title>
  <style>
    body { font-family: system-ui, sans-serif; display: grid; place-items: center;
           min-height: 100vh; margin: 0; background: #0f172a; color: #e2e8f0; }
    main { text-align: center; max-width: 28rem; padding: 2rem; }
    h1 { font-size: 1.75rem; margin-bottom: 0.75rem; }
    p { opacity: 0.85; line-height: 1.5; }
  </style>
</head>
<body>
  <main>
    <h1>Under maintenance</h1>
    <p id="msg">We're performing scheduled updates. Please try again shortly.</p>
  </main>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Control API — only Laravel (or ops tools) should call these
    if (url.pathname.startsWith("/__maintenance/")) {
      return handleControl(request, env, url);
    }

    const enabled = (await env.MAINTENANCE.get("enabled")) === "true";
    if (!enabled) {
      return fetch(request); // pass through to origin
    }

    // Optional: allowlist ops IPs so you can still access the site
    const allow = (await env.MAINTENANCE.get("allow_ips")) || "";
    const clientIp = request.headers.get("CF-Connecting-IP") || "";
    if (allow.split(",").map((s) => s.trim()).filter(Boolean).includes(clientIp)) {
      return fetch(request);
    }

    const message = (await env.MAINTENANCE.get("message")) || "";
    const retryAfter = (await env.MAINTENANCE.get("retry_after")) || "300";
    let html = MAINTENANCE_HTML;
    if (message) {
      html = html.replace(
        "We're performing scheduled updates. Please try again shortly.",
        escapeHtml(message)
      );
    }

    return new Response(html, {
      status: 503,
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "Retry-After": retryAfter,
        "Cache-Control": "no-store",
      },
    });
  },
};

async function handleControl(request, env, url) {
  const secret = request.headers.get("X-Maintenance-Secret");
  if (!secret || secret !== env.CONTROL_SECRET) {
    return json({ ok: false, error: "unauthorized" }, 401);
  }

  if (url.pathname === "/__maintenance/status" && request.method === "GET") {
    const enabled = (await env.MAINTENANCE.get("enabled")) === "true";
    return json({ ok: true, enabled });
  }

  if (url.pathname === "/__maintenance/on" && request.method === "POST") {
    const body = await safeJson(request);
    await env.MAINTENANCE.put("enabled", "true");
    if (body.message) await env.MAINTENANCE.put("message", String(body.message));
    if (body.retry_after) await env.MAINTENANCE.put("retry_after", String(body.retry_after));
    if (body.allow_ips) await env.MAINTENANCE.put("allow_ips", String(body.allow_ips));
    return json({ ok: true, enabled: true });
  }

  if (url.pathname === "/__maintenance/off" && request.method === "POST") {
    await env.MAINTENANCE.put("enabled", "false");
    return json({ ok: true, enabled: false });
  }

  return json({ ok: false, error: "not_found" }, 404);
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

async function safeJson(request) {
  try {
    return await request.json();
  } catch {
    return {};
  }
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
```

### Route the Worker

Attach the Worker to your public hostname, for example:

| Pattern | Script |
|---------|--------|
| `example.com/*` | `maintenance-gate` |
| `www.example.com/*` | `maintenance-gate` |

Keep the control paths on the same Worker (`/__maintenance/*`). Do not expose them without the shared secret.

---

## 2. Laravel: configuration

Add to `.env`:

```bash
WORKER_MAINTENANCE_URL=https://example.com
WORKER_MAINTENANCE_SECRET=replace-with-long-random-secret
```

Optional config file `config/maintenance_worker.php`:

```php
<?php

return [
    'base_url' => rtrim(env('WORKER_MAINTENANCE_URL', ''), '/'),
    'secret'   => env('WORKER_MAINTENANCE_SECRET'),
    'timeout'  => (int) env('WORKER_MAINTENANCE_TIMEOUT', 10),
];
```

---

## 3. Laravel: service to call the Worker

```php
<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use RuntimeException;

class MaintenanceWorkerClient
{
    public function enable(
        ?string $message = null,
        int $retryAfter = 300,
        ?string $allowIps = null
    ): array {
        $payload = array_filter([
            'message'     => $message,
            'retry_after' => $retryAfter,
            'allow_ips'   => $allowIps,
        ], fn ($v) => $v !== null && $v !== '');

        return $this->post('/__maintenance/on', $payload);
    }

    public function disable(): array
    {
        return $this->post('/__maintenance/off');
    }

    public function status(): array
    {
        return $this->get('/__maintenance/status');
    }

    protected function post(string $path, array $payload = []): array
    {
        $response = Http::baseUrl(config('maintenance_worker.base_url'))
            ->timeout(config('maintenance_worker.timeout'))
            ->withHeaders([
                'X-Maintenance-Secret' => config('maintenance_worker.secret'),
                'Accept'               => 'application/json',
            ])
            ->post($path, $payload);

        if (! $response->successful()) {
            throw new RuntimeException(
                "Maintenance Worker error ({$response->status()}): ".$response->body()
            );
        }

        return $response->json();
    }

    protected function get(string $path): array
    {
        $response = Http::baseUrl(config('maintenance_worker.base_url'))
            ->timeout(config('maintenance_worker.timeout'))
            ->withHeaders([
                'X-Maintenance-Secret' => config('maintenance_worker.secret'),
                'Accept'               => 'application/json',
            ])
            ->get($path);

        if (! $response->successful()) {
            throw new RuntimeException(
                "Maintenance Worker error ({$response->status()}): ".$response->body()
            );
        }

        return $response->json();
    }
}
```

---

## 4. Turn maintenance on from Laravel

### Artisan commands (recommended for deploy scripts)

```php
<?php

namespace App\Console\Commands;

use App\Services\MaintenanceWorkerClient;
use Illuminate\Console\Command;

class MaintenanceDown extends Command
{
    protected $signature = 'edge:down
                            {--message= : Message shown on the maintenance page}
                            {--retry=300 : Retry-After seconds}
                            {--allow= : Comma-separated allowlisted IPs}';

    protected $description = 'Enable Cloudflare Worker maintenance page';

    public function handle(MaintenanceWorkerClient $client): int
    {
        $result = $client->enable(
            $this->option('message'),
            (int) $this->option('retry'),
            $this->option('allow')
        );

        $this->info('Edge maintenance ON: '.json_encode($result));

        return self::SUCCESS;
    }
}
```

```php
<?php

namespace App\Console\Commands;

use App\Services\MaintenanceWorkerClient;
use Illuminate\Console\Command;

class MaintenanceUp extends Command
{
    protected $signature = 'edge:up';
    protected $description = 'Disable Cloudflare Worker maintenance page';

    public function handle(MaintenanceWorkerClient $client): int
    {
        $result = $client->disable();
        $this->info('Edge maintenance OFF: '.json_encode($result));

        return self::SUCCESS;
    }
}
```

**Usage**

```bash
# Turn ON before a deploy
php artisan edge:down --message="Deploying v2.4 — back in ~15 minutes" --retry=900

# Turn OFF after deploy is healthy
php artisan edge:up
```

### From application code

```php
use App\Services\MaintenanceWorkerClient;

app(MaintenanceWorkerClient::class)->enable(
    message: 'Emergency maintenance in progress.',
    retryAfter: 600,
    allowIps: '203.0.113.10,198.51.100.7'
);
```

### Minimal one-off HTTP call (no service class)

```php
use Illuminate\Support\Facades\Http;

Http::withHeaders([
    'X-Maintenance-Secret' => config('maintenance_worker.secret'),
])->post(config('maintenance_worker.base_url').'/__maintenance/on', [
    'message'     => 'Scheduled maintenance',
    'retry_after' => 300,
]);
```

---

## 5. Typical deploy sequence

```bash
# 1. Put site in maintenance at the edge
php artisan edge:down --message="Deploy in progress" --retry=600

# 2. Deploy origin (migrations, code, assets, …)
# …

# 3. Health-check origin (direct IP / internal URL, not the public Worker path)

# 4. Take maintenance off
php artisan edge:up
```

**Tip:** Keep at least one ops IP in `--allow` so you can verify origin while the public still sees maintenance.

---

## 6. Security checklist

| Rule | Why |
|------|-----|
| Use a long random `CONTROL_SECRET` | Control routes are on the public hostname |
| Compare secrets with strict equality on Worker | Reject missing/wrong headers with `401` |
| Prefer HTTPS only (Cloudflare) | Secret travels in a header |
| Restrict who can run `edge:down` / `edge:up` | Deploy bots / admins only |
| Log enable/disable events in Laravel | Audit trail for incidents |
| Optional: IP allowlist on control routes | Extra lock if Laravel egress IPs are fixed |

Do **not** rely on obscurity of `/__maintenance/*` alone.

---

## 7. Alternative: toggle Worker routes via Cloudflare API

Instead of a KV flag, you can **attach/detach** the Worker route with the Cloudflare API from Laravel. Maintenance is on when the route exists; off when it is deleted.

| Action | Cloudflare API |
|--------|----------------|
| ON | `POST /zones/{zone_id}/workers/routes` with pattern `example.com/*` + script name |
| OFF | `DELETE /zones/{zone_id}/workers/routes/{route_id}` |
| Status | `GET /zones/{zone_id}/workers/routes` |

**Laravel sketch**

```php
Http::withToken(config('services.cloudflare.api_token'))
    ->post(
        "https://api.cloudflare.com/client/v4/zones/{$zoneId}/workers/routes",
        [
            'pattern' => 'example.com/*',
            'script'  => 'maintenance-gate',
        ]
    );
```

**When to use which**

| Approach | Best for |
|----------|----------|
| **KV flag (recommended)** | Fast toggles, custom message, IP allowlist, single always-on Worker |
| **Route bind/unbind** | Zero Worker cost when “off”; simpler Worker that only serves static HTML |

---

## 8. Common pitfalls

| Pitfall | Fix |
|---------|-----|
| Origin still reachable while “maintenance on” | Ensure DNS is proxied and Worker route covers `/*` |
| Laravel gets `401` | Match `X-Maintenance-Secret` to Worker `CONTROL_SECRET` |
| Cached maintenance page | Send `Cache-Control: no-store` on `503` responses |
| Lock yourself out | Pass `--allow=` with your public IP before enabling |
| Calling Worker during local `artisan serve` | Point `WORKER_MAINTENANCE_URL` at the real Worker hostname, not `localhost` |
| Confusing with `php artisan down` | Edge maintenance is independent; use both only if you intentionally want origin-level protection too |

---

## 9. Quick verification

```bash
# Enable
curl -sS -X POST "https://example.com/__maintenance/on" \
  -H "X-Maintenance-Secret: $WORKER_MAINTENANCE_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"message":"Test maintenance","retry_after":120}'

# Public check (expect HTTP 503 + HTML)
curl -sI "https://example.com/"

# Status
curl -sS "https://example.com/__maintenance/status" \
  -H "X-Maintenance-Secret: $WORKER_MAINTENANCE_SECRET"

# Disable
curl -sS -X POST "https://example.com/__maintenance/off" \
  -H "X-Maintenance-Secret: $WORKER_MAINTENANCE_SECRET"
```

---

## Summary

1. Worker reads a KV `enabled` flag and serves a `503` maintenance page when on.
2. Laravel authenticates with `X-Maintenance-Secret` and calls `/__maintenance/on` or `/__maintenance/off`.
3. Wire Artisan `edge:down` / `edge:up` into your deploy pipeline for safe cutovers.
