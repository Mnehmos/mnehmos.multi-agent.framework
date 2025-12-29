# Synch MCP Tool Instructions

> Global memory bank for AI agents - persistent context synchronization across sessions and projects

## Overview

The Synch MCP provides agent memory and context management. Use these tools to persist working state, index files for fast retrieval, track bugs, coordinate concurrent agents, and enable agent-to-agent handoffs.

## Tool Categories

### Active Context Management

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `get_active_context` | Get current summary/focus for a project | Starting a session, resuming work |
| `set_active_context` | Update active context state | Saving progress, changing focus |

**Best Practices:**
- Call `get_active_context` at the start of each session to restore state
- Update context after completing significant milestones
- Use `focus` field to indicate current working area

**Example:**
```typescript
// Starting a session
const context = await get_active_context({ project_id: "my-app" });
// Returns: { summary: "Working on auth module", focus: "src/auth/login.ts" }

// Saving progress
await set_active_context({
  project_id: "my-app",
  summary: "Completed auth module, starting tests",
  focus: "tests/auth/"
});
```

### Filing Cabinet (File Indexing)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `file_to_cabinet` | Index a file with summary and metadata | After creating/modifying important files |
| `get_from_cabinet` | Retrieve indexed file info | Quick lookup without reading full file |
| `search_memory` | Search across all indexed content | Finding relevant files by concept |

**Best Practices:**
- Index files after significant changes
- Include `key_exports` for functions/classes
- Include `dependencies` for import relationships
- Use descriptive summaries for semantic search

**Example:**
```typescript
// Index a file
await file_to_cabinet({
  project_id: "my-app",
  file_path: "src/auth/login.ts",
  summary: "Login handler with JWT validation and session management",
  key_exports: ["login", "validateToken", "refreshSession"],
  dependencies: ["src/utils/jwt.ts", "src/db/users.ts"]
});

// Search for relevant files
const results = await search_memory({
  query: "authentication",
  project_id: "my-app"
});
```

### Spatial Map (PC as Rooms)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `get_spatial_map` | Get folder structure as connected rooms | Understanding project layout |
| `add_room` | Add folder to spatial map | Mapping new directories |
| `link_rooms` | Connect two folders | Documenting relationships |

**Best Practices:**
- Build spatial map when exploring new projects
- Link rooms that have logical connections (e.g., component → styles)
- Use descriptions to document folder purposes

**Example:**
```typescript
// Map project structure
await add_room({
  project_id: "my-app",
  path: "src/components",
  description: "React components - UI building blocks",
  depth: 1,
  key_items: ["Button.tsx", "Modal.tsx", "Form.tsx"]
});

await add_room({
  project_id: "my-app",
  path: "src/styles",
  description: "CSS modules and theme configuration",
  depth: 1,
  key_items: ["theme.css", "variables.css"]
});

// Link related rooms
await link_rooms({
  project_id: "my-app",
  room_a: "src/components",
  room_b: "src/styles"
});
```

### Bug Tracking

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `log_bug` | Log a bug for later fixing | Encountering errors during work |
| `get_bugs` | Get bugs by project/status | Reviewing open issues |
| `resolve_bug` | Mark bug as resolved | After fixing an issue |

**Best Practices:**
- Log bugs immediately when encountered
- Include file_path and line_number when known
- Include stack_trace for debugging context
- Use severity levels: `low`, `medium`, `high`, `critical`

**Example:**
```typescript
// Log a bug
await log_bug({
  project_id: "my-app",
  title: "Login fails with special characters in password",
  description: "Passwords containing & or = cause 400 errors",
  severity: "high",
  file_path: "src/auth/login.ts",
  line_number: 45,
  stack_trace: "Error: Invalid character in form data..."
});

// Review open bugs
const bugs = await get_bugs({
  project_id: "my-app",
  status: "open"
});

// Resolve bug
await resolve_bug({
  project_id: "my-app",
  bug_id: "bug-123",
  resolution: "URL-encoded special characters before sending"
});
```

### Lock Management (Concurrent Agents)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `acquire_lock` | Lock a resource for exclusive access | Before modifying shared resources |
| `release_lock` | Release a held lock | After completing modification |
| `get_lock_status` | Check lock state | Before attempting to acquire |

**Best Practices:**
- Always release locks after use (even on errors)
- Use `read` operation for read-only access (allows concurrent readers)
- Use `write` operation for modifications (exclusive access)
- Set reasonable timeout_ms to prevent deadlocks

**Example:**
```typescript
// Acquire write lock
const lock = await acquire_lock({
  resource_id: "src/config.json",
  agent_id: "agent-1",
  operation: "write",
  timeout_ms: 30000
});

try {
  // Modify resource
  // ...
} finally {
  // Always release
  await release_lock({
    resource_id: "src/config.json",
    agent_id: "agent-1"
  });
}
```

### Context Events (Agent Handoffs)

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `emit_context_event` | Emit handoff/checkpoint/error events | Passing work to another agent |
| `get_context_events` | Get recent context events | Understanding previous agent's work |

**Event Types:**
- `handoff` - Passing work to another agent
- `checkpoint` - Progress save point
- `error` - Issue encountered
- `complete` - Task finished

**Best Practices:**
- Emit `handoff` when delegating to another agent/mode
- Emit `checkpoint` at significant milestones
- Include clear `summary` for next agent
- Include `focus` to indicate what to work on

**Example:**
```typescript
// Emit handoff event
await emit_context_event({
  project_id: "my-app",
  agent_id: "architect-agent",
  event_type: "handoff",
  summary: "Completed auth system design, ready for implementation",
  focus: "src/auth/",
  metadata: {
    design_doc: "docs/auth-design.md",
    tasks_remaining: ["implement login", "implement logout", "add tests"]
  }
});

// Next agent reads events
const events = await get_context_events({
  project_id: "my-app",
  limit: 5
});
```

## Integration with Multi-Agent Framework

### Orchestrator Integration
- Use `get_active_context` to understand project state before delegating
- Use `emit_context_event` with `handoff` type when delegating subtasks
- Query `get_bugs` to include known issues in task assignments

### Worker Integration
- Call `get_active_context` at task start to understand context
- Use `file_to_cabinet` after creating/modifying files
- Call `log_bug` when encountering issues
- Use `acquire_lock`/`release_lock` when modifying shared resources
- Emit `checkpoint` events at milestones
- Emit `complete` event when task finishes

### Boomerang Pattern Enhancement
Include Synch MCP context in boomerang payloads:

```json
{
  "type": "task-completed",
  "task_id": "impl-auth-001",
  "from": "code",
  "to": "orchestrator",
  "status": "success",
  "files_changed": ["src/auth/login.ts"],
  "synch_context": {
    "files_indexed": ["src/auth/login.ts"],
    "bugs_logged": [],
    "context_event": "checkpoint"
  },
  "summary": "Implemented login handler",
  "notes": "Context updated in Synch MCP"
}
```

## Data Storage

Data is stored persistently at:
- **Windows:** `%APPDATA%\mnehmos-synch\`
- **macOS/Linux:** `~/.config/mnehmos-synch/`

## Constraints

- MUST use `project_id` consistently across all tools
- MUST release locks after acquiring them
- SHOULD update active context after significant changes
- SHOULD index important files for future reference
- SHOULD emit context events for traceability
