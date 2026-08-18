---
paths:
  - "**/*.test.js"
---

# Testing rules

- Use Node's built-in `node:test` and `node:assert/strict`, no external test framework.
- One behavior per test; name the test after the behavior, not the function.
- Every new test file needs at least one passing case and one case that would fail if the
  logic regressed, not just a smoke test.
