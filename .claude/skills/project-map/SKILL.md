# /project-map

Quick overview of the project structure and current state.

## What to do

1. Show directory tree (2 levels, exclude .git, __pycache__, .venv, node_modules)
2. If todo.md exists — list sections and % completion
3. Show last 3 commits (git log --oneline -3)
4. Show stack from requirements.txt or package.json

## Output format

```
## Structure
{directory tree}

## Tasks
{section}: {done/in-progress} ({X}/{Y})

## Recent commits
{hash} {message}

## Stack
{technologies from manifests}
```
