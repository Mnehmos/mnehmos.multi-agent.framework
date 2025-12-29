# Trace MCP Tool Instructions

> Static analysis engine for detecting schema mismatches between data producers and consumers

## Overview

Trace MCP finds mismatches between:
- Backend API responses and frontend expectations
- MCP tool outputs and client code that uses them
- Service A's events and Service B's handlers

**Example Problem Detected:**
```
Producer returns:    { characterClass: "Fighter", hitPoints: 45 }
Consumer expects:    { class: "Fighter", hp: 45 }
Result:              ❌ Mismatch detected before runtime
```

## Tool Categories

### Core Analysis Tools

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `extract_schemas` | Extract schemas from server code | Analyzing producer contracts |
| `extract_file` | Extract from single file | Quick single-file analysis |
| `trace_usage` | Trace how client uses tools | Analyzing consumer expectations |
| `trace_file` | Trace single file usage | Quick single-file tracing |
| `compare` | Full pipeline analysis | Finding all mismatches |

### Code Generation Tools

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `scaffold_consumer` | Generate client from schema | Creating type-safe client code |
| `scaffold_producer` | Generate server from usage | Creating server stubs |
| `comment_contract` | Add cross-reference comments | Documenting contracts |

### Project Management Tools

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `init_project` | Initialize trace project | Setting up continuous validation |
| `watch` | Watch for changes | Auto-revalidation during development |
| `get_project_status` | Get project status | Checking validation state |

## Supported Schema Formats

### MCP Server Schemas (Zod)
```typescript
server.tool(
  "get_character",
  "Fetch character data",
  { characterId: z.string() },
  async (args) => { /* ... */ }
);
```

### OpenAPI / Swagger
```yaml
paths:
  /characters/{id}:
    get:
      responses:
        '200':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Character'
```

### TypeScript Interfaces
```typescript
export interface Character {
  id: string;
  name: string;
  class: "Fighter" | "Wizard" | "Rogue";
}
```

### tRPC Routers
```typescript
export const appRouter = router({
  users: router({
    getById: publicProcedure
      .input(z.string())
      .output(z.object({ id: z.string(), name: z.string() }))
      .query(async ({ input }) => { /* ... */ })
  })
});
```

## Tool Details

### extract_schemas

Extract producer schemas from server source code.

**Parameters:**
- `rootDir` (required) - Root directory of server source
- `include` - Glob patterns to include (default: `**/*.ts`)
- `exclude` - Glob patterns to exclude

**Example:**
```typescript
const schemas = await extract_schemas({
  rootDir: "./backend/src",
  include: ["**/*.ts"],
  exclude: ["**/*.test.ts"]
});
// Returns: { success: true, count: 12, schemas: [...] }
```

### trace_usage

Trace how client code uses MCP tools.

**Parameters:**
- `rootDir` (required) - Root directory of consumer source
- `include`, `exclude` - Glob patterns

**Example:**
```typescript
const usage = await trace_usage({
  rootDir: "./frontend/src",
  include: ["**/*.tsx", "**/*.ts"]
});
```

### compare

Full analysis pipeline: extract → trace → compare → report.

**Parameters:**
- `producerDir` (required) - Path to server source
- `consumerDir` (required) - Path to client source
- `format` - Output format: `json`, `markdown`, `summary`
- `strict` - Treat missing optional as warnings
- `direction` - `producer_to_consumer`, `consumer_to_producer`, `bidirectional`

**Example:**
```typescript
const report = await compare({
  producerDir: "./backend/src",
  consumerDir: "./frontend/src",
  format: "markdown",
  direction: "bidirectional"
});
```

**Output (Markdown):**
```markdown
# Trace MCP Analysis Report

## Summary
| Metric      | Count |
| ----------- | ----- |
| Total Tools | 12    |
| Total Calls | 34    |
| Matches     | 31    |
| Mismatches  | 3     |

## Mismatches

### get_character
- **Type**: MISSING_PROPERTY
- **Description**: Consumer expects "characterClass" but producer has "class"
- **Consumer**: ./components/CharacterSheet.tsx:45
- **Producer**: ./tools/character.ts:23
```

### scaffold_consumer

Generate client code from producer schema.

**Parameters:**
- `producerDir` (required) - Path to server source
- `toolName` (required) - Name of tool to scaffold
- `target` - `typescript`, `javascript`, `react-hook`, `zustand-action`
- `includeErrorHandling` - Include try/catch (default: true)
- `includeTypes` - Include TypeScript types (default: true)

**Example:**
```typescript
const code = await scaffold_consumer({
  producerDir: "./backend",
  toolName: "get_character",
  target: "react-hook",
  includeErrorHandling: true
});
```

**Output:**
```typescript
export function useGetCharacter() {
  return useCallback(async (args: GetCharacterArgs) => {
    try {
      const result = await client.callTool("get_character", args);
      return JSON.parse(result.content[0].text);
    } catch (error) {
      console.error("Error calling get_character:", error);
      throw error;
    }
  }, []);
}
```

### scaffold_producer

Generate server stub from client usage.

**Parameters:**
- `consumerDir` (required) - Path to consumer source
- `toolName` (required) - Name of tool to scaffold
- `includeHandler` - Include handler stub (default: true)

**Example:**
```typescript
const stub = await scaffold_producer({
  consumerDir: "./frontend",
  toolName: "save_settings",
  includeHandler: true
});
```

### comment_contract

Add cross-reference comments to validated pairs.

**Parameters:**
- `producerDir`, `consumerDir`, `toolName` (required)
- `dryRun` - Preview without writing (default: true)
- `style` - `jsdoc`, `inline`, `block`

### init_project

Initialize a trace project for continuous validation.

**Parameters:**
- `projectDir` (required) - Root directory
- `producerPath` (required) - Relative path to producer code
- `consumerPath` (required) - Relative path to consumer code
- `producerLanguage`, `consumerLanguage` - `typescript`, `python`, etc.

**Example:**
```typescript
await init_project({
  projectDir: ".",
  producerPath: "./backend/src",
  consumerPath: "./frontend/src",
  producerLanguage: "typescript",
  consumerLanguage: "typescript"
});
// Creates: .trace-mcp/config.json
```

### watch

Watch for changes and auto-revalidate.

**Parameters:**
- `projectDir` (required) - Root with `.trace-mcp` config
- `action` - `start`, `stop`, `status`, `poll`

**Example:**
```typescript
// Start watching
await watch({ projectDir: ".", action: "start" });

// Check status
const status = await watch({ projectDir: ".", action: "status" });

// Poll for results
const results = await watch({ projectDir: ".", action: "poll" });

// Stop watching
await watch({ projectDir: ".", action: "stop" });
```

## Integration with Multi-Agent Framework

### Architect Mode
Use Trace MCP to validate contract design:
- Extract schemas from existing services
- Compare against proposed interfaces
- Identify breaking changes before implementation

### Code Mode
Use during implementation:
- Scaffold consumer code from producer schemas
- Validate changes don't break contracts
- Add contract comments after implementation

### Debug Mode
Use to diagnose integration issues:
- Compare producer/consumer to find mismatches
- Identify which side has incorrect expectations
- Generate fix suggestions

### Orchestrator
Include trace validation in task workflows:
- Run `compare` after implementation tasks
- Block merge if mismatches detected
- Track contract validation in task status

## Typical Workflows

### 1. Quick One-Off Analysis
```typescript
const report = await compare({
  producerDir: "./backend",
  consumerDir: "./frontend",
  format: "markdown"
});
```

### 2. Continuous Validation
```typescript
// Setup
await init_project({
  projectDir: ".",
  producerPath: "./backend",
  consumerPath: "./frontend"
});

// Start watching
await watch({ projectDir: ".", action: "start" });

// Poll periodically
const status = await watch({ projectDir: ".", action: "poll" });
if (status.mismatches > 0) {
  // Alert developer
}
```

### 3. Generate Missing Code
```typescript
// Client code from server schema
const clientCode = await scaffold_consumer({
  producerDir: "./backend",
  toolName: "create_order",
  target: "typescript"
});

// Server stub from client usage
const serverCode = await scaffold_producer({
  consumerDir: "./frontend",
  toolName: "submit_payment"
});
```

### 4. Multi-Format Extraction
```typescript
// MCP tools
await extract_schemas({ rootDir: "./mcp-server" });

// OpenAPI specs
await extract_schemas({ rootDir: "./api", include: ["**/*.yaml"] });

// tRPC routers
await extract_schemas({ rootDir: "./trpc", include: ["**/*.router.ts"] });

// TypeScript interfaces
await extract_schemas({ rootDir: "./shared", include: ["**/*.types.ts"] });
```

## Best Practices

1. **Run Early and Often**
   - Integrate `compare` into CI/CD
   - Use watch mode during development
   - Catch mismatches before they reach production

2. **Document Contracts**
   - Use `comment_contract` to add cross-references
   - Keep contract comments up to date
   - Use JSDoc style for IDE support

3. **Generate, Don't Guess**
   - Use `scaffold_consumer` for type-safe client code
   - Use `scaffold_producer` when building new endpoints
   - Regenerate after schema changes

4. **Bidirectional Analysis**
   - Check both directions for complete coverage
   - Producer might have extra fields (okay)
   - Consumer expecting missing fields (error)

## Constraints

- MUST have TypeScript source for analysis
- SHOULD run `compare` before merging changes
- SHOULD use `dryRun: true` before writing comments
- SHOULD regenerate scaffolds after schema changes
