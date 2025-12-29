# Mnehmos MCP Tools Ecosystem

> Optional tool instructions that can be appended to agent templates for enhanced capabilities.

## Overview

The Mnehmos ecosystem provides a suite of MCP (Model Context Protocol) servers that extend agent capabilities. Each tool instruction file in this directory can be optionally appended to your agent templates when those tools are available.

## Available Tools

| Tool | File | Description |
|------|------|-------------|
| **OODA MCP** | [ooda-mcp.md](ooda-mcp.md) | Full computer control (62 tools) - CLI, files, screen, input, windows |
| **Synch MCP** | [synch-mcp.md](synch-mcp.md) | Agent memory bank and context synchronization (~17 tools) |
| **Index Foundry** | [index-foundry-mcp.md](index-foundry-mcp.md) | RAG indexing and vector search (~35 tools) |
| **arXiv MCP** | [arxiv-mcp.md](arxiv-mcp.md) | Academic paper search and retrieval (4 tools) |
| **Trace MCP** | [trace-mcp.md](trace-mcp.md) | Schema tracing and validation (11 tools) |
| **ChatRPG** | [chatrpg-mcp.md](chatrpg-mcp.md) | D&D 5e mechanics for AI DMs (30+ tools) |

## Usage

### Option 1: Append to Custom Instructions

Add the relevant tool instruction file content to your `custom-instructions-for-all-modes.md`:

```markdown
<!-- Include at the end of custom-instructions-for-all-modes.md -->

## MCP Tool Instructions

<!-- Paste content from templates/tools/ooda-mcp.md -->
<!-- Paste content from templates/tools/synch-mcp.md -->
```

### Option 2: Use Tool-Enabled Templates

Pre-built templates with tool instructions already included are available in `templates/tool-enabled/`:

- `custom-instructions-with-tools.md` - Full custom instructions with all tool appendices
- `AGENTS-with-tools.md` - Universal AGENTS.md with tool appendices

### Option 3: Selective Tool Loading

Include only the tools you need:

```markdown
## 8. MCP Tool Instructions (Optional)

The following MCP tools are available. Use them according to these guidelines:

<!-- Include only the sections you need -->
```

## Tool Installation

Each tool must be installed and configured in your MCP client. See individual tool repositories for installation instructions:

| Tool | Repository |
|------|------------|
| OODA MCP | [github.com/Mnehmos/mnehmos.ooda.mcp](https://github.com/Mnehmos/mnehmos.ooda.mcp) |
| Synch MCP | [github.com/Mnehmos/mnehmos.synch.mcp](https://github.com/Mnehmos/mnehmos.synch.mcp) |
| Index Foundry | [github.com/Mnehmos/mnehmos.index-foundry.mcp](https://github.com/Mnehmos/mnehmos.index-foundry.mcp) |
| arXiv MCP | [github.com/Mnehmos/mnehmos.arxiv.mcp](https://github.com/Mnehmos/mnehmos.arxiv.mcp) |
| Trace MCP | [github.com/Mnehmos/mnehmos.trace.mcp](https://github.com/Mnehmos/mnehmos.trace.mcp) |
| ChatRPG | [github.com/Mnehmos/mnehmos.chatrpg.game](https://github.com/Mnehmos/mnehmos.chatrpg.game) |

## Design Principles

1. **Optional Add-ons**: Tools are additive; base framework works without them
2. **Modular**: Include only the tools you need
3. **Contract-Compatible**: Tool instructions follow the same boomerang/scoped-edit contracts
4. **Documented**: Each tool has clear usage patterns and best practices
