# NON-FUNCTIONAL-REQUIREMENTS.md

## 1. Performance
- App must load < 1s on cold start (Vercel SSR/SSG)
- Stripe payment & webhook must respond < 300ms

## 2. Scalability
- Should support up to 10,000 users on free/pro tiers
- Storage autoscaled via Supabase bucket

## 3. Availability
- 99.9% uptime goal (inherited from Vercel + Supabase)

## 4. Security
- Supabase RLS must be enabled on all tables
- No admin content accessible to non-admins
- Stripe keys must not be exposed in client

## 5. Maintainability
- Deploy-once philosophy: no dev team required post-launch
- Admin is only person responsible for content updates

## 6. Cost Constraints
- Must run on Supabase + Vercel free tiers for up to 500 users
- Stripe handles all billing and renewals

## 7. Tooling
- All deployments managed via Cursor agents + MCPs
- Semantic memory via Qdrant (optional but preferred)
- System should run fully from spec and guardrails

## 8. Legal
- Store only emails and file download logs (no PII beyond auth)
- Email requests not shared publicly