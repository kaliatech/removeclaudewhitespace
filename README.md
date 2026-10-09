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
docker compose up -d --build   # http://localhost:33080
```

The `Dockerfile` copies `out/` into a [miniserve](https://github.com/svenstaro/miniserve) image that runs as `nobody`. miniserve sends a Content-Security-Policy that limits the page to same-origin requests, so the browser blocks any attempt to send data to another host.

Any other static file server works too. No Node.js process is needed at runtime.

### Published image

`.github/workflows/docker-publish.yml` builds the site and pushes `ghcr.io/kaliatech/removeclaudewhitespace`.

| Trigger | Image tags |
|---|---|
| Push to `main` | `latest`, `sha-<short>` |
| Push tag `v1.2.3` | `1.2.3`, `latest`, `sha-<short>` |

```yaml
services:
  web:
    image: ghcr.io/kaliatech/removeclaudewhitespace:latest
    ports:
      - "33080:8080"
    read_only: true
    restart: unless-stopped
```

## License

MIT
