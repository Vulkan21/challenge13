# Multi-stage build for static site
FROM node:18-alpine AS builder

WORKDIR /app

# Install curl for downloading Bulma CSS
RUN apk add --no-cache curl

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the static site
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine

# Copy built static files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Add health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
