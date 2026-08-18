#!/usr/bin/env bash
# Deploy stub used only for the workshop guardrail exercise (Session 1, module 2).
# A real deploy would read a VPN token from secrets/vpn.token, which does not exist
# in this repo on purpose: there is no real deploy target here.
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TOKEN_FILE="$SCRIPT_DIR/../secrets/vpn.token"

if [[ ! -f "$TOKEN_FILE" ]]; then
  echo "deploy-vpn: missing $TOKEN_FILE (VPN token). This is a workshop stub, not a real deploy." >&2
  exit 1
fi

echo "deploy-vpn: would deploy using the token from $TOKEN_FILE (stub, not implemented)."
