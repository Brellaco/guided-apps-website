# Guided Apps — Corporate Website

## Project Purpose

Corporate/marketing website for Guided Applications at `guided-apps.com`. A brochure site showcasing the Guided Apps platform and its brands (Patriot Pub Crawl, City Walks, Brew Tours) to potential customers (tourism boards, hospitality groups, cities, event organizers) and general visitors.

## Tech Stack

- **Framework:** Astro (static site generator)
- **Styling:** Plain CSS (no framework)
- **Language:** TypeScript (strict)
- **Output:** Static HTML/CSS/JS

## Brands & Experiences

See [brand-hierarchy.md](brand-hierarchy.md) for the full breakdown.

**Brands** — themed product lines with their own domains:
- **Explore a DORA** (exploreadora.com) — Ohio DORA district experiences
- **City Walks** (city-walks.com) — walking tours, historic sightseeing, city exploration
- **Brew Tours** (brew-tours.com) — brewery trails (branding WIP)

**Experiences** — individual tours, subdomains of a brand or the platform:
- **Patriot Pub Crawl** (patriotpubcrawl.guided-apps.com) — Boston Freedom Trail pub crawl (live)
- **Cincinnati Streetcar Sips & Suds** — coming soon

## Deployment

- **Target:** Hetzner BrellacoServer01 (188.245.240.32, ARM64) via Coolify
- **Domain:** `guided-apps.com` (DNS via Cloudflare)
- **SSL:** Coolify/Traefik
- **Branches:** `main` only (no staging)
- **Build:** Coolify builds Docker image on the server from source

## Health Check

- `GET /health` — returns 200 (served as a static page)

## Environment Variables

None required — this is a static site.

## Key Deployment Notes

- Coolify domain format: `https://guided-apps.com:80`
- Traefik proxy may need restart after deploy: `ssh brellacoserver01 "docker restart coolify-proxy"`
- Do NOT hardcode Traefik labels — Coolify generates them
- Build Docker images on the server, not in CI

## Development

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build static site to dist/
npm run preview  # Preview built site
```

## Project Structure

```
src/
  layouts/       # Page layouts
  pages/         # Astro pages (file-based routing)
  components/    # Reusable components
  styles/        # Global CSS
public/          # Static assets (logo, images)
```
