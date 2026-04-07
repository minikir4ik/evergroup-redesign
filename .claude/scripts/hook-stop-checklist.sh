#!/bin/bash
# Checklist when Claude Code finishes work

echo ""
echo "=== Stop Checklist ==="

if [ -f "todo.md" ]; then
    IN_PROGRESS=$(grep -c "\- \[ \]" todo.md 2>/dev/null || echo "0")
    echo "[ ] todo.md updated? ($IN_PROGRESS open tasks)"
else
    echo "[!] todo.md not found"
fi

DIRTY=$(git status --porcelain 2>/dev/null | wc -l | tr -d ' ')
if [ "$DIRTY" -gt 0 ]; then
    echo "[ ] Git: $DIRTY uncommitted files — need a commit?"
else
    echo "[x] Git: clean"
fi

echo "[ ] .claude/memory/ updated (if architecture decisions were made)?"
echo ""
