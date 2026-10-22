#!/bin/sh
# Writes /config.js at container start from Easypanel environment variables.
# Set WEB3FORMS_KEY in Easypanel → App → Environment, then Deploy.
set -eu
KEY="${WEB3FORMS_KEY:-}"
# Accept only the characters a Web3Forms key can contain
case "$KEY" in
  *[!A-Za-z0-9-]*) echo "novanet: WEB3FORMS_KEY has invalid characters, ignoring" >&2; KEY="" ;;
esac
printf 'window.NOVANET_CONFIG = { web3formsKey: "%s" };\n' "$KEY" > /usr/share/nginx/html/config.js
if [ -n "$KEY" ]; then echo "novanet: contact form key loaded"; else echo "novanet: WEB3FORMS_KEY not set, contact form disabled" >&2; fi
