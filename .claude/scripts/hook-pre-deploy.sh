#!/bin/bash
# Blocking hook: prevents deploy without commit

DIRTY=$(git status --porcelain 2>/dev/null | head -1)
if [ -n "$DIRTY" ]; then
    echo ""
    echo "=== DEPLOY BLOCKED ==="
    echo "Uncommitted changes found. Run git commit first."
    echo ""
    git status --short
    exit 1
fi

LOCAL=$(git rev-parse HEAD 2>/dev/null)
REMOTE=$(git rev-parse origin/main 2>/dev/null)
if [ "$LOCAL" != "$REMOTE" ] && [ -n "$REMOTE" ]; then
    echo ""
    echo "=== DEPLOY WARNING ==="
    echo "Local HEAD != origin/main. You may need git push."
    echo ""
fi
