# WebPortfolio

Personal portfolio website for Nuthan Reddy — built with **Astro v6**, **TypeScript**, **Tailwind CSS v4**, and deployed on **Cloudflare Pages**.

Dark minimal design with navy background, blue accents, and card-based layout. Zero JavaScript shipped — pure static HTML + CSS.

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Astro v6](https://astro.build) | Static site generator (zero JS shipped) |
| [TypeScript](https://typescriptlang.org) | Type-safe development (strict mode) |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first styling via `@theme` |
| [Cloudflare Pages](https://pages.cloudflare.com) | Deployment & CDN |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:4321)
npm run dev

# Type-check and build for production
npm run build

# Preview production build locally
npm run preview
```

## Project Structure

```
src/
├── pages/index.astro      # Single-page portfolio (all sections)
├── layouts/BaseLayout.astro # HTML head, meta, fonts
├── components/
│   ├── Navbar.astro          # Fixed top nav with blur backdrop
│   ├── Hero.astro            # Split hero — heading + info cards
│   ├── About.astro           # Stats grid (years, projects, etc.)
│   ├── Experience.astro      # Work timeline with highlights & tags
│   ├── Education.astro       # Education cards grid
│   ├── Certifications.astro  # Credential badge cards
│   ├── SectionHeading.astro  # Reusable section header
│   ├── TechTag.astro         # Technology keyword badge
│   ├── TimelineItem.astro    # Timeline entry (dot, line, content)
│   ├── Projects.astro        # Featured projects 2-col grid
│   ├── ProjectCard.astro     # Single project card with details
│   ├── Skills.astro          # Skills grouped by category
│   ├── SkillMap.astro        # Skills × Projects relationship map
│   ├── Talks.astro           # Talks & OSS contributions
│   ├── Courses.astro         # Courses & learning list
│   └── Footer.astro          # Social links, back-to-top, copyright
├── styles/global.css       # Tailwind @theme + base styles
├── lib/data.ts             # Typed data exports from JSON
└── types/resume.ts         # TypeScript interfaces
public/                     # Static assets (favicon, images)
nuthan-resume-template.json # Resume data source (single source of truth)
```

## Agent Instructions

| File | Agent |
|------|-------|
| `CLAUDE.md` | Claude Code |
| `.cursorrules` | Cursor / Windsurf (Karpathy guidelines) |
| `.github/copilot-instructions.md` | GitHub Copilot |
| `.github/agents/frontend-developer.md` | Frontend Dev |
| `.github/agents/backend-developer.md` | Backend Dev |
| `.github/agents/seo-expert.md` | SEO Expert |
| `.github/agents/ux-designer.md` | UX Designer |
