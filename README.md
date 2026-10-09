# Remove Claude Whitespace

Free, client-side tool that cleans messy output copied from Claude Code, AI assistants, and terminals — strips line numbers, ANSI escapes, box-drawing characters, and extra whitespace.

Fork of `coeymusa/removeclaudewhitespace`, changed to run with no outbound network calls:

- No analytics, IndexNow pings, or cross-promotion.
- Fonts are bundled from `@fontsource-variable/*` instead of downloaded from Google Fonts.
- Next.js telemetry is disabled in the npm scripts.
- Pages are marked `noindex` and send no `Referer` on outbound links.

## Stack

- Next.js 15 App Router, static export
- React 19
- TypeScript
- Tailwind CSS

## Develop

```bash
npm install
npm run dev
```

`next dev` checks `registry.npmjs.org` for a newer Next.js version on startup. Next has no setting to turn this off. `next build` does not do this.

## Build

```bash
npm run build   # writes static files to out/
npm run start   # local preview at http://127.0.0.1:3000
```

## Host

```bash
npm run build
docker compose up -d   # http://localhost:8080
```

`compose.yaml` runs [miniserve](https://github.com/svenstaro/miniserve) as `nobody` with `out/` mounted read-only. It sends a Content-Security-Policy that limits the page to same-origin requests, so the browser blocks any attempt to send data to another host. After a rebuild, run `docker compose restart`. The build replaces the `out/` directory, and the running container keeps serving the old, deleted one.

Any other static file server works too. No Node.js process is needed at runtime.

## License

MIT
