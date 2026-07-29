# The Valley Shelf – Antelope Valley Intelligence

A premium interactive 3D bookshelf of market reports, neighborhood guides, and strategy playbooks for the Antelope Valley.

Built by **Mike Watson** (mikewatsonrealtor.com) on top of the open-source [Complete Shelf](https://github.com/mintdotgg/bookshelf) project (Three.js + Next.js recreation of the Stripe Press experience).

This is not affiliated with Stripe. The underlying engine remains the independent Complete Shelf open-source project.

## Features

- Continuous horizontal 3D shelf with drag, scroll, arrow keys, and tick navigation
- Click any volume to pull it forward, then orbit / pan / zoom for inspection
- Deterministic procedural hardcovers (cloth texture, gold accents, motif art)
- Optional real cover images under `public/books/<id>/cover.webp`
- Soft studio lighting, realistic shadows, warm cream environment
- Clean editorial typography and “Mike Watson · Antelope Valley” branding

## Catalog (12 volumes)

1. **2026 Antelope Valley Market Report** — Annual Intelligence  
2. **Lancaster Pricing Playbook** — City Guides  
3. **Palmdale & Quartz Hill** — Neighborhood Series  
4. **Solar + Energy Homes** — Special Reports  
5. **First-Time Buyer Handbook** — Client Resources  
6. **Seller’s Playbook 2026** — Strategy Series  
7. **Neighborhood Guides** — Local Intelligence  
8. **Closed Transactions Yearbook** — Track Record  
9. **Prop 19 & Tax Strategies** — Tax & Legal  
10. **AV Investment Properties** — Investor Series  
11. **Home Energy Systems** — Special Reports  
12. **The Watson Process** — About the Work  

## Quick start

Requires Node.js 22.13 or newer.

```bash
git clone https://github.com/mikewatson06/bookshelf.git
cd bookshelf
npm ci
npm run dev
```

Open http://localhost:3000

Before committing changes:

```bash
npm run check
npm run security:audit
```

## Customization

- **Books**: edit `app/catalog.ts`
- **Branding / labels**: edit `app/site-config.ts`
- **Cover art**: drop images at `public/books/<id>/cover.webp` and set `coverImage`
- **Engine / lighting / motion**: `app/ShelfEngine.ts`, `app/cover-art.ts`, `app/book-motion.ts`

No cover image is required. Title, author, palette (`cover` / `accent` / `ink`), and motif produce a complete procedural hardcover.

See [docs/adding-books.md](docs/adding-books.md) for the full field reference.

## Project structure

- `app/catalog.ts` — the 12 Valley Shelf volumes
- `app/site-config.ts` — “The Valley Shelf” branding
- `app/ShelfEngine.ts` — Three.js renderer, shelf layout, input, animation
- `app/cover-art.ts` — procedural hardcover generator
- `app/book-motion.ts` — collision-safe poses
- `public/books/` — optional real cover images

## Integration path

This fork is ready to be:

1. Deployed standalone (Vercel / any Node host), or
2. Embedded / linked from mikewatsonrealtor.com as “The Valley Shelf”.

Later work can add real cover photography, deeper report content, and MLS-backed live data.

## Credits

- Original engine: [mintdotgg/bookshelf](https://github.com/mintdotgg/bookshelf) (Complete Shelf)
- Branding & catalog: Mike Watson / K&M Watson, INC · Antelope Valley
