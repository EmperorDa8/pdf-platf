# MCP: Vercel Deployment Agent

## Purpose
Automates and guides the deployment of the application to Vercel with correct environment configuration, continuous integration, and minimal setup.

## Trigger Context
- When preparing the app for first deployment
- When modifying environment variables or redeploying updates

## Input
- GitHub repository (connected to Vercel)
- Required environment variables from `.env.example`
- User-specified domain (optional)

## Output
- Live deployed instance of the app on Vercel
- Validated environment variable setup
- Optional: custom domain configuration

## Required Environment Variables
These must be collected from Supabase, Stripe, and admin user:
```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
ADMIN_EMAIL=
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
NEXT_PUBLIC_SITE_URL=
```

## Steps
1. Connect GitHub repository to Vercel project
2. Set build command (`npm run build`) and output directory (`.next`)
3. Input environment variables into Vercel (Production tab)
4. Trigger first deploy
5. Verify deployment succeeds (check build logs)
6. Visit the live site to confirm app is rendering
7. (Optional) Assign a custom domain and ensure `NEXT_PUBLIC_SITE_URL` reflects it

## Success Criteria
- Vercel build completes without errors
- Public site URL loads successfully
- Supabase and Stripe keys are active and integrated
- Request form can send email (SMTP validated)

## Warnings
- Do NOT push secret keys to GitHub
- Do NOT deploy without setting required environment variables
- If using preview deployments, ensure feature flags are respected

## Agent Role
- Populate Vercel env vars using secure input methods
- Validate build output and health
- Report any failed step (e.g., SMTP unreachable, missing Stripe keys)

## Output Format
- Vercel dashboard URL
- Deployment logs snapshot (success/failure)
- Domain URL

## Reusability
This MCP can be reused whenever deploying to Vercel, refreshing environment configs, or connecting new branches.

