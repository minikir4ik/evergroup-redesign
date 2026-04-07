# Token Optimization

## Context Management
- Use subagents for exploration, testing, and isolated tasks — keeps verbose output out of main context
- Use offset/limit in Read when only a section of a file is needed
- Batch related operations into a single turn

## Efficient Tool Usage
- Grep to find code before reading whole files
- Glob to locate files before exploring trees
- Edit for small changes, Write only for new files or full rewrites
- Summarize tool output when reporting — don't echo raw logs

## After Each Task
Propose one concrete step to reduce time or tokens next time.
