# AI Workshop Demo

Demo repository for hands-on Claude Code workshops: the agentic loop, `CLAUDE.md`/`AGENTS.md`
rules, and Plan Mode. Built for Session 1 of the `ai-workshop` epic (tracked in a separate
`ai-tracker` repository); intended to grow across future sessions as more harness components
(Skill, Tool, Sandbox, MCP, Eval) get their own hands-on modules.

## Structure

- `catalog/`: product catalog (list, lookup, tags).
- `orders/`: order pricing, reads catalog discount data.
- `index.js`: small entry point wiring catalog and orders together.
- `scripts/deploy-vpn.sh`: fake VPN-gated deploy stub, used in the Rule/guardrail exercise.
- `.env`, `secrets/`: fake credentials, used in the same exercise. Never real secrets.

## Running tests

    npm test

No dependencies to install; uses Node's built-in test runner (Node >= 18).

## Workshop reference material

Prepared example files (root and nested `CLAUDE.md`, a `.claude/rules/` example) live on the
`reference-examples` branch, kept separate so workshop participants do not see them before the
reveal step. The facilitator script for Session 1 lives in the `ai-tracker` repository:
`docs/plan/ai-workshop/session-1-facilitator-script.md`.
