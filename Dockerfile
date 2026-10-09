# Serves the static export in ./out. Run `npm run build` first; the image only copies the result.
FROM svenstaro/miniserve:0.35.0-alpine

COPY out/ /srv/

USER 65534:65534
EXPOSE 8080

CMD [ \
  "/srv", \
  "--index=index.html", \
  "--disable-indexing", \
  "--hide-version-footer", \
  # The browser refuses requests to any other origin, so the page can't send data elsewhere.
  "--header=Content-Security-Policy:default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'", \
  "--header=Referrer-Policy:no-referrer", \
  "--header=X-Robots-Tag:noindex, nofollow", \
  "--header=X-Content-Type-Options:nosniff" \
]
