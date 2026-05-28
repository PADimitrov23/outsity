# Outsity — Official Band Site

A dark, artistic band website for **Outsity** built with TanStack Start (React) and Tailwind CSS v4, deployed on Netlify.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, marquee, and section links |
| `/merch` | Merchandise grid — placeholder items ready to replace |
| `/drops` | Releases page — featured drop + drop list |
| `/members` | Band members — alternating layout with placeholder bios |

## Tech Stack

- **Framework**: TanStack Start (React 19, file-based routing)
- **Styling**: Tailwind CSS v4 + custom CSS variables
- **Typography**: Archivo Black (display) + Inconsolata (mono body) via Google Fonts
- **Deployment**: Netlify

## Running Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Editing Placeholders

Each page has a clearly marked `PLACEHOLDER` constant at the top of the file — edit those arrays to add your real content:

- **Merch**: `src/routes/merch.tsx` → `MERCH_ITEMS`
- **Drops**: `src/routes/drops.tsx` → `DROPS`
- **Members**: `src/routes/members.tsx` → `MEMBERS`
