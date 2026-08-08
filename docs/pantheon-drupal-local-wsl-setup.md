# Guide: Download a Pantheon Sandbox (Files + Database) and Run Drupal Locally on Windows WSL Ubuntu

This guide walks through pulling a full copy of a **Pantheon** Drupal site — code, files, and database — down to a **Windows WSL2 Ubuntu** machine, and getting it running locally with **DDEV**. It also includes a manual fallback method if you prefer not to use DDEV.

> Recommended path: **DDEV**, because it has built-in Pantheon integration (`ddev pull pantheon`) that automates the database + files download in one command and gives you a local Drupal environment (PHP, web server, database, Redis, etc.) that closely matches Pantheon.

---

## 0. Prerequisites in Windows

Before touching Ubuntu, set up WSL2 and Docker on the Windows side.

1. **Enable WSL2 + install Ubuntu**
   Open PowerShell **as Administrator** and run:

   ```powershell
   wsl --install -d Ubuntu
   ```

   Reboot if prompted, then launch "Ubuntu" from the Start menu once to finish first-run setup (create a Linux username/password).

   If Ubuntu is already installed, make sure it's on WSL2 and up to date:

   ```powershell
   wsl --set-version Ubuntu 2
   wsl --update
   ```

2. **Install Docker Desktop for Windows**
   Download from [docker.com](https://www.docker.com/products/docker-desktop/) and install it. During/after setup:
   - Settings → **General** → enable "Use the WSL 2 based engine"
   - Settings → **Resources → WSL Integration** → enable integration for your **Ubuntu** distro

   Docker is required because DDEV runs Drupal's web server, PHP, and database as containers.

All remaining steps happen **inside the Ubuntu WSL terminal**.

---

## 1. Update Ubuntu and install base packages

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git curl unzip zip wget ca-certificates gnupg lsb-release build-essential mariadb-client
```

`mariadb-client` gives you the `mysql` CLI for inspecting/importing databases manually if needed.

---

## 2. Install PHP and Composer (needed by Terminus)

```bash
sudo apt install -y php-cli php-xml php-curl php-mbstring php-zip php-gd php-mysql
php -v          # confirm PHP 8.2+ (Terminus requires 8.2+)
```

Install Composer 2:

```bash
curl -sS https://getcomposer.org/installer -o composer-setup.php
php composer-setup.php --install-dir=/usr/local/bin --filename=composer
rm composer-setup.php
composer --version
```

---

## 3. Install Terminus (Pantheon's CLI)

```bash
mkdir -p ~/terminus && cd ~/terminus
curl -L https://github.com/pantheon-systems/terminus/releases/latest/download/terminus.phar --output terminus
chmod +x terminus
sudo ln -s ~/terminus/terminus /usr/local/bin/terminus
cd ~
terminus --version
```

### Authenticate with a machine token

1. In the Pantheon Dashboard, go to **Account → Machine Tokens → Create Token**, name it (e.g. `wsl-laptop`), and copy the token.
2. Log in from your terminal:

   ```bash
   terminus auth:login --machine-token=YOUR_TOKEN_HERE
   ```

3. Verify it worked:

   ```bash
   terminus site:list
   ```

   You should see your sandbox/site listed.

Keep the token handy — you'll reuse it for DDEV in step 6.

---

## 4. Install Docker CLI checks + DDEV

Confirm Docker is reachable from WSL (it should be, via Docker Desktop's WSL integration):

```bash
docker ps
```

If that fails, re-check Docker Desktop's **Settings → Resources → WSL Integration** for your Ubuntu distro, then restart Docker Desktop.

Install DDEV:

```bash
curl -fsSL https://ddev.com/install.sh | bash
ddev --version
```

---

## 5. Get your site's codebase from Pantheon

Find your site's git remote:

```bash
terminus connection:info <site-name>.dev --field=git_url
```

Clone the code:

```bash
mkdir -p ~/projects && cd ~/projects
git clone $(terminus connection:info <site-name>.dev --field=git_url) my-site
cd my-site
```

This gives you the Drupal codebase (core, contrib, custom modules/themes, `pantheon.yml`, etc.) — but **not** the database or user-uploaded files, which come next.

---

## 6. Configure DDEV for this project

Run DDEV's interactive config inside the project directory:

```bash
ddev config
```

- **Project type**: `drupal10` (or `drupal11`/`drupal9`/`drupal7`, matching what your site actually runs — check `terminus env:info <site>.dev` or the `pantheon.yml`/`composer.json`)
- **Docroot**: `web` if it's a Composer-managed Pantheon upstream ("Drupal Composer Managed"), or leave blank (`.`) for legacy/non-Composer upstreams where `index.php` sits at the repo root.

`ddev config` will also patch `settings.php` to include a `settings.ddev.php` snippet automatically, so DDEV's local DB credentials get picked up without touching Pantheon's own `pantheon.settings.php` logic.

### Add the Pantheon site/environment variables

Edit `.ddev/config.yaml` (or run the `ddev config --web-environment-add` command below) to tell DDEV which Pantheon site/environment to pull from:

```bash
ddev config --web-environment-add="DDEV_PANTHEON_SITE=<site-name>"
ddev config --web-environment-add="DDEV_PANTHEON_ENVIRONMENT=dev"
```

Use the site's machine name (or UUID) from `terminus site:list`, and the environment you want to copy — typically `dev` for a sandbox/multidev, or your multidev's name.

### Make your machine token available to DDEV

Store it globally so every DDEV project can use it (avoids committing secrets into the repo):

```bash
ddev config global --web-environment-add="TERMINUS_MACHINE_TOKEN=YOUR_TOKEN_HERE"
```

---

## 7. Pull the database and files

Start the project, then run the Pantheon pull:

```bash
ddev start
ddev pull pantheon
```

This will:
1. Log in to Terminus with your machine token
2. Wake the target environment
3. Dump/download the MySQL database and import it into DDEV's local database container
4. Rsync the `files/` (user uploads) directory into `web/sites/default/files`

For a large site, the default behavior generates a **fresh** database dump, which can be slow. To instead reuse Pantheon's latest on-server backup (much faster, but potentially a bit stale):

```bash
ddev pull pantheon --environment="DDEV_USE_PANTHEON_BACKUP=true"
```

To pull from a different environment once, without changing your saved config:

```bash
ddev pull pantheon --environment="DDEV_PANTHEON_ENVIRONMENT=test"
```

---

## 8. Run and access the site

```bash
ddev launch
```

or check the URL/ports directly:

```bash
ddev describe
```

DDEV gives you a local HTTPS URL like `https://my-site.ddev.site`. Useful follow-up commands:

```bash
ddev drush status        # confirm Drupal + DB bootstrap
ddev drush uli            # generate a one-time admin login link
ddev ssh                  # shell into the web container
```

---

## 9. Manual fallback (no DDEV) — Terminus backups + your own LAMP stack

If you'd rather not use Docker/DDEV, you can pull the raw backup artifacts with Terminus and wire up Drupal yourself in WSL.

1. **Create fresh backups on Pantheon:**

   ```bash
   terminus backup:create <site-name>.dev --element=db
   terminus backup:create <site-name>.dev --element=files
   ```

2. **Download them:**

   ```bash
   terminus backup:get <site-name>.dev --element=db > pantheon-db.sql.gz
   terminus backup:get <site-name>.dev --element=files > pantheon-files.tar.gz
   ```

   (`backup:get` prints a signed download URL by default; add `--to=<path>` on some Terminus versions to save directly, or pipe the URL to `curl -L -o file`.)

3. **Install a local LAMP-ish stack in WSL:**

   ```bash
   sudo apt install -y apache2 mariadb-server php-cli php-mysql php-xml php-mbstring php-gd php-curl php-zip
   sudo service mariadb start
   sudo service apache2 start
   ```

4. **Create the local database and import:**

   ```bash
   sudo mysql -e "CREATE DATABASE drupal_local; CREATE USER 'drupal'@'localhost' IDENTIFIED BY 'drupal'; GRANT ALL ON drupal_local.* TO 'drupal'@'localhost'; FLUSH PRIVILEGES;"
   gunzip -c pantheon-db.sql.gz | mysql -u drupal -pdrupal drupal_local
   ```

5. **Extract files into the codebase:**

   ```bash
   tar -xzf pantheon-files.tar.gz -C web/sites/default/files
   ```

6. **Install Composer dependencies and Drush, then point `settings.local.php` at the local DB:**

   ```bash
   composer install
   composer require drush/drush
   ```

   In `web/sites/default/settings.php` (or a `settings.local.php` you include from it):

   ```php
   $databases['default']['default'] = [
     'database' => 'drupal_local',
     'username' => 'drupal',
     'password' => 'drupal',
     'host' => '127.0.0.1',
     'driver' => 'mysql',
   ];
   ```

7. **Serve the site:**

   ```bash
   cd web
   php -S 0.0.0.0:8080
   ```

   Visit `http://localhost:8080` from Windows (WSL2 forwards `localhost` ports automatically), or configure Apache's document root instead of the built-in PHP server for something closer to production.

This path works without Docker but requires more manual upkeep (PHP version matching, Drupal settings wiring, no automatic multidev-style environments).

---

## 10. Troubleshooting tips

- **`docker ps` fails in WSL** → Docker Desktop's WSL2 integration isn't enabled for your distro, or Docker Desktop isn't running on Windows.
- **`ddev pull pantheon` complains about a Terminus version mismatch** → update the bundled Terminus DDEV uses, or update your standalone Terminus: `terminus self:update`.
- **Login redirects loop / mixed content locally** → make sure you're using the `https://*.ddev.site` URL from `ddev describe`, not `http://`.
- **Pantheon's `pantheon.settings.php` errors locally** → this file typically only activates when `$_ENV['PANTHEON_ENVIRONMENT']` is set, which it won't be locally, so it should safely no-op. If your site's `settings.php` unconditionally requires Pantheon-only services (e.g. hardcoded Redis/New Relic), guard those blocks with an environment check or comment them out in a local-only settings override that you don't commit.
- **Slow pulls on a big site** → use `DDEV_USE_PANTHEON_BACKUP=true` to reuse Pantheon's latest nightly/on-demand backup instead of generating a fresh dump every time.
