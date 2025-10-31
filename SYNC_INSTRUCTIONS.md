# Instructions to Sync Vercel with GitHub Repository

Your site is currently deployed at: https://v0-carpentry-workshop-website.vercel.app/

But it's showing OLD contact information. To sync it with your GitHub repository:

## Method 1: Update Project Settings in Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Login to your account

2. **Find Your Project**
   - Look for project: `v0-carpentry-workshop-website` or `carpentry-workshop-website`

3. **Update Git Repository**
   - Click on the project
   - Go to **Settings** tab
   - Click on **Git** in the left sidebar
   - Click **Change** or **Update** button next to Git Repository
   - Select or add: `vmfoberon-star/carpentry`
   - Save changes

4. **Trigger Redeploy**
   - After updating the repository link, go to **Deployments** tab
   - Click **Redeploy** or **Deploy** to trigger a new build
   - OR just push any commit to GitHub and it will auto-deploy

## Method 2: Create New Project

If you can't find the old project:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard

2. **Add New Project**
   - Click **"Add New"** → **"Project"**

3. **Import Repository**
   - Search for: `carpentry` or `vmfoberon-star/carpentry`
   - Select the repository

4. **Deploy**
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./`
   - Click **Deploy**

5. **Update Domain** (Optional)
   - After deployment, go to **Settings** → **Domains**
   - Update or keep the existing domain
   - Your site will be available at the new URL

## Verify Changes

After deploying, visit: https://v0-carpentry-workshop-website.vercel.app/

You should now see:
- **050-6905039 — דניאל סרביאנסקי**
- **054-5758003 — אייל ונטורה**

Instead of just:
- **050-690-5039**

## Automatic Deployments

Once synced, every push to the `main` branch will automatically trigger a new deployment.

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Troubleshooting Git Integration](https://vercel.com/docs/concepts/git/github)

