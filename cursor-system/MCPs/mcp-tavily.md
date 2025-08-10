# MCP: Tavily Smart Web Search

## Purpose
Performs intelligent, filtered web searches to retrieve high-signal, recent information and inject it into the Cursor context.

## Trigger Context
- When seeking up-to-date API changes or security patches
- When researching relevant industry examples
- When needing contextual knowledge to resolve build edge cases

## Input
- Search query string
- Optional: domain filters, recency, depth

## Output
- AI-summarized results from trusted sources
- Source URLs for traceability
- Optional: chunked `.md` or `.txt` file added to `/docs`

## Example Usage
```json
{
  "query": "Supabase RLS admin bypass best practices",
  "filters": ["supabase.com", "github.com"],
  "recency": "last 6 months"
}
```

## Use Cases
- Identify recent Stripe webhook updates
- Research community examples for Supabase RLS
- Find open source examples of admin dashboards

## Steps
1. Query Tavily for the target topic
2. Retrieve curated, filtered results
3. AI-parsed summaries are created
4. Optionally cache results to Qdrant
5. Deliver `.md` file or stream into agent window

## Agent Role
- Use Tavily for targeted research tasks
- Run before proposing 3rd-party integrations
- Inject summaries as rich context blocks

## Warnings
- Avoid using for broad, generic searches (e.g., "how to build a SaaS")
- Avoid returning too many results (use filters)

## Output Format
```json
{
  "summary": "Stripe recently changed the default retry policy for invoices...",
  "sources": ["https://stripe.com/docs/invoicing/automatic"]
}
```

## Reusability
Ideal for maintaining awareness of fast-moving tools (Next.js, Supabase, Stripe, etc.) or generating current references for documentation.

