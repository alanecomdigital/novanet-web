# Novanet LLC — static website served by nginx (Easypanel)
FROM nginx:1.27-alpine

# Server config: security headers, caching, gzip, bot blocking
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY nginx/security-headers.conf /etc/nginx/snippets/security-headers.conf

# Generates /config.js from the WEB3FORMS_KEY environment variable at startup
COPY docker/40-novanet-config.sh /docker-entrypoint.d/40-novanet-config.sh
RUN chmod +x /docker-entrypoint.d/40-novanet-config.sh

# Website
COPY index.html styles.css script.js robots.txt sitemap.xml site.webmanifest /usr/share/nginx/html/
COPY fonts/ /usr/share/nginx/html/fonts/
COPY img/ /usr/share/nginx/html/img/

EXPOSE 80
