# Autonomic Layer: Synch MCP Integration

> **Tier 3 Appendix** | Add to somatic instructions when Synch MCP is installed.
> Provides: Cross-session memory, agent coordination, bug tracking, spatial mapping.

---

## The Autonomic Nervous System

The autonomic layer handles **background processes** that maintain state without conscious attention—like how your body regulates digestion while you think about other things.

For agents, Synch MCP provides:
- **Memory Persistence**: Don't lose context between sessions
- **Agent Coordination**: Multi-agent handoffs without race conditions
- **Bug Tracking**: Issue logging and resolution
- **Spatial Mapping**: Project navigation as rooms

---

## Core Concept: The Agent is Stateless

LLMs have no persistent memory between sessions. The **Stateful MCP Pattern** externalizes state to the database, making the agent's memory appear persistent.

---

## Tool Categories

### Context Management

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `get_active_context` | Restore session state on startup | `project_id` |
| `set_active_context` | Persist current focus and summary | `project_id`, `summary`, `focus` |
| `get_session_context` | Comprehensive snapshot | `include[]`, `format` |

### Filing Cabinet (Knowledge Index)

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `file_to_cabinet` | Index a file for retrieval | `project_id`, `file_path`, `summary`, `key_exports` |
| `get_from_cabinet` | Retrieve indexed file info | `project_id`, `file_path` |
| `search_memory` | Semantic search across indexed content | `query`, `project_id` |

### Spatial Map (PC as Rooms)

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `get_spatial_map` | Get folder structure visualization | `project_id` |
| `add_room` | Add folder as navigable "room" | `project_id`, `path`, `description`, `depth` |
| `link_rooms` | Connect two rooms bidirectionally | `project_id`, `room_a`, `room_b` |

### Bug Tracking

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `log_bug` | Record bug for later fixing | `project_id`, `title`, `description`, `severity` |
| `get_bugs` | Get bugs by status | `project_id`, `status` |
| `resolve_bug` | Mark bug as fixed | `project_id`, `bug_id`, `resolution` |

### Multi-Agent Coordination

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `acquire_lock` | Lock resource for exclusive access | `resource_id`, `agent_id`, `operation` |
| `release_lock` | Release locked resource | `resource_id`, `agent_id` |
| `emit_context_event` | Agent handoff signal | `project_id`, `agent_id`, `event_type`, `summary` |
| `get_context_events` | Get recent events | `project_id`, `limit` |

---

## Key Patterns

### Session Continuity

```typescript
// On session start
const context = await get_active_context({ project_id: "my-project" })

// On significant progress
await set_active_context({
  project_id: "my-project",
  summary: "Completed auth module, starting tests",
  focus: "src/users/"
})
```

### Multi-Agent Safety

```typescript
// Acquire lock before editing
await acquire_lock({
  resource_id: "src/auth/*",
  agent_id: "agent-A",
  operation: "write"
})

// ... do work ...

// Release for other agents
await release_lock({
  resource_id: "src/auth/*",
  agent_id: "agent-A"
})

// Notify handoff
await emit_context_event({
  project_id: "my-project",
  agent_id: "agent-A",
  event_type: "handoff",
  summary: "Completed auth refactor, ready for review"
})
```

---

## Installation

```json
{
  "mcpServers": {
    "synch": {
      "command": "node",
      "args": ["path/to/mnehmos.synch.mcp/dist/index.js"]
    }
  }
}
```

**GitHub**: [github.com/Mnehmos/mnehmos.synch.mcp](https://github.com/Mnehmos/mnehmos.synch.mcp)
