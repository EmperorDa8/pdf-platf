# MCP: Qdrant Semantic Memory Layer

## Purpose
Adds long-term memory and semantic recall to your Cursor workspace using Qdrant.
Stores embedded context chunks such as:
- Prior prompts
- Supabase/Stripe config references
- Design decisions

## Trigger Context
- When context window limits are near
- When storing reusable ideas, prompts, or refactors
- After summarizing Firecrawl output

## Input
- Natural language text or token chunk
- Optional tags or vector namespace

## Output
- Embedding stored in Qdrant vector database
- Allows retrieval by similarity search for agents

## Use Cases
- Remembering how Supabase roles were configured
- Storing error message patterns and their resolutions
- Auto-injecting context into new prompts or MCPs

## Example Usage
```json
{
  "vector": "How do we check if a user is an admin in Supabase?",
  "namespace": "auth-policies"
}
```

## Steps
1. Generate vector embedding for input text (OpenAI or Cohere backend)
2. Store it in Qdrant instance with namespace
3. On future prompt, scan for similar embeddings
4. Append result to agent prompt input (context hydration)

## Agent Role
- Use after any spec update, decision, or architectural note
- Retrieve similar prompts or design plans when extending features
- Annotate embeddings with relevant tags or labels

## Warnings
- Avoid overly generic entries ("Fix the UI")
- Respect token budgets when retrieving matches

## Output Format
```json
{
  "matched_vector": "users table RLS for self-edit",
  "source": "SPECIFICATION.md",
  "similarity_score": 0.94
}
```

## Reusability
MCP can be reused across all future projects as a shared memory engine.

