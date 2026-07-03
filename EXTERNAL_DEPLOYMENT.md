# External Deployment Guide

This guide helps you move the dimas-portfolio project from Manus to external hosting platforms.

## Quick Start

### 1. Clone from GitHub

```bash
git clone https://github.com/yaelahdimm/dimas-portfolio.git
cd dimas-portfolio
pnpm install
```

### 2. Remove Manus Dependencies

```bash
# Remove Manus-specific plugin
npm uninstall vite-plugin-manus-runtime

# Edit vite.config.ts:
# - Remove: import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";
# - Remove from plugins array: vitePluginManusRuntime(),
```

### 3. Configure Environment

```bash
# Copy template
cp .env.example .env

# Edit with your values
nano .env
```

**Minimum required variables:**
- `DATABASE_URL` — MySQL connection string
- `JWT_SECRET` — Session secret (generate: `openssl rand -base64 32`)
- `VITE_APP_TITLE` — Website title
- `NODE_ENV` — Set to `production`

### 4. Setup Database

```bash
# Run migrations
pnpm db:push
```

### 5. Build & Deploy

```bash
# Build
pnpm build

# Start (local testing)
pnpm start

# Deploy to hosting platform (see options below)
```

---

## Deployment Options

### Option 1: Railway (Recommended for beginners)

1. **Create account:** https://railway.app
2. **Connect GitHub:** Link your GitHub repository
3. **Add MySQL plugin:** In Railway dashboard
4. **Set environment variables:**
   - `DATABASE_URL` (auto-filled by Railway MySQL)
   - `JWT_SECRET`
   - `VITE_APP_TITLE`
   - Other optional variables
5. **Deploy:** Railway auto-deploys on git push

**Cost:** Free tier available, ~$5-10/month for production

### Option 2: Render

1. **Create account:** https://render.com
2. **Create new Web Service**
3. **Connect GitHub repository**
4. **Set build command:** `pnpm build`
5. **Set start command:** `pnpm start`
6. **Add environment variables** in dashboard
7. **Connect PostgreSQL or MySQL** (external database)

**Cost:** Free tier available, ~$7-12/month for production

### Option 3: Heroku (Legacy, but still works)

```bash
# Install Heroku CLI
npm install -g heroku

# Login
heroku login

# Create app
heroku create your-app-name

# Add MySQL add-on
heroku addons:create cleardb:ignite

# Set environment variables
heroku config:set JWT_SECRET="your-secret"
heroku config:set VITE_APP_TITLE="Your Title"

# Deploy
git push heroku main
```

### Option 4: Docker + Any VPS

**Create Dockerfile:**
```dockerfile
FROM node:22-alpine
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN npm uninstall vite-plugin-manus-runtime
RUN pnpm build
EXPOSE 3000
CMD ["pnpm", "start"]
```

**Deploy to DigitalOcean App Platform:**
1. Connect GitHub
2. Select repository
3. Build command: `docker build -t app .`
4. Run command: `docker run -p 3000:3000 app`
5. Add environment variables

**Deploy to AWS ECS, Google Cloud Run, etc.:**
- Similar process with Docker image

### Option 5: Traditional VPS (AWS EC2, DigitalOcean Droplet, Linode)

```bash
# SSH into server
ssh root@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Install MySQL
sudo apt-get install -y mysql-server

# Clone repository
git clone https://github.com/yaelahdimm/dimas-portfolio.git
cd dimas-portfolio

# Install dependencies
pnpm install

# Configure environment
nano .env

# Setup database
pnpm db:push

# Build
pnpm build

# Install PM2 (process manager)
npm install -g pm2

# Start with PM2
pm2 start "pnpm start" --name "portfolio"
pm2 save
pm2 startup

# Setup reverse proxy (Nginx)
sudo apt-get install -y nginx
# Configure Nginx to proxy to localhost:3000
```

---

## Important: Manus-Specific Code

### Files with Manus Dependencies

1. **`server/_core/oauth.ts`** — Uses Manus OAuth
   - For external deployment: Switch to GitHub OAuth, Google OAuth, or Auth0
   - See [OAuth Migration Guide](#oauth-migration-guide)

2. **`server/_core/llm.ts`** — Uses Manus LLM API
   - Optional (not used in current portfolio)
   - For external: Use OpenAI, Anthropic, or similar

3. **`server/_core/imageGeneration.ts`** — Uses Manus image generation
   - Optional (not used in current portfolio)
   - For external: Use Replicate, Stability AI, or similar

4. **`server/_core/notification.ts`** — Uses Manus notification service
   - Optional (not used in current portfolio)
   - For external: Use SendGrid, Mailgun, or similar

### What Works Without Changes

✅ Database (Drizzle ORM) — Works with any MySQL database
✅ Frontend (React + Vite) — Works anywhere
✅ Backend (Express + tRPC) — Works anywhere
✅ File storage (S3 helpers) — Works with AWS S3 or compatible services
✅ Authentication flow — Works with any OAuth provider

---

## OAuth Migration Guide

### Current Setup (Manus)

```typescript
// server/_core/oauth.ts
const oauthConfig = {
  serverUrl: process.env.OAUTH_SERVER_URL, // https://api.manus.im
  appId: process.env.VITE_APP_ID,
  callbackUrl: `${origin}/api/oauth/callback`,
};
```

### Switch to GitHub OAuth

1. **Create GitHub OAuth App:**
   - Go to https://github.com/settings/developers
   - New OAuth App
   - Authorization callback URL: `https://yourdomain.com/api/oauth/callback`

2. **Update environment variables:**
   ```
   OAUTH_SERVER_URL=https://github.com/login/oauth
   VITE_APP_ID=your-github-client-id
   OAUTH_CLIENT_SECRET=your-github-client-secret
   ```

3. **Update `server/_core/oauth.ts`:**
   ```typescript
   // Add GitHub-specific logic
   const clientSecret = process.env.OAUTH_CLIENT_SECRET;
   ```

### Switch to Google OAuth

1. **Create Google OAuth credentials:**
   - Go to https://console.cloud.google.com
   - Create OAuth 2.0 Client ID
   - Authorized redirect URIs: `https://yourdomain.com/api/oauth/callback`

2. **Update environment variables:**
   ```
   OAUTH_SERVER_URL=https://accounts.google.com
   VITE_APP_ID=your-google-client-id
   OAUTH_CLIENT_SECRET=your-google-client-secret
   ```

---

## Database Migration

### From Manus Database to External MySQL

1. **Export from Manus:**
   ```bash
   # Use Manus Management UI to export database
   # Or use MySQL dump if you have access
   mysqldump -u user -p database > backup.sql
   ```

2. **Create new database:**
   ```bash
   mysql -u root -p
   CREATE DATABASE dimas_portfolio;
   EXIT;
   ```

3. **Import data:**
   ```bash
   mysql -u root -p dimas_portfolio < backup.sql
   ```

4. **Or run fresh migrations:**
   ```bash
   pnpm db:push  # Creates schema from scratch
   ```

---

## Domain Setup

### Connect Custom Domain

1. **Buy domain** (Namecheap, GoDaddy, Route53, etc.)

2. **Point DNS to hosting:**
   - **Railway/Render:** Add CNAME record
     ```
     CNAME yourdomain.com → your-app.railway.app
     ```
   - **VPS:** Add A record
     ```
     A yourdomain.com → your-server-ip
     ```

3. **Setup SSL certificate:**
   - **Railway/Render:** Auto-generated (free)
   - **VPS with Nginx:** Use Let's Encrypt
     ```bash
     sudo apt-get install -y certbot python3-certbot-nginx
     sudo certbot certonly --nginx -d yourdomain.com
     ```

---

## Troubleshooting

### Build fails with "vite-plugin-manus-runtime not found"

```bash
# Remove from package.json
npm uninstall vite-plugin-manus-runtime

# Update vite.config.ts to remove the plugin
```

### Database connection fails

```bash
# Check DATABASE_URL format
# Should be: mysql://user:password@host:port/database

# Test connection
mysql -u user -p -h host -D database
```

### OAuth callback URL mismatch

```bash
# Ensure callback URL is registered in OAuth provider
# Format: https://yourdomain.com/api/oauth/callback

# Check for trailing slashes and exact domain match
```

### Port 3000 already in use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or use different port
PORT=3001 pnpm start
```

---

## Performance Tips

1. **Enable gzip compression** in Express
2. **Use CDN** for static assets
3. **Optimize database queries** with indexes
4. **Enable caching** headers for static files
5. **Use production build:** `NODE_ENV=production pnpm start`

---

## Security Checklist

- [ ] Change `JWT_SECRET` to strong random value
- [ ] Use HTTPS/SSL certificate
- [ ] Restrict database access to application only
- [ ] Use environment variables for all secrets
- [ ] Enable CORS only for your domain
- [ ] Setup rate limiting on API endpoints
- [ ] Regular database backups
- [ ] Monitor error logs

---

## Support

- **GitHub Issues:** https://github.com/yaelahdimm/dimas-portfolio/issues
- **Documentation:** See `DEPLOYMENT_GUIDE.md` and `ENV_VARIABLES.md`
- **Hosting Docs:**
  - Railway: https://docs.railway.app
  - Render: https://render.com/docs
  - Heroku: https://devcenter.heroku.com

---

## Next Steps

1. Choose hosting platform
2. Remove Manus dependencies
3. Configure environment variables
4. Setup database
5. Build and deploy
6. Setup custom domain
7. Test all features
8. Monitor logs and performance

Good luck! 🚀
