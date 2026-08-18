# AI Workshop Demo

A small demo service (product catalog + order pricing) for practicing agentic coding workflows
with Claude Code.

## Structure

- `catalog/`: product catalog (list, lookup, tags).
- `orders/`: order pricing, reads catalog discount data.
- `index.js`: small entry point wiring catalog and orders together.
- `scripts/deploy-vpn.sh`: a deploy stub gated on a VPN token file that isn't present.
- `.env`, `secrets/`: placeholder values, not real credentials.

## Running tests

    npm test

No dependencies to install; uses Node's built-in test runner (Node >= 18).
