Here is the latest version of your SPECIFICATION.md, updated to include all core features, constraints, and enhanced MCP integrations:

⸻



# SPECIFICATION.md

## Project Title
**PDF Library App with Free/Pro Access and Admin Uploads**

---

## Objective
Build a simple, low-maintenance web app that allows users to:
- Register and log in
- Browse and download PDFs
- Access content based on subscription tier (Free or Pro)
- Request new PDFs via a form

Admins can:
- Upload and categorize PDFs
- Set Free or Pro access
- View basic analytics (e.g. downloads)
- Receive PDF requests via email

The system is designed to be deploy-once and forget. The only ongoing task is document management by the admin.

---

## Tech Stack
- **Frontend**: Next.js with shadcn UI (Tailwind CSS + Radix)
- **Auth + DB + Storage**: Supabase (PostgreSQL, Supabase Auth, Storage)
- **Payments**: Stripe (Pro plan subscriptions)
- **Deployment**: Vercel (default) or alternative low-cost host

---

## Core Features

### User Features
- Register/login (email, phone, or social via Supabase Auth)
- Access PDF directory
- Download PDFs based on subscription
- Submit freeform request for a custom document (goes to admin email)

### Admin Features
- Upload PDF
- Assign title, category, access level (Free or Pro)
- Manage pricing/discount codes (via Stripe)
- View analytics: download counts, subscription logs

---

## Access Levels
- **Free User**: Access free PDFs
- **Pro User**: Access free + Pro PDFs

---

## Database Schema (Simplified)
- `users (id, email, is_admin, stripe_customer_id)`
- `documents (id, title, category, access_level, file_path, download_count)`
- `categories (id, name)`
- `subscriptions (id, user_id, status, stripe_sub_id, current_period_end)`
- `download_logs (id, user_id, document_id, timestamp)`

---

## Maintenance Philosophy
- One-time deploy (MCP-managed)
- Admins upload content manually
- No user-generated public content
- All updates are through structured admin interfaces

---

## Deployment Targets
- **Default**: Vercel (zero-config Next.js deployment)
- **Alternative**: Cloudflare Pages, Render, or Railway (if budget-focused)

---

## Agent Guardrails
- Do not add Expert tier
- Do not add tagging system
- Do not expose document requests to other users
- Do not over-engineer admin UI (keep it minimal)

---

## MCPs Defined

### Core MCPs
- Prompt-to-MegaPrompt Optimizer
- Supabase Configuration Manager
- Stripe Integrator
- Vercel Deployment Agent
- SMTP Setup Agent
- Admin Seeder
- Auth Redirect Validator
- Document Upload Verifier
- Infra Cost Planner
- Cursor Guardrail Enforcer

### Enhanced AI-Powered MCPs
- **Firecrawl**: Transforms external sites (e.g., Stripe/Supabase docs) into structured `.md` reference files
- **Qdrant**: Adds semantic memory for prompt history and architecture decisions
- **E2B**: Executes Python/JS securely for validation, logic testing, or prototyping
- **Tavily**: AI-powered scoped web search for documentation, updates, and external references
- **Browser Use**: Automates dashboard actions (e.g., Stripe webhook setup, Supabase storage config)

All MCPs are modular and documented in `/cursor-system/MCPs/`.

---

## File Structure
```bash
/
├── SPECIFICATION.md                # This file
├── .env.example                    # Redacted env template
├── START-HERE.md                   # Project bootstrapping guide
├── /cursor-system/
│   ├── MCPs/
│   ├── prompt-blueprints/
│   └── .cursor-config.json



⸻

How to Use in Cursor
	1.	Import the repo into Cursor
	2.	Open SPECIFICATION.md and review full context
	3.	Launch agent via start-agent.md
	4.	Use any MCP as needed during build and deployment

⸻

Final Notes
	•	This spec is authoritative.
	•	Cursor agents must follow its boundaries.
	•	All prompts and tasks should reference this document explicitly.
	•	Changes must go through agent-review or human-verified update.

---

