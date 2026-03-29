# Guided Apps — Corporate Website Brief

## For Claude Code Session Setup

### What Is Guided Apps?

Guided Apps (guided-apps.com) is a platform company that builds GPS-driven tour experiences. The first product is **Patriot Pub Crawl** — a PWA that guides users along Boston's Freedom Trail through historic pubs, restaurants, and landmarks with GPS navigation, automatic check-ins, and group features.

The platform is designed to support any city or theme: pub crawls, food tours, historical walks, brewery trails, heritage tours, etc. Each trail is a separate PWA served on a subdomain (e.g., patriotpubcrawl.guided-apps.com).

### What This Website Is

A corporate/marketing website at `guided-apps.com` (the root domain). It serves two audiences:

1. **Potential customers** — tourism boards, hospitality groups, cities, event organizers, or entrepreneurs who want a guided tour experience built for their city or organization
2. **General visitors** — people who discover Guided Apps and want to understand what it is before clicking through to a specific trail

### What It Is NOT

- Not the Patriot Pub Crawl app (that lives at patriotpubcrawl.guided-apps.com)
- Not a trail/tour experience itself
- Not a Django app — this should be a simple static site or lightweight framework

### Suggested Tech Stack

- **Astro** or **plain HTML/CSS/JS** — this is a brochure site, not a web app
- Deployed on the same Hetzner server (BrellacoServer01, 188.245.240.32) via Coolify
- Domain: `guided-apps.com` (DNS managed through Cloudflare)
- SSL: via Coolify/Traefik (same as other projects)

### Suggested Pages

1. **Home** — hero section, value proposition, showcase of Patriot Pub Crawl as the flagship product, CTA for inquiries
2. **How It Works** — explain the platform: GPS navigation, check-ins, group features, manager UI, content tools. Show screenshots/mockups from Patriot Pub Crawl
3. **For Cities & Organizations** — B2B pitch. "We build custom GPS-guided experiences for your city, event, or organization." Use cases: tourism boards, pub crawl companies, food tour operators, historical societies, team building
4. **Contact** — simple contact form or email link

### Design Direction

- Professional but approachable — this is a tech company that builds fun experiences
- Clean, modern, not overly corporate
- Use Patriot Pub Crawl as the primary visual example throughout
- Mobile-responsive
- Subtle animations (scroll reveals, staggered entries — similar to what we built for the Patriot Pub Crawl landing page)

### Branding

- Company name: **Guided Apps** (full: Guided Applications)
- Domain: `guided-apps.com`
- No logo yet — text-based for now, or create a simple one
- Color palette: TBD (should complement but not duplicate Patriot Pub Crawl's patriotic red/navy scheme)

### Infrastructure Notes

- **Server**: BrellacoServer01 (Hetzner, 188.245.240.32, ARM64)
- **Deployment**: Coolify with Docker Compose — see `Claude_Code_projects/docs/Hetzner-BrellacoServer01-deployment.md`
- **GitHub org**: Brellaco
- **Key lessons from other projects on this server**:
  - Build Docker images ON the server, not in CI (Coolify builds from source)
  - Domain in Coolify must include `https://` prefix and `:port` (e.g., `https://guided-apps.com:80`)
  - Set `ALLOWED_HOSTS: "*"` — Traefik handles host filtering
  - After deploy, Traefik proxy often needs a restart: `ssh brellacoserver01 "docker restart coolify-proxy"`
  - Coolify generates Traefik labels automatically — do NOT hardcode them in docker-compose
  - See `Claude_Code_projects/docs/Django-Coolify-Hetzner-setup.md` for full setup guide
- **DNS**: Managed through Cloudflare (wildcard `*.guided-apps.com` and root `@` both point to 188.245.240.32)
- **Repo conventions**: Conventional commits, PRs to main, no direct pushes

### Relationship to Other Projects

- `patriot-pub-crawl` — the flagship trail app, lives at patriotpubcrawl.guided-apps.com
- `note-to-self` — separate unrelated project on same server
- `franconia-notch-brewing` — separate unrelated project on same server

### What to Build First

1. Scaffold the project (repo, Dockerfile, docker-compose.prod.yml)
2. Build the home page with a compelling hero section
3. Deploy to guided-apps.com
4. Iterate on content and additional pages
