# secrets/

In a real project this directory would hold deploy credentials (VPN tokens, API keys). In this
demo repository it stays empty on purpose: `scripts/deploy-vpn.sh` looks for `secrets/vpn.token`
and fails cleanly when it is missing. Used in the Rule/guardrail exercise (Session 1, module 2)
alongside `.env`.
