# Novanet LLC — static site served by nginx (for Easypanel / any Docker host)
FROM nginx:1.27-alpine

# Server config (security headers, caching, compression, bot blocking)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/security-headers.conf /etc/nginx/snippets/security-headers.conf

# Website files
COPY index.html styles.css script.js robots.txt sitemap.xml site.webmanifest /usr/share/nginx/html/
COPY fonts /usr/share/nginx/html/fonts
COPY img /usr/share/nginx/html/img

EXPOSE 80
