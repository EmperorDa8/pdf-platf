# START-HERE.md

## Welcome to the PDF Library App Workspace
This is a Cursor-optimized build environment for a low-maintenance, subscription-based PDF library application.

Everything you need to build and maintain this app is already scaffolded:

---

## 1. Project Summary
- Built with **Next.js** + **shadcn UI**
- Auth and DB via **Supabase**
- Payments via **Stripe** (Free and Pro plans)
- Admin can upload PDFs and receive requests via email
- Deployed via **Vercel**

See [`SPECIFICATION.md`](./SPECIFICATION.md) for full technical scope.

---

## 2. Directory Structure
```
/ (repo root)
├── SPECIFICATION.md                  # Master build spec
├── .env.example                      # Environment variable template
├── START-HERE.md                     # You're here
├── /cursor-system/
│   ├── MCPs/                         # Modular build & service helpers
│   ├── prompt-blueprints/           # Ready-to-use prompts
│   └── .cursor-config.json          # Preloads context for Cursor agents
```

---

## 3. Getting Started in Cursor
1. **Open this repo in Cursor**
2. **Read `SPECIFICATION.md` to understand goals**
3. Open [`prompt-blueprints/start-agent.md`](./cursor-system/prompt-blueprints/start-agent.md)
4. Paste the prompt into the Cursor agent input to begin the build

---

## 4. Environment Setup
Before deployment, make sure the following environment variables are added to Vercel:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `STRIPE_SECRET_KEY`
- `STRIPE_WEBHOOK_SECRET`
- `ADMIN_EMAIL`
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- `NEXT_PUBLIC_SITE_URL`

Use `.env.example` as a reference.

---

## 5. MCP Helpers
Use the following agents as needed:

### Core MCPs
- 🧠 `mcp-prompt-refiner.md`: Convert ideas into mega-prompts
- 🚀 `mcp-deploy-vercel.md`: Guides Vercel deploys
- 🧱 `mcp-supabase-setup.md`: Builds Supabase schema and RLS
- 🛡️ `mcp-guardrails.json`: Prevents agents from going off-spec

### AI-Enhanced MCPs
- 🔎 `Firecrawl`: Auto-ingest structured content from docs and websites
- 🧠 `Qdrant`: Semantic memory for prompt history and task context
- 🧪 `E2B`: Sandbox Python/JS executor for testing and logic prototyping
- 🌐 `Tavily`: Live web search + news summarization
- 🖱️ `Browser Use`: Automates dashboard config and UI tasks

You can create more MCPs as your system grows.

---

## 6. Guardrails Summary
- ❌ No Expert tier
- ❌ No tagging system
- ❌ No exposed requests
- ✅ Minimal UI with shadcn components only

Agents will automatically follow these via `mcp-guardrails.json`.

---

## You're Ready
This system is production-ready, agent-friendly, and designed to be deployed once and maintained by the admin only.

Open `start-agent.md` and launch your build!

