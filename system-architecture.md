# SYSTEM-ARCHITECTURE.md

## 📐 System Architecture Overview
This architecture defines the structure and component relationships for the PDF Library App, built for low-maintenance and Cursor-first deployment.
It guides agents on how to keep the project clean, modular, secure, and scalable — without scope creep.

---

## 🔷 High-Level Components
```
Frontend (Next.js + shadcn UI)
├── Pages: /login, /dashboard, /documents, /admin
├── Components: AuthForm, PDFCard, UploadForm, RequestForm
└── API Routes: /api/webhook, /api/send-request

Backend Services
├── Supabase (Auth, DB, Storage)
│   ├── Tables: users, documents, subscriptions, categories, download_logs
│   ├── RLS Policies: per-table
│   └── Storage: bucket: documents (private)
├── Stripe (checkout, subscriptions, customer portal)
└── SMTP Email (document request notifications)

DevOps & Infra
├── Vercel (build, deploy, environment config)
└── Cursor MCPs (agent orchestration, scope enforcement)
```

---

## 🔐 Access Control & Flow
### Auth
- Supabase Auth (email + optional OAuth)
- `users.is_admin` flag controls admin routes

### Access Rules
- **Free user**: can view & download Free PDFs
- **Pro user**: can also access Pro PDFs
- **Admin**: can upload docs, view analytics, and receive PDF requests

### Routing Flow
```
/login → auth flow
/dashboard → list documents (Free or Pro filtered)
/admin → upload + view download counts
/documents/:id → view details + download (if authorized)
```

---

## 🧰 Agent Behavior Guidelines
Agents must:
- Read `SPECIFICATION.md` and follow `mcp-guardrails.json`
- Use shadcn components only
- Respect Supabase RLS for all reads/writes
- Never expose admin-only features to non-admins
- Trigger MCPs before building logic-heavy features

---

## 🧠 MCP-Oriented Integration
### Core MCPs
- Define schema → `mcp-supabase-setup.md`
- Deploy with env vars → `mcp-deploy-vercel.md`
- Launch logic safely → `mcp-prompt-refiner.md`

### Enhanced MCPs
- Crawl docs (Firecrawl), store context (Qdrant), run test code (E2B)
- Run Tavily for Stripe/Supabase updates
- Navigate live dashboards with Browser MCP

---

## 🧱 Database Schema Overview
```
users (uuid PK, email, is_admin, stripe_customer_id)
documents (uuid PK, title, access_level, category, file_path, download_count)
subscriptions (uuid PK, user_id FK, status, stripe_subscription_id, current_period_end)
download_logs (uuid PK, user_id FK, document_id FK, downloaded_at)
categories (uuid PK, name)
```

---

## 📦 Deployment Target
- Vercel with GitHub-connected repo
- Use `.env.example` for variable template
- Trigger `mcp-deploy-vercel.md` to complete deploy

---

## ✅ MVP Success Checklist
- ✅ Auth works via Supabase
- ✅ Pro users unlock gated content via Stripe
- ✅ Admin dashboard enables secure uploads
- ✅ Email request system triggers successfully
- ✅ Cursor agents remain within scope and structure

---

## 🧭 Final Guidance
All agents and collaborators must:
- Reference this architecture as the definitive model
- Use Cursor’s context pane to preload this doc
- Defer to SPEC + MCPs before inventing new structure or logic

Stick to the system — build once, scale forever.

