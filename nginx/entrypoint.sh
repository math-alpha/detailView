#!/bin/bash

# Substitute environment variables in the nginx template
envsubst '$BACKEND_HOST $BACKEND_PORT $FRONTEND_HOST $FRONTEND_PORT' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/conf.d/default.conf

# Start Nginx
nginx -g 'daemon off;'