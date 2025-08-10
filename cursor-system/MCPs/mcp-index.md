# MCP Index

This index lists all available Model-Context Protocols (MCPs) in this system. Use it to navigate, reference, or delegate tasks to specific agent modules.

---

## ✅ Core MCPs

| MCP | Purpose |
|-----|---------|
| `mcp-prompt-refiner.md` | Converts user intent into structured mega-prompts for agent execution |
| `mcp-deploy-vercel.md` | Handles full deployment to Vercel, including env vars and build config |
| `mcp-supabase-setup.md` | Creates Supabase schema, RLS policies, triggers, and storage setup |
| `mcp-guardrails.json` | Prevents feature creep and protects scope boundaries for agents |

---

## 🧠 AI-Enhanced MCPs

| MCP | Purpose |
|-----|---------|
| `mcp-firecrawl.md` | Crawls external websites (like Supabase or Stripe docs) into usable `.md` files |
| `mcp-qdrant.md` | Adds semantic memory layer via vector embeddings (e.g., recall prior prompts) |
| `mcp-e2b.md` | Executes Python/JS securely to validate logic or test isolated behavior |
| `mcp-tavily.md` | AI-powered web search with summarization and filtered retrieval |
| `mcp-browser-use.md` | Emulates human web navigation to automate admin dashboards and scrape UIs |

---

## ℹ️ Usage
- All MCPs are stored in `/cursor-system/MCPs/`
- Referenced in `.cursor-config.json`
- Each MCP includes:
  - Trigger context
  - Input/output formats
  - Agent role
  - Reusability tips

---

## 🔁 Maintenance
- Keep this file updated as new MCPs are created
- Tag future MCPs with `Core`, `AI-Enhanced`, `DevOps`, or `UX` roles
- Use this as an index in the Cursor Agent Quick Menu or sidebar panel

---

## Next Steps
To trigger any MCP, simply reference its filename in the agent input or plug it into a workflow prompt (e.g., `start-agent.md`).

