# Notely-cli

> A minimal, interactive note-taking tool for the terminal.

## Install

```bash
npm install --global notely-cli
```

> **Requirements:** Node.js ≥ 16

## Usage

```
notely-cli [flag] [id]
```

| Flag            | Shorthand | Description          |
| --------------- | --------- | -------------------- |
| `--create`      | `-c`      | Create a new note    |
| `--read`        | `-r`      | List all notes       |
| `--read <id>`   | `-r <id>` | Read a specific note |
| `--update`      | `-u`      | Update a note        |
| `--delete <id>` | `-d <id>` | Delete a note by ID  |
| `--delete all`  | `-d all`  | Delete all notes     |

## Examples

**Create a note**

```bash
notely-cli --create
notely-cli -c
```

**List all notes**

```bash
notely-cli --read
notely-cli -r
```

**Read a specific note**

```bash
notely-cli --read fc4c754d4
notely-cli -r fc4c754d4
```

**Update a note**

```bash
notely-cli --update
notely-cli -u
```

**Delete a note**

```bash
notely-cli --delete fc4c754d4
notely-cli -d fc4c754d4
```

**Delete all notes**

```bash
notely-cli --delete all
notely-cli -d all
```

## Notes

- Notes are stored locally in `db.json` in the working directory.
- Title limit: **50 characters**
- Content limit: **300 characters**
