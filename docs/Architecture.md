## Architecture

This is a **Next.js 16 App Router** portfolio website for Juan Carlos Gadea — a Full Stack Developer / Consultant.


### Key Architectural Patterns

**Layout**: `app/layout.jsx` wraps everything with `PortfolioBackground`, `Header`, `StairTransition`, and `PageTransition`. All pages share these global elements.

**Page transitions**: Framer Motion powers both `StairTransition` (staircase animation between routes) and `PageTransition` (fade wrapper around page content).

**Component split**:
- `components/` — Shared components (Header, Nav, MobileNav, Footer, Photo, Social, Stats, etc.)
- `components/ui/` — shadcn/ui primitives (Button, Input, Tabs, Select, Sheet, ScrollArea, Tooltip, Textarea)
- `app/` — Page-level components and the contact API route

**Email**: Contact form POSTs to `/api/send`, which uses Resend (`RESEND_API_KEY` env var required).


### Environment Variables

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for sending contact form emails |

### Path Aliases

`jsconfig.json` sets `baseUrl: "."`, so imports can use root-relative paths (e.g., `import Footer from 'components/Footer'` without `../`). The `@/*` alias also maps to the project root.