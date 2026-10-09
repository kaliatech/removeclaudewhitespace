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

To host it, serve the `out/` directory with any static file server (nginx, Caddy, etc.). No Node.js process is needed at runtime.

## License

MIT
