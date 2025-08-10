# MCP: E2B Sandboxed Execution

## Purpose
Allows agents to securely run Python and JavaScript code directly within your build workflow — no context-switching required.

## Trigger Context
- When validating logic (e.g., date handling, access condition, JWT parsing)
- When running sample Supabase SQL or testing Stripe payloads
- When generating `.env` or token-checking functions

## Input
- A code snippet (Python or JavaScript)
- Optional: input data

## Output
- Console logs
- Return value
- Error or traceback (if any)

## Example Usage
```json
{
  "language": "python",
  "code": "print(2 * 21)"
}
```

## Use Cases
- Validate JWT decoding logic
- Test a Supabase RLS policy as SQL
- Format timestamps or string sanitizers
- Preview dynamic `.env` merging

## Steps
1. Send code to secure E2B container
2. Execute inside virtual environment
3. Stream back result, error, or print log

## Agent Role
- Use to test and validate before writing logic to repo
- Use for isolated logic that should not hit production APIs
- Use to mock behavior from Stripe, Supabase, etc.

## Warnings
- No filesystem or network access
- Code must be self-contained
- No side effects — output only

## Output Format
```json
{
  "stdout": "42",
  "stderr": "",
  "result": null
}
```

## Reusability
Reusable across all Cursor projects, especially for backend logic, utilities, or MCP previews.

