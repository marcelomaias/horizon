# Horizon

A headless content platform built for marketing teams — powered by Payload CMS 3 and Next.js 15.

![Horizon homepage](https://raw.githubusercontent.com/marcelomaias/horizon/main/public/screenshots/Home-Hero.png)

Horizon gives marketing teams full control over their content without sacrificing developer experience. Every page, block, and content model is managed through Payload CMS, keeping the stack lean and the workflow fast.

---

![Payload live editing](https://raw.githubusercontent.com/marcelomaias/horizon/main/public/screenshots/Page-Editing.png)

---

## What this demonstrates

**Payload CMS as a page builder.** Pages are assembled from a library of pre-built blocks — Hero, LogoCloud, Features, CMS Section, Performance and CTA. Editors pick and arrange blocks; the design system stays intact by construction. No free-form drag-and-drop, no broken layouts.

**Live preview.** Changes made in the Payload admin appear in an embedded preview pane in real time, before anything is published. The screenshot above shows this workflow in action.

**Role-based access control.** Three roles — Admin, Editor, and User — are enforced at the collection, field, and document levels using composable access functions (`admin`, `editor`, `own`, `or`). Roles are write-protected so users can never escalate their own privileges.

**A real content model.** The site has a Pages collection with a block layout builder and Header/Footer globals.

**Type-safe throughout.** Payload generates TypeScript types from the schema. Next.js 15 handles routing and rendering with full RSC support.

---

## Tech stack

| Layer     | Choice                     |
| --------- | -------------------------- |
| Framework | Next.js 15 (App Router)    |
| CMS       | Payload CMS 3              |
| Language  | TypeScript                 |
| Styling   | Tailwind CSS               |
| Database  | Neon (Postgres)            |
| Storage   | Vercel Blob                |
| Hosting   | Vercel                     |
| Fonts     | DM Serif Display · DM Sans |

---

## Project structure

```
src/
├── app/                  # Next.js App Router
├── blocks/               # Layout builder blocks
├── collections/          # Payload collections (Pages, Posts, Users, Links, Media)
├── globals/              # Header, Footer
└── payload-types.ts      # Auto-generated types
```

---

## Running locally

```bash
pnpm install
cp .env.example .env.local
# Fill in DATABASE_URI, PAYLOAD_SECRET, BLOB_READ_WRITE_TOKEN
pnpm dev
```

After any schema change:

```bash
pnpm generate:types
pnpm generate:importmap
```

---
