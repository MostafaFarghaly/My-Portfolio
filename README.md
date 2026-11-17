# Mostafa Farghaly — Creative Portfolio

A responsive, multi-page portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide React.

## Requirements
- Node.js 20.9 or later
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Pages
- `/` — Home
- `/projects` — Projects index
- `/projects/smartfinishing` — Project details
- `/projects/web-shop` — Project details
- `/projects/next-prisma-lab` — Project details
- `/about` — About and skills
- `/contact` — Contact links

## Customize your content

Edit `lib/data.ts`:
- `profile`: name, role, email, location, GitHub, LinkedIn, resume path
- `projects`: titles, descriptions, tech stack, source and live links, visual accent
- `skills`: skills displayed on the Home and About pages
- `experience`: timeline entries

Only include skills, achievements, project status, and experience that accurately represent you. Add a `public/resume.pdf` file if you want to use the resume link.

## Notes
- Project artwork is generated with CSS, so you do not need image assets to get started.
- Replace empty `live` fields with working deployed URLs when available.
- The contact page uses a `mailto:` link; it does not submit to a backend.
- The portfolio uses sample project summaries as editable starter content. Verify and update dates and descriptions before publishing.
