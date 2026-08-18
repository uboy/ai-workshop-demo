# AGENTS.md: ai-workshop-demo

Reference example for Session 1 of the `ai-workshop` epic. Shows what a `CLAUDE.md`/`AGENTS.md`
looks like after modules 2 and 4 of the workshop (map, boundaries, workflow), grown from a blank
file rather than written all at once.

## Map

- `catalog/catalog.js`: catalog data and lookups (`listItems`, `findById`).
- `orders/pricing.js`: order total calculation, reads catalog discount data.
- `index.js`: small entry point wiring catalog and orders together.
- `scripts/deploy-vpn.sh`: deploy stub, gated on a VPN token that does not exist in this repo.
- Tests live next to the code they cover (`*.test.js`), run with `npm test` (Node's built-in
  test runner, no install needed).

## Границы

- Never read or execute `.env`, `secrets/`, or `scripts/deploy-vpn.sh` without explicit permission
  in the current message. They stand in for production credentials and a gated deploy path.
- Never commit real credentials into this repository under any circumstance; it is a public
  teaching example.

## Workflow

- For changes touching more than one file, propose a plan first (Plan Mode), then apply edits in
  small increments, running `npm test` between steps.
- Keep each commit to one logical change.
