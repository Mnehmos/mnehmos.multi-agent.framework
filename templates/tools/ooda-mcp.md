# Somatic Layer: OODA MCP Integration

> **Tier 2 Appendix** | Add to baseline instructions when OODA MCP is installed.
> Provides: 62 tools for complete computer automation following Observe-Orient-Decide-Act.

---

## The Somatic Nervous System

If the LLM is the brain, OODA MCP is the **body**. It turns intent into action through:

- **Direct I/O** (Reflexes): File operations, command execution
- **Perception** (Senses): Screen capture, window awareness, file search
- **Motor Control** (Hands): Keyboard, mouse, application control
- **Proprioception** (Body Awareness): System info, process monitoring

```
┌─────────────────────────────────────────────────────────────────────┐
│                          LLM (BRAIN)                                │
│                    Cognition and Decision                           │
├─────────────────────────────────────────────────────────────────────┤
│                      OODA MCP (BODY)                                │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐│
│  │   OBSERVE   │  │   ORIENT    │  │   DECIDE    │  │     ACT     ││
│  │ screenshot  │  │ search_in_  │  │   (LLM)     │  │ write_file  ││
│  │ read_file   │  │   file      │  │  reasoning  │  │ keyboard_*  ││
│  │ list_*      │  │ batch_      │  │             │  │ mouse_*     ││
│  └─────────────┘  │ search      │  │             │  │ exec_cli    ││
│                   └─────────────┘  └─────────────┘  └─────────────┘│
└─────────────────────────────────────────────────────────────────────┘
```

---

## Tool Categories

### Tier 1: Reflexes (Direct I/O)

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `exec_cli` | Execute shell commands | `command`, `cwd` |
| `read_file` | Read file contents | `path` |
| `write_file` | Write content to file | `path`, `content` |
| `str_replace` | Replace unique string | `path`, `oldText`, `newText` |
| `edit_block` | Search/replace with fuzzy fallback | `path`, `search`, `replace`, `dryRun` |
| `apply_diff` | Multiple search/replace atomically | `path`, `diffs[]`, `dryRun` |
| `list_directory` | List directory contents | `path` |
| `copy_file` | Copy file/directory | `source`, `destination` |
| `move_file` | Move/rename file | `source`, `destination` |
| `delete_file` | Delete file/directory | `path`, `recursive` |

### Tier 2: Senses (Perception)

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `search_files` | Find files by pattern | `directory`, `pattern`, `recursive` |
| `search_in_file` | Search within a file | `path`, `pattern`, `contextLines`, `isRegex`, `isFuzzy` |
| `read_file_lines` | Read specific line range | `path`, `startLine`, `endLine`, `offset` |
| `file_info` | Get file metadata | `path` |
| `screenshot` | Capture screen | `region`, `format`, `savePath` |
| `get_screen_info` | Monitor information | (none) |
| `get_active_window` | Current window info | (none) |
| `list_windows` | All open windows | (none) |

### Tier 3: Motor Control (Action)

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `keyboard_type` | Type text | `text`, `delay` |
| `keyboard_press` | Press key with modifiers | `key`, `modifiers[]` |
| `keyboard_shortcut` | Execute shortcut | `shortcut` (e.g., "ctrl+c") |
| `mouse_move` | Move cursor | `x`, `y`, `smooth`, `duration` |
| `mouse_click` | Click mouse button | `x`, `y`, `button`, `clicks` |
| `mouse_drag` | Drag operation | `startX`, `startY`, `endX`, `endY` |
| `focus_window` | Bring window to front | `title` or `pid` |
| `launch_application` | Open application | `path`, `args[]`, `waitForWindow` |

### Tier 4: Batch Operations

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `batch_read_files` | Read multiple files | `paths[]` |
| `batch_write_files` | Write multiple files | `files[{path, content}]` |
| `batch_exec_cli` | Execute multiple commands | `commands[{command, cwd}]` |
| `batch_str_replace` | Replace in multiple files | `replacements[]`, `replaceAll` |
| `batch_search_in_files` | Search across files | `searches[]`, `isFuzzy`, `fuzzyThreshold` |

---

## OODA Loop Pattern

### 1. OBSERVE 👁️
```typescript
screenshot({ format: "base64" })
batch_read_files({ paths: ["src/auth/jwt.ts", "src/config.ts"] })
list_directory({ path: "src/" })
```

### 2. ORIENT 🧭
```typescript
search_in_file({
  path: "src/auth/jwt.ts",
  pattern: "validateToken",
  contextLines: 5
})

batch_search_in_files({
  searches: [
    { path: "src/**/*.ts", pattern: "JWT" },
    { path: "src/**/*.ts", pattern: "token" }
  ],
  isFuzzy: true,
  fuzzyThreshold: 0.7
})
```

### 3. DECIDE 🎯
LLM reasons over observed data to determine action.

### 4. ACT ⚡
```typescript
edit_block({
  path: "src/auth/jwt.ts",
  search: "const secret = process.env.JWT_SECRET",
  replace: "const secret = process.env.JWT_SECRET ?? 'development-secret'",
  dryRun: false
})
```

### 5. LOOP 🔄
```typescript
exec_cli({ command: "npm test -- auth" })
```

---

## Key Patterns

### Emergent RAG (File System as Knowledge Base)

```
DISCOVER: list_directory, search_files
LOCATE:   search_in_file, batch_search_in_files  
EXTRACT:  read_file_lines (surgical)
BATCH:    Parallelize all of the above
```

The LLM IS the similarity function—reasoning replaces embeddings.

### Preview Before Apply

```typescript
edit_block({ path, search, replace, dryRun: true })  // Preview
edit_block({ path, search, replace, dryRun: false }) // Apply
```

### Fuzzy Matching for LLM Tolerance

```typescript
search_in_file({
  path: "src/auth/session.ts",
  pattern: "autentication",  // Typo
  isFuzzy: true,
  fuzzyThreshold: 0.7
})
```

---

## Installation

```json
{
  "mcpServers": {
    "ooda": {
      "command": "node",
      "args": ["path/to/mnehmos.ooda.mcp/dist/index.js"]
    }
  }
}
```

**GitHub**: [github.com/Mnehmos/mnehmos.ooda.mcp](https://github.com/Mnehmos/mnehmos.ooda.mcp)
