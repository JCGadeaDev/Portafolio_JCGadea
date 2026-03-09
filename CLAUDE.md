
### Route Structure

- `/` — Home (hero, stats, social links, CV download)
- `/resume` — Resume/CV page
- `/work` — Portfolio/projects page
- `/services` — Services page
- `/contact` — Contact form page
- `/api/send` — API route for contact form email (uses **Resend**)

### Styling

- **Tailwind CSS** with a custom dark theme:
  - `primary`: `#0F172A` (main background — Deep Space Blue)
  - `secondary`: `#1E293B` (cards/alternate sections)
  - `accent`: `#22D3EE` / hover `#06B6D4` (Cyan Tech — buttons, highlights)
  - `text.primary`: `#F8FAFC`, `text.muted`: `#94A3B8`
- Font: `JetBrains Mono` (via `next/font/google`), exposed as `--font-jetbrainsMono` / `font-primary`
- shadcn/ui components configured via `components.json`



