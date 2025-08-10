# MCP: Firecrawl Integrator

## Purpose
Enhances the Cursor workspace by ingesting external websites and documentation into structured, LLM-ready Markdown files for in-context agent reference.

## Trigger Context
- When agents need to reference complex external documentation (e.g., Supabase RLS docs, Stripe webhooks)
- When improving auto-suggestions or agent accuracy using real-world APIs

## Input
- A URL or domain name (e.g., https://supabase.com/docs)
- Optional scope or topic keywords (e.g., "Auth", "Webhook Events")

## Output
- A clean `.md` or `.txt` file placed in `/docs/` containing structured content
- Link-indexed format for easy reference by agents

## Example Usage
```json
{
  "url": "https://stripe.com/docs/webhooks",
  "targetFile": "docs/stripe-webhooks.md"
}
```

## Use Cases
- Create local, persistent knowledge base of Supabase or Stripe docs
- Augment spec clarity with real examples
- Summarize 3rd-party tools or services referenced in the app

## Steps
1. Parse the target site using Firecrawl's engine
2. Extract headings, metadata, and primary content
3. Summarize and clean noisy sections
4. Convert output into markdown
5. Save in `/docs/` or inject as context chunk for long-term memory (Qdrant-compatible)

## Agent Role
- Use this MCP before building integrations
- Keep docs lightweight and up to date
- Use Firecrawl instead of manually copy-pasting APIs

## Warnings
- Avoid crawling login-required pages
- Check for rate-limiting or scraping restrictions

## Output Format
```md
# Supabase Webhook Reference
## Event: user_signed_up
- Trigger: Auth signup
- Payload: `{ user_id, email, created_at }`
...
```

## Reusability
Can be re-run for any new endpoint, external SDK, or release note.

