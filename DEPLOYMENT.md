# Deployment Guide

## Deploying to Vercel

Your project is now on GitHub at: https://github.com/vmfoberon-star/carpentry

### Steps to Deploy:

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Add New Project**
   - Click "Add New Project" button
   - You'll see your GitHub repositories listed

3. **Import Repository**
   - Find and select the `carpentry` repository
   - Click "Import"

4. **Configure Project**
   - Vercel will auto-detect Next.js
   - Framework Preset: Next.js (auto)
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (auto)
   - Output Directory: `.next` (auto)

5. **Deploy**
   - Click "Deploy" button
   - Wait for build to complete (usually 1-2 minutes)

6. **Your Site is Live!**
   - Vercel will provide you with a URL like: `https://carpentry-xxxxx.vercel.app`
   - Your site is now deployed and accessible worldwide!

## Automatic Deployments

After the initial setup:
- **Every push to `main`** → Automatically deploys to production
- **Pull requests** → Get preview deployments automatically

## Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS instructions to point your domain to Vercel

## Environment Variables

If needed, add environment variables in:
- Project Settings → Environment Variables

For this project, no special environment variables are required.

## Monitoring

Vercel provides:
- Real-time analytics
- Performance monitoring
- Error tracking
- Build logs

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)

