# Stage 1: Build
FROM node:20 AS build
# Install system dependencies
RUN apt-get update && apt-get install -y \
    curl \
    git \
    python3 \
    build-essential \
    libtool \
    automake \
    autoconf \
    nasm \
    postgresql-client \
    openssl \
    libvips-dev \
    libcairo2-dev \
    libpango1.0-dev \
    libjpeg-dev \
    libgif-dev \
    librsvg2-dev \
    libssl-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Enable Corepack and Yarn
RUN npm install -g corepack && corepack enable && corepack prepare yarn@3.4.1 --activate && yarn --version

# Set working directory
WORKDIR /calcom

# Copy package.json and yarn.lock
COPY package.json yarn.lock ./

# Copy the entire project structure
COPY . .

RUN yarn add @calcom/config

# Clean cache
RUN yarn cache clean

# Install dependencies
RUN yarn install --frozen-lockfile || cat /tmp/xfs-*/build.log

# Run linting
RUN yarn lint || echo "Linting failed, but continuing..."

# Build the application
RUN yarn build

# Clean cache
RUN yarn cache clean

# Stage 2: Final image
FROM node:20

# Install OpenSSL and Nginx
RUN apt-get update && apt-get install -y openssl nginx && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /calcom

# Copy dependencies and build artifacts
COPY --from=build /calcom .

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Increase Node.js memory limit
ENV NODE_OPTIONS="--max-old-space-size=8192"

# Expose ports
EXPOSE 80 3000
CMD ["sh", "-c", "npx prisma migrate deploy && yarn start & ./wait-for-app.sh"]
