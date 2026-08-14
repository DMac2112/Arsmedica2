# ArsMedica Centrum — Kalisz (local fork)

Single-page-style informational site for **ARSMEDICA CENTRUM**, a POZ (public GP)
przychodnia in Kalisz. Built on **TanStack Start + React 19 + Tailwind v4 + shadcn/ui**.

This is a **local, independent copy** pulled from the Lovable project
"Kalisz Care Connect" (`arsmedica`) and re-themed. It is **not** wired to Lovable
git sync — commit and push it wherever you like.

## What was changed from the Lovable original

- **Theme: teal → ARSMEDICA red.** All colours are CSS custom-property tokens in
  [`src/styles.css`](src/styles.css). The primary was switched from clinical teal
  to the practice's brand red, **brightened and cleaned** vs. the old house red
  (`#b01f2c`, which read too "bloody") — lifted lightness, pushed the hue back to
  a truer red. Still passes WCAG AA for white-on-red on the header bar.
- **Accent: muted medical green** — the practice's real secondary colour, used
  sparingly (service icons, private-specialist CTA) so it complements the red.
- **Content unchanged** — all Polish copy, phone numbers, doctors, specialists and
  hours are verbatim from the real clinic data ([`src/data/clinic.ts`](src/data/clinic.ts)).

## Not copied over

The Lovable scaffold shipped the full shadcn/ui component library (~55 files under
`src/components/ui/`), none of which the pages import — the pages use custom
`surface-card` / `btn-*` utilities. Those unused files were left out to keep the
repo clean. Regenerate any you need with `bunx shadcn@latest add <name>`.
`bun.lock` was also omitted; it regenerates on install.

## Run it

Uses **bun** (see `bunfig.toml`), but npm/pnpm work too.

```sh
bun install
bun run dev      # http://localhost:3000
```

```sh
bun run build    # production build
bun run preview
```

## Structure

- `src/routes/` — file-based routes: `index`, `poz`, `specjalisci`, `informacje`, `kontakt`
- `src/components/` — `site-header`, `site-footer`
- `src/data/clinic.ts` — all clinic content (single source of truth)
- `src/styles.css` — the entire design system / theme tokens

## Built with

- TanStack Start · React 19 · TypeScript · Tailwind CSS v4 · shadcn/ui · lucide-react
