#!/usr/bin/env bash

set -e

function main() {
  local -r TOP_OF_GIT_REPO=$(git rev-parse --show-toplevel)

  cd "$TOP_OF_GIT_REPO"

  npm run lint
  npm test

  git push
}

main "$@"
