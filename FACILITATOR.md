# Facilitator notes (not shown to participants)

This file lives only on `reference-examples`, never on `main`, on purpose: participants clone
`main`, and anything here would leak the exercise mechanics if it were visible during module 2a
orientation (confirmed by rehearsal, 2026-08-18: an early README draft on `main` mentioned this
branch and the reveal step, and a fresh agent asked to orient itself copied that straight into
its own `CLAUDE.md`, spoiling both the module-2d reveal and the module-3 bug discovery).

- Built for Session 1 of the `ai-workshop` epic, tracked in a separate `ai-tracker` repository;
  intended to grow across future sessions as more harness components (Skill, Tool, Sandbox, MCP,
  Eval) get their own hands-on modules.
- Facilitator script: `docs/plan/ai-workshop/session-1-facilitator-script.md` in `ai-tracker`.
- `scripts/deploy-vpn.sh`, `.env`, `secrets/`: guardrail bait for the module-2 Rule exercise.
- Prepared example files on this branch (`CLAUDE.md`, `AGENTS.md`, `orders/CLAUDE.md`,
  `.claude/rules/testing.md`) are for the module-2d reveal: show and discuss, don't merge into
  `main`.
