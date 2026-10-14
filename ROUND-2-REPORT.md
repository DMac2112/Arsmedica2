# Round 2 — section B

- Added “← Wszystkie wersje Arsmedica” at the top of the shared header on all five routes: `/`, `/poz`, `/specjalisci`, `/informacje`, `/kontakt`.
- The link uses relative navigation to the parent showcase (`/medica/` from `/medica/centrum/`). It has a 44px minimum tap height, muted text, and the existing visible keyboard focus outline. It stays in normal document flow and is hidden when printing.
- Facts marked “do potwierdzenia”: none added. No clinic facts changed; existing notices remain.
- Verification: `npm run build`, `npx tsc --noEmit`, and `git diff --check` passed. Direct production SSR checks confirmed all five routes render the return link and resolve to `/medica/`; trailing-slash subpages redirect to their canonical routes.
- Left undone: browser checks at 390px and 360px, including registration phone visibility. The sandbox denied local server binding (`EPERM`) and browser automation was unavailable under the approval policy.
- No git commit or push. The pre-existing untracked `package-lock.json` was left untouched.
