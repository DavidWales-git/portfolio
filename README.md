# UKD.dev — Portfolio

Personal portfolio site for Ugochukwu Kenechukwu David — Full-Stack Web Developer & AI Data Specialist. Built with Next.js, TypeScript, and Tailwind CSS.

**Live site:** _add your deployed URL here_

## Tech Stack

- [Next.js](https://nextjs.org) (App Router)
- TypeScript
- Tailwind CSS v4
- [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for optimized loading of Inter

## Getting Started

This project uses [pnpm](https://pnpm.io). Install dependencies, then run the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally. The page auto-updates as you edit `app/page.tsx`.

## Project Structure

```
app/
  layout.tsx    # Root layout, metadata, font setup
  page.tsx      # Single-page portfolio (hero, about, skills, projects, contact)
  globals.css   # Tailwind import + theme tokens
```

## Editing Content

- **Projects** — update the `projects` array at the top of `app/page.tsx` with new entries, descriptions, tags, and links.
- **Skills** — update the `skills` object in the same file.
- **Site metadata** (title/description for SEO) — `app/layout.tsx`.

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` and Vercel will build and deploy automatically, or run:

```bash
vercel --prod
```

## License

Personal project — all rights reserved.
