# Novanet LLC — Website

Static website for Novanet LLC (novanetdigital.com). Plain HTML, CSS and JavaScript — no build tools.

## Deploy on Easypanel (Docker + nginx)
1. Create an App service.
2. Source: GitHub repo (or Upload this folder).
3. Build: **Dockerfile** (file: `Dockerfile`).
4. Domains: add `novanetdigital.com` (and `www`), proxy port **80**, HTTPS on.

`nginx/default.conf` applies security headers, caching, gzip and bot blocking (nginx ignores `.htaccess`).

## Deploy on Hostinger shared hosting (Apache)
Upload the site files to `public_html`. `.htaccess` applies the same rules.

## After editing CSS/JS
Bump `?v=3` in `index.html` so browsers fetch the new version.
