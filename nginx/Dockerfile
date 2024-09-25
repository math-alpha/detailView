FROM nginx:latest

# Install envsubst
RUN apt-get update && apt-get install -y gettext-base

# Copy the nginx.conf template
COPY nginx.conf.template /etc/nginx/templates/nginx.conf.template

# Copy the entrypoint script
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Set entrypoint
ENTRYPOINT ["/entrypoint.sh"]