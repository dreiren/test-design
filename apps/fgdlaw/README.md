# FGDLaw — Modern Professional

Next.js (App Router, TypeScript) implementation of the FGDLaw **Modern Professional** website concept. Layout, copy, palette (navy `#0B1F3A`, gold `#C9A227` / `#E4C56B`, cream `#F8F5EE`), and Playfair Display + Inter typography follow `designs/fgdlaw/professional.html`, including the ~1024px tablet and ~600px mobile breakpoints.

## Run locally

```bash
cd apps/fgdlaw
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
cd apps/fgdlaw
npm run build
npm start
```

The contact form validates required fields in the browser and shows a success or error state. It does not submit to a backend.
