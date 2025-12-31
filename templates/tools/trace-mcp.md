# Reflex Layer: Trace MCP Integration

> **Tier 4 Appendix** | Add to autonomic instructions when Trace MCP is installed.
> Provides: Contract validation, schema extraction, consumer scaffolding, continuous watch mode.

---

## The Reflex Arc

The reflex arc is your **spinal cord**—immediate, pre-cognitive responses that reject bad inputs before they reach the brain. In combat, reflexes keep you alive. In code, they catch bugs before runtime.

```
┌─────────────────────────────────────────────────────────────────────┐
│                         REFLEX ARC                                  │
│                                                                     │
│   Producer (Server)                    Consumer (Client)            │
│   ┌────────────────┐                   ┌────────────────┐          │
│   │  server.tool() │                   │   callTool()   │          │
│   │  with Zod      │ ─── contract ───> │   result.*     │          │
│   │  schema        │     validation    │   properties   │          │
│   └────────────────┘                   └────────────────┘          │
│                                                                     │
│                    TRACE MCP                                        │
│   ┌─────────────────────────────────────────────────────────────┐  │
│   │  extract_schemas  →  trace_usage  →  compare  →  report    │  │
│   └─────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────┘
```

---

## The Problem: Schema Drift

MCP tools have contracts:
- **Input Schema**: What parameters the tool accepts
- **Output Schema**: What the tool returns

Over time, producers and consumers **drift**:
- Server adds a new required parameter
- Client expects a property that was renamed
- Types change subtly (string → enum)

These bugs appear at **runtime**. Trace MCP catches them at **edit time**.

---

## Tool Categories

### Schema Extraction

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `extract_schemas` | Extract producer schemas from server code | `rootDir`, `include[]` |
| `extract_file` | Extract from single file | `filePath` |

### Usage Tracing

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `trace_usage` | Find how client uses tools | `rootDir`, `include[]` |
| `trace_file` | Trace single file | `filePath` |

### Contract Comparison

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `compare` | Full analysis: extract + trace + diff | `producerDir`, `consumerDir`, `format` |

### Code Generation

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `scaffold_consumer` | Generate type-safe client code | `producerDir`, `toolName`, `target` |
| `scaffold_producer` | Generate server stubs from usage | `consumerDir`, `toolName` |

### Project Management

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `init_project` | Initialize trace project config | `projectDir`, `producerPath`, `consumerPath` |
| `watch` | Continuous validation | `projectDir`, `action` |

---

## Key Patterns

### Pre-Merge Validation

```typescript
const report = await compare({
  producerDir: "packages/server/src",
  consumerDir: "packages/client/src",
  format: "markdown"
})
```

### Type-Safe Client Generation

```typescript
const code = await scaffold_consumer({
  producerDir: "packages/server/src",
  toolName: "create_character",
  target: "typescript"
})
```

### Continuous Watch Mode

```typescript
await init_project({
  projectDir: "/path/to/project",
  producerPath: "packages/server/src",
  consumerPath: "packages/client/src"
})

await watch({ projectDir: "/path/to/project", action: "start" })
```

---

## Integration with TDD

- **Red Phase**: `compare` before writing tests to ensure schema alignment
- **Green Phase**: `scaffold_consumer` to generate type-safe implementations
- **Blue Phase**: `watch` mode during refactoring to catch regressions

---

## Installation

```json
{
  "mcpServers": {
    "trace": {
      "command": "node",
      "args": ["path/to/mnehmos.trace.mcp/dist/index.js"]
    }
  }
}
```

**GitHub**: [github.com/Mnehmos/mnehmos.trace.mcp](https://github.com/Mnehmos/mnehmos.trace.mcp)
