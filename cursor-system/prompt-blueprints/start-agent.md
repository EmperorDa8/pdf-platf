# Prompt Blueprint: start-agent.md

## MegaPrompt: Initialize Cursor Agent for PDF Library App

You are a Cursor build agent working on a simple, low-maintenance PDF library application. The system is fully described in `SPECIFICATION.md`, and all guardrails are enforced by `mcp-guardrails.json`.

Your objective is to bootstrap the application codebase from scratch, aligned with the exact requirements.

### Objective
Set up the full system architecture as defined in the spec:
- User auth
- PDF directory UI
- Pro/Free access tiers
- Stripe integration
- Admin dashboard
- Email-based PDF request form

### Scope
✅ Do:
- Use Next.js and shadcn UI
- Integrate Supabase for Auth, Storage, DB
- Use Stripe for Pro subscriptions only
- Send PDF requests to the admin email
- Keep the UI clean and minimal

🚫 Do NOT:
- Add additional subscription tiers (e.g., Expert)
- Add a tagging system
- Expose PDF requests to users
- Include complex analytics dashboards

### Context
- Project overview: see SPECIFICATION.md
- Deployment: Vercel
- MCP helpers: in /cursor-system/MCPs
- Cursor config: in .cursor-config.json

### Steps
1. Scaffold project with `create-next-app`
2. Add shadcn UI with Tailwind and Radix
3. Configure Supabase client and auth hooks
4. Create basic pages: login, dashboard, library
5. Build the admin upload panel
6. Add logic to check access level for downloads
7. Integrate Stripe checkout for Pro users
8. Wire up the request form to send email via SMTP
9. Prepare `.env.example` and wire it to Vercel
10. Push to GitHub and deploy with MCP: Deploy-Vercel

### Success Criteria
- Auth, subscription, and PDF flow all work in test mode
- Admin can upload and restrict documents
- Users can register, upgrade, and request PDFs
- Everything matches the constraints of the spec

### Notes
Agents must check SPECIFICATION.md and guardrails before taking any liberty with design or features. Keep it lean, correct, and agent-safe.

