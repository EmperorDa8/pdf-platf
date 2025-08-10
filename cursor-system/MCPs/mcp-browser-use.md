# MCP: Browser Use (Autonomous Web Navigator)

## Purpose
Allows agents to interact with live websites as if they were human users: clicking, reading, submitting forms, and scraping UIs — without needing APIs.

## Trigger Context
- When dashboards (e.g., Vercel, Stripe, Supabase) do not expose everything via API
- When verifying config state visually or adjusting UI settings

## Input
- URL of target interface (must be accessible without login, or include token/session)
- DOM interaction plan (e.g., click, wait, scrape)

## Output
- Action confirmation
- Extracted values, config states, or file content

## Example Usage
```json
{
  "url": "https://vercel.com/dashboard",
  "actions": [
    {"type": "click", "selector": "#project-settings"},
    {"type": "scrape", "selector": ".env-vars"}
  ]
}
```

## Use Cases
- Scrape current environment variables
- Verify webhook endpoint setup visually
- Extract usage stats or billing metrics
- Navigate multi-step admin flows without APIs

## Steps
1. Load webpage in a headless browser
2. Follow scripted interactions (click, wait, scrape)
3. Return results as JSON or inject context

## Agent Role
- Use when API access is limited or unavailable
- Automate multi-step form or toggle sequences
- Gather real values instead of placeholder assumptions

## Warnings
- Ensure session tokens are valid
- Don’t perform destructive actions (e.g., delete, reset)
- Rate-limit interactions to avoid detection

## Output Format
```json
{
  "clicked": true,
  "scraped": {
    "env_vars": ["SUPABASE_KEY", "STRIPE_SECRET"]
  }
}
```

## Reusability
Reusable for Vercel, Stripe, Supabase, or any future admin-facing service UI that lacks API coverage.

