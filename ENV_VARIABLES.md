# Environment Variables Reference

This document lists all environment variables required and optional for the dimas-portfolio project.

## Required Variables

### Database Configuration

**`DATABASE_URL`** (Required)
- **Type:** String
- **Format:** `mysql://username:password@host:port/database`
- **Example:** `mysql://root:password@localhost:3306/dimas_portfolio`
- **Description:** MySQL/TiDB connection string for the application database

### Authentication & Security

**`JWT_SECRET`** (Required)
- **Type:** String
- **Example:** `your-super-secret-jwt-key-change-this-in-production`
- **Description:** Secret key for signing session cookies. Must be a strong random string.
- **Generate:** `openssl rand -base64 32`

**`NODE_ENV`** (Required)
- **Type:** String (development | production)
- **Default:** `development`
- **Example:** `production`
- **Description:** Application environment mode

### OAuth Configuration

**`OAUTH_SERVER_URL`** (Required if using OAuth)
- **Type:** String
- **Example:** `https://api.manus.im` or `https://github.com`
- **Description:** OAuth provider base URL

**`VITE_APP_ID`** (Required if using OAuth)
- **Type:** String
- **Example:** `your-oauth-app-id`
- **Description:** OAuth application ID from provider

**`VITE_OAUTH_PORTAL_URL`** (Required if using OAuth)
- **Type:** String
- **Example:** `https://auth.manus.im/login`
- **Description:** OAuth login portal URL for redirects

**`OWNER_OPEN_ID`** (Required if using OAuth)
- **Type:** String
- **Example:** `user-id-from-oauth-provider`
- **Description:** Owner's unique ID from OAuth provider

**`OWNER_NAME`** (Required)
- **Type:** String
- **Example:** `Dimas Stya Nugraha`
- **Description:** Owner's display name

### Application Configuration

**`VITE_APP_TITLE`** (Required)
- **Type:** String
- **Example:** `Dimas Stya Nugraha — Digital Creative`
- **Description:** Website title displayed in browser tab and header

---

## Optional Variables

### AWS S3 Configuration (for file storage)

**`AWS_S3_BUCKET`**
- **Type:** String
- **Example:** `my-portfolio-bucket`
- **Description:** S3 bucket name for storing files

**`AWS_REGION`**
- **Type:** String
- **Default:** `us-east-1`
- **Example:** `us-east-1`, `eu-west-1`, `ap-southeast-1`
- **Description:** AWS region where S3 bucket is located

**`AWS_ACCESS_KEY_ID`**
- **Type:** String
- **Example:** `AKIA...`
- **Description:** AWS IAM access key ID

**`AWS_SECRET_ACCESS_KEY`**
- **Type:** String
- **Example:** `wJalr...`
- **Description:** AWS IAM secret access key

**`AWS_S3_ENDPOINT`**
- **Type:** String
- **Example:** `https://s3.amazonaws.com` or `https://minio.example.com`
- **Description:** Custom S3 endpoint (for S3-compatible services like MinIO)

### Manus Built-in APIs (optional, for LLM/AI features)

**`BUILT_IN_FORGE_API_URL`**
- **Type:** String
- **Default:** `https://api.manus.im/forge`
- **Description:** Manus API endpoint for LLM, image generation, voice transcription, etc.

**`BUILT_IN_FORGE_API_KEY`**
- **Type:** String
- **Description:** Server-side API key for Manus services (backend only)

**`VITE_FRONTEND_FORGE_API_URL`**
- **Type:** String
- **Default:** `https://api.manus.im/forge`
- **Description:** Frontend-accessible Manus API endpoint

**`VITE_FRONTEND_FORGE_API_KEY`**
- **Type:** String
- **Description:** Client-side API key for Manus services (frontend)

### Application Branding

**`VITE_APP_LOGO`**
- **Type:** String (URL)
- **Example:** `https://cdn.example.com/logo.png`
- **Description:** Logo URL displayed in navigation and header

### Analytics

**`VITE_ANALYTICS_ENDPOINT`**
- **Type:** String (URL)
- **Example:** `https://analytics.example.com`
- **Description:** Analytics service endpoint (e.g., Plausible, Umami)

**`VITE_ANALYTICS_WEBSITE_ID`**
- **Type:** String
- **Example:** `your-analytics-site-id`
- **Description:** Website ID for analytics tracking

### Development/Debug

**`DEBUG`**
- **Type:** String (true | false)
- **Default:** `false`
- **Description:** Enable debug logging

**`VITE_API_BASE_URL`**
- **Type:** String (URL)
- **Default:** `http://localhost:3000/api`
- **Example:** `https://api.yourdomain.com`
- **Description:** API base URL for frontend requests

---

## Environment Variable Categories

### By Deployment Target

#### For Manus Platform
All variables are injected automatically. You only need to set custom values in the Manus dashboard.

#### For External Hosting (Railway, Render, Heroku)
- `DATABASE_URL` (required)
- `JWT_SECRET` (required)
- `NODE_ENV` (required)
- `VITE_APP_TITLE` (required)
- `OAUTH_SERVER_URL`, `VITE_APP_ID`, `VITE_OAUTH_PORTAL_URL`, `OWNER_OPEN_ID` (if using OAuth)
- `AWS_S3_BUCKET`, `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY` (if using S3)

#### For VPS/Docker
Same as external hosting, plus:
- `VITE_API_BASE_URL` (if frontend and backend on different domains)

---

## Security Best Practices

1. **Never commit `.env` to version control**
   - Use `.env.example` as template
   - Add `.env` to `.gitignore`

2. **Use strong secrets**
   - `JWT_SECRET`: Generate with `openssl rand -base64 32`
   - `AWS_SECRET_ACCESS_KEY`: Use AWS IAM best practices

3. **Rotate secrets regularly**
   - Change `JWT_SECRET` periodically
   - Rotate AWS access keys

4. **Restrict AWS IAM permissions**
   - Create IAM user with S3-only access
   - Use bucket policies to limit access

5. **Use environment-specific values**
   - Development: Local database, test OAuth app
   - Production: Production database, production OAuth app

---

## Troubleshooting

### "DATABASE_URL is invalid"
- Check format: `mysql://user:pass@host:port/database`
- Verify MySQL is running
- Test connection: `mysql -u user -p -h host -D database`

### "OAuth callback URL mismatch"
- Ensure callback URL is registered in OAuth provider dashboard
- Format: `https://yourdomain.com/api/oauth/callback`
- Check for trailing slashes

### "S3 credentials invalid"
- Verify AWS access key and secret are correct
- Check IAM user has S3 permissions
- Test with AWS CLI: `aws s3 ls --profile default`

### "VITE_APP_ID not found"
- Check environment variable is set
- Verify spelling (case-sensitive)
- For development, use placeholder value

---

## References

- [MySQL Connection String](https://dev.mysql.com/doc/)
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [JWT Best Practices](https://tools.ietf.org/html/rfc8725)
- [OAuth 2.0](https://oauth.net/2/)
