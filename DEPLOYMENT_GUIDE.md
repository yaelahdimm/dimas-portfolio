# Deployment Guide — Dimas Portfolio

This document explains how to deploy the dimas-portfolio project to external hosting platforms outside of Manus infrastructure.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Manus-Specific Dependencies](#manus-specific-dependencies)
3. [Environment Variables](#environment-variables)
4. [Database Setup](#database-setup)
5. [Deployment Steps](#deployment-steps)
6. [Troubleshooting](#troubleshooting)

---

## Project Overview

**Tech Stack:**
- Frontend: React 19 + Tailwind CSS 4 + Vite
- Backend: Express 4 + tRPC 11
- Database: MySQL/TiDB (Drizzle ORM)
- Authentication: OAuth 2.0 (Manus OAuth or custom provider)
- File Storage: AWS S3 (or S3-compatible services)
- Language: TypeScript

**Project Structure:**
```
dimas-portfolio/
├── client/                 # React frontend
│   ├── src/
│   │   ├── pages/         # Page components
│   │   ├── components/    # Reusable UI components
│   │   ├── contexts/      # React contexts (LanguageContext, etc.)
│   │   ├── _core/         # Core hooks (useAuth, etc.)
│   │   └── lib/           # tRPC client setup
│   ├── public/            # Static assets
│   └── index.html
├── server/                # Express backend
│   ├── _core/            # Core server logic (OAuth, context, LLM, etc.)
│   ├── db.ts             # Database query helpers
│   ├── routers.ts        # tRPC procedure definitions
│   └── storage.ts        # S3 file storage helpers
├── shared/               # Shared types and constants
├── drizzle/              # Database schema and migrations
├── package.json
├── vite.config.ts
├── drizzle.config.ts
├── tsconfig.json
└── .env.example          # Environment variables template
```

---

## Manus-Specific Dependencies

### Critical Manus Dependencies to Remove/Replace

#### 1. **`vite-plugin-manus-runtime`** (in `vite.config.ts`)

**What it does:**
- Injects Manus-specific runtime utilities into the Vite build process
- Handles Manus infrastructure integration (logging, telemetry, etc.)
- NOT required for standalone deployment

**How to remove:**
```bash
# 1. Remove from package.json devDependencies
npm uninstall vite-plugin-manus-runtime

# 2. Remove from vite.config.ts:
# - Delete: import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
# - Delete from plugins array: vitePluginManusRuntime(),
```

**Updated vite.config.ts plugins line:**
```typescript
// Before:
const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime(), vitePluginManusDebugCollector()];

// After (for external deployment):
const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusDebugCollector()];
```

#### 2. **Manus OAuth Integration** (in `server/_core/oauth.ts`)

**Current setup:**
- Uses Manus OAuth (`OAUTH_SERVER_URL = https://api.manus.im`)
- Requires `VITE_APP_ID` from Manus platform
- Callback URL: `{your-domain}/api/oauth/callback`

**For external deployment, you have two options:**

**Option A: Use a different OAuth provider (recommended)**
- Google OAuth
- GitHub OAuth
- Auth0
- Custom OAuth server

**Option B: Keep Manus OAuth (if you have credentials)**
- Update `OAUTH_SERVER_URL` to your Manus OAuth endpoint
- Update `VITE_APP_ID` to your Manus app ID
- Ensure callback URL is registered in Manus dashboard

#### 3. **Manus Built-in APIs** (in `server/_core/`)

The following files use Manus built-in APIs:

- **`llm.ts`** — Uses `BUILT_IN_FORGE_API_URL` for LLM calls
- **`imageGeneration.ts`** — Uses Manus image generation service
- **`voiceTranscription.ts`** — Uses Manus Whisper API
- **`dataApi.ts`** — Uses Manus data API
- **`notification.ts`** — Uses Manus notification service

**For external deployment:**
- These services are **optional** (not used in current portfolio)
- If you want to use LLM/image generation, replace with external services:
  - OpenAI API
  - Anthropic Claude
  - Hugging Face
  - Replicate
  - etc.

#### 4. **Manus Debug Collector** (in `vite.config.ts`)

**What it does:**
- Collects browser console logs, network requests, and session replay
- Writes to `.manus-logs/` directory
- Useful for debugging during development

**For external deployment:**
- Can be kept as-is (harmless)
- Or remove if you don't need debug logging

---

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | MySQL connection string | `mysql://user:pass@localhost:3306/dimas` |
| `JWT_SECRET` | Session signing secret | `your-secret-key-here` |
| `NODE_ENV` | Environment (development/production) | `production` |
| `VITE_APP_TITLE` | Website title | `Dimas Stya Nugraha — Digital Creative` |

### OAuth Variables (if using OAuth)

| Variable | Description | Example |
|----------|-------------|---------|
| `OAUTH_SERVER_URL` | OAuth provider URL | `https://api.github.com` |
| `VITE_APP_ID` | OAuth application ID | `your-app-id` |
| `VITE_OAUTH_PORTAL_URL` | OAuth login portal | `https://github.com/login/oauth/authorize` |
| `OWNER_OPEN_ID` | Owner's OAuth ID | `user-id-from-oauth` |
| `OWNER_NAME` | Owner's name | `Dimas Stya Nugraha` |

### S3 Variables (for file storage)

| Variable | Description | Example |
|----------|-------------|---------|
| `AWS_S3_BUCKET` | S3 bucket name | `my-portfolio-bucket` |
| `AWS_REGION` | AWS region | `us-east-1` |
| `AWS_ACCESS_KEY_ID` | AWS access key | `AKIA...` |
| `AWS_SECRET_ACCESS_KEY` | AWS secret key | `wJalr...` |

### Optional Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_APP_LOGO` | Logo URL | `https://cdn.example.com/logo.png` |
| `BUILT_IN_FORGE_API_URL` | Manus LLM API (optional) | `https://api.manus.im/forge` |
| `BUILT_IN_FORGE_API_KEY` | Manus LLM API key (optional) | `key-here` |
| `VITE_ANALYTICS_ENDPOINT` | Analytics service URL | `https://analytics.example.com` |

See `.env.example` for complete list with descriptions.

---

## Database Setup

### 1. Create Database

```bash
# MySQL
mysql -u root -p
CREATE DATABASE dimas_portfolio CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
EXIT;
```

### 2. Configure DATABASE_URL

```bash
# .env
DATABASE_URL=mysql://root:password@localhost:3306/dimas_portfolio
```

### 3. Run Migrations

```bash
# Generate and run migrations
pnpm db:push
```

This command:
- Generates migration files from `drizzle/schema.ts`
- Applies migrations to your database
- Creates all required tables

---

## Deployment Steps

### Step 1: Prepare Source Code

```bash
# Clone from GitHub
git clone https://github.com/yaelahdimm/dimas-portfolio.git
cd dimas-portfolio

# Install dependencies
pnpm install

# Remove Manus-specific plugins
npm uninstall vite-plugin-manus-runtime

# Update vite.config.ts (remove vitePluginManusRuntime)
```

### Step 2: Configure Environment

```bash
# Copy .env.example to .env
cp .env.example .env

# Edit .env with your values
nano .env

# Key variables to set:
# - DATABASE_URL
# - JWT_SECRET
# - OAUTH_SERVER_URL, VITE_APP_ID (if using OAuth)
# - AWS_S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY
# - VITE_APP_TITLE, VITE_APP_LOGO
```

### Step 3: Setup Database

```bash
# Run migrations
pnpm db:push
```

### Step 4: Build Project

```bash
# Build frontend and backend
pnpm build

# Output:
# - dist/public/    (frontend static files)
# - dist/index.js   (backend server)
```

### Step 5: Deploy to Hosting

#### Option A: Railway, Render, or Heroku

```bash
# 1. Create account and new project
# 2. Connect GitHub repository
# 3. Set environment variables in dashboard
# 4. Deploy

# Buildpack command:
pnpm build

# Start command:
pnpm start
```

#### Option B: VPS (AWS EC2, DigitalOcean, Linode)

```bash
# 1. SSH into server
ssh user@your-server.com

# 2. Install Node.js and MySQL
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs mysql-server

# 3. Clone repository
git clone https://github.com/yaelahdimm/dimas-portfolio.git
cd dimas-portfolio

# 4. Install dependencies
pnpm install

# 5. Configure .env
nano .env

# 6. Setup database
pnpm db:push

# 7. Build
pnpm build

# 8. Start with PM2 (process manager)
npm install -g pm2
pm2 start "pnpm start" --name "dimas-portfolio"
pm2 save
pm2 startup
```

#### Option C: Docker

```dockerfile
# Dockerfile
FROM node:22-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .

# Remove Manus plugin
RUN npm uninstall vite-plugin-manus-runtime

RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]
```

```bash
# Build and run
docker build -t dimas-portfolio .
docker run -p 3000:3000 --env-file .env dimas-portfolio
```

### Step 6: Setup Domain

1. **Buy domain** (Namecheap, GoDaddy, etc.)
2. **Point DNS to your hosting:**
   - If using Vercel/Railway: Add CNAME record
   - If using VPS: Add A record pointing to server IP
3. **Setup SSL certificate:**
   - Let's Encrypt (free): `certbot certonly --standalone -d yourdomain.com`
   - Or use hosting provider's built-in SSL

### Step 7: Verify Deployment

```bash
# Test API
curl https://yourdomain.com/api/trpc/auth.me

# Check logs
pnpm logs  # or pm2 logs for PM2

# Monitor
pm2 monit  # if using PM2
```

---

## Troubleshooting

### Build Errors

**Error: `vite-plugin-manus-runtime` not found**
- Solution: Remove from `vite.config.ts` and `package.json`

**Error: `DATABASE_URL` is invalid**
- Solution: Check MySQL connection string format: `mysql://user:pass@host:port/database`

**Error: OAuth callback URL mismatch**
- Solution: Register correct callback URL in OAuth provider dashboard
- Format: `https://yourdomain.com/api/oauth/callback`

### Runtime Errors

**Error: S3 credentials invalid**
- Solution: Verify AWS credentials in `.env`
- Check IAM permissions for S3 bucket access

**Error: Port 3000 already in use**
- Solution: Change port in server code or kill existing process
- `lsof -i :3000` and `kill -9 <PID>`

**Error: Database connection refused**
- Solution: 
  - Verify MySQL is running: `sudo systemctl status mysql`
  - Check DATABASE_URL is correct
  - Ensure database user has correct permissions

### Performance Issues

**Slow page loads:**
- Enable gzip compression in Express
- Use CDN for static assets
- Optimize database queries

**High memory usage:**
- Check for memory leaks in React components
- Use production build: `NODE_ENV=production pnpm start`

---

## Support & Resources

- **Vite Documentation:** https://vitejs.dev/
- **React Documentation:** https://react.dev/
- **tRPC Documentation:** https://trpc.io/
- **Drizzle ORM:** https://orm.drizzle.team/
- **Express.js:** https://expressjs.com/

---

## License

MIT
