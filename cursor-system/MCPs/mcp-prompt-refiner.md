# MCP: Prompt-to-MegaPrompt Optimizer (Prompt Refiner)

## Purpose
Transforms high-level user intent or casual prompts into clear, structured, and actionable mega-prompts for Cursor agents.

## Trigger Context
- When the user writes a natural-language prompt that describes a feature, task, or idea.
- Before assigning complex tasks to Cursor agents.

## Input
- Freeform natural language from the user.
- Reference to current `SPECIFICATION.md`.
- Optional: User-defined constraints (e.g., budget, UI style, tech preference).

## Output
- A single, cleanly formatted mega-prompt in markdown.
- Structured into sections:
  - **Objective**: what the agent is building or changing
  - **Scope**: what should and should not be done
  - **System Context**: a reference to the current application architecture from `SPECIFICATION.md`
  - **Steps**: numbered or outlined tasks
  - **Expectations**: what success looks like
  - **Warnings**: edge cases or anti-patterns to avoid

## Example Prompt
> "I want to let users bookmark documents for later without affecting performance."

## Example MegaPrompt Output
```markdown
## Objective
Add a document bookmarking feature for users without adding server-side latency.

## Scope
- Only authenticated users can bookmark
- No database schema changes
- Bookmarks should persist via localStorage

## System Context
- Next.js with Supabase Auth
- Documents are stored in Supabase Storage
- Existing user session context is already managed via hooks

## Steps
1. Add bookmark toggle button to each document tile
2. Store bookmarked IDs in localStorage
3. On page load, read localStorage and annotate tiles
4. Use Tailwind classes for styling (shadcn UI components allowed)

## Expectations
- Bookmarked state toggles smoothly
- Users see bookmarks retained on refresh

## Warnings
- Do NOT store bookmarks in the backend (out of scope)
- Avoid use of external libraries for persistence
```

## Implementation Notes
This MCP runs once per freeform user instruction. Its goal is to ensure every prompt sent to an agent is crystal-clear and grounded in context.

## Output Format
- Always Markdown
- Cursor-ready
- Standalone (no follow-up needed unless clarified by the user)

## Agent Role
- The Cursor agent should always consult this MCP output before executing loosely-defined requests.
- Agents should re-run this MCP if the user's intent is ambiguous.

