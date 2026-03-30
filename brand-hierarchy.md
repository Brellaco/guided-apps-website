# Guided Applications — Brand & Experience Hierarchy

## Platform

**Guided Applications** (guided-apps.com) is the parent platform company. It provides the underlying technology — GPS navigation, automatic check-ins, group features, manager dashboard — that powers all brands and experiences.

## Brands

Brands are themed product lines, each with its own domain, logo, and identity. A brand creates either:

- **A distinct identity and expectation** — e.g., City Walks signals walking tours, historic sightseeing, and city exploration (not food or alcohol-focused)
- **A strong grouping** — e.g., Explore a DORA groups experiences around Ohio's DORA (Designated Outdoor Refreshment Area) districts, same real-world concept, same app experience, different locations

Current brands:

| Brand | Domain | Focus | Status |
|-------|--------|-------|--------|
| Explore a DORA | exploreadora.com | Ohio DORA district experiences | Active |
| City Walks | city-walks.com | Walking tours, historic sightseeing, city exploration | Active |
| Brew Tours | brew-tours.com | Brewery trails | Branding WIP |

## Experiences

Experiences are individual GPS-guided tours in specific cities. Each experience is a separate PWA served on a subdomain — either under a brand domain or under guided-apps.com for standalone experiences.

Current experiences:

| Experience | Domain | Brand | Status |
|------------|--------|-------|--------|
| Patriot Pub Crawl | patriotpubcrawl.guided-apps.com | Standalone (under platform) | Built |
| Cincinnati Streetcar Sips & Suds | *.guided-apps.com (TBD) | Standalone (under platform) | Not yet built |

## URL Structure

Experiences are subdomains of their parent brand (or the platform for standalone experiences):

```
{experience}.guided-apps.com        — standalone under the platform
{experience}.exploreadora.com       — under Explore a DORA brand
{experience}.city-walks.com         — under City Walks brand
{experience}.brew-tours.com         — under Brew Tours brand
```

Examples:
- `patriotpubcrawl.guided-apps.com`
- `loveland.exploreadora.com`
- `germantowndistrict.city-walks.com`

## Hierarchy Summary

```
Guided Applications (guided-apps.com) — platform
├── Brands — themed product lines with own domains
│   ├── Explore a DORA (exploreadora.com)
│   ├── City Walks (city-walks.com)
│   └── Brew Tours (brew-tours.com)
└── Experiences — individual tours, subdomains of a brand or the platform
    ├── Patriot Pub Crawl (patriotpubcrawl.guided-apps.com)
    └── Cincinnati Streetcar Sips & Suds (TBD)
```

Experiences currently live as standalone under `guided-apps.com` but may move under a brand in the future.
