# Advanced Multi-Agent AI Framework

> A structured, production-ready multi-agent framework for coordinating specialized AI modes using clear contracts, deterministic execution, and traceable task flows.

## Quick Start

**[→ Get Started in 5 Minutes](templates/quick-start.md)** — Choose your IDE and follow the setup guide.

```bash
git clone https://github.com/Mnehmos/Advanced-Multi-Agent-AI-Framework.git
cd Advanced-Multi-Agent-AI-Framework
```

## Supported Tools

| IDE / Tool | Template | Description |
|------------|----------|-------------|
| **Any IDE** | [AGENTS.md](templates/universal/AGENTS.md) | Universal agent instructions (works everywhere) |
| **Roo Code** | [custom_modes.yaml](templates/custom_modes.yaml) | Full multi-mode configuration |
| **Claude Code** | [CLAUDE.md](templates/claude-code/CLAUDE.md) | Claude Code system instructions |
| **Cursor** | [_global.mdc](templates/cursor/rules/_global.mdc) | Cursor rules in MDC format |
| **GitHub Copilot** | [copilot-instructions.md](templates/copilot/copilot-instructions.md) | Copilot custom instructions |

**Full Setup Guide:** [templates/quick-start.md](templates/quick-start.md)

## Core Concepts

### Multi-Agent Coordination
Specialized agents work together through an Orchestrator that delegates tasks to the right specialist:

| Role | Purpose |
|------|---------|
| **Orchestrator** | Project management, task delegation, workflow coordination |
| **Architect** | System design, ADRs, technical contracts |
| **Planner** | Requirements, task maps, backlog management |
| **Code** | Implementation, refactoring, optimization |
| **Debug** | Root cause analysis, diagnostics |

### TDD Workflow (Red → Green → Blue)
- **Red Phase**: Write failing tests first
- **Green Phase**: Minimal implementation to pass tests
- **Blue Phase**: Refactor while keeping tests green

### Boomerang Task Returns
Every delegated task returns with structured results: status, files changed, tests run, and summary. This ensures traceability and auditability.

## Templates

All configuration templates are in [`templates/`](templates/):

| File | Purpose |
|------|---------|
| [custom_modes.yaml](templates/custom_modes.yaml) | Mode definitions for Roo Code |
| [custom-instructions-for-all-modes.md](templates/custom-instructions-for-all-modes.md) | Shared agent instructions |
| [slash-commands.yaml](templates/slash-commands.yaml) | Slash command definitions |
| [enhance-prompt-template.md](templates/enhance-prompt-template.md) | Prompt enhancement patterns |
| [tools/](templates/tools/) | **MCP tool instruction add-ons** |
| [tool-enabled/](templates/tool-enabled/) | **Templates with MCP tools included** |

## Meet the Team

Detailed profiles for each AI specialist in [`meet-the-team/`](meet-the-team/):

[Orchestrator](meet-the-team/orchestrator.md) · [Architect](meet-the-team/architect.md) · [Planner](meet-the-team/planner.md) · [Code](meet-the-team/code.md) · [Debug](meet-the-team/debug.md) · [Ask](meet-the-team/ask.md) · [Deep Research](meet-the-team/deep-research-agent.md) · [Memory](meet-the-team/memory.md)

## Slash Commands

Standardized commands for common workflows in [`slash-commands/`](slash-commands/):

`/plan` · `/build` · `/test` · `/review` · `/debug` · `/refactor` · `/docs` · [View All →](slash-commands/README.md)

## Key Features

- **Scoped Edits**: Agents operate within assigned workspace paths and file patterns
- **Deterministic Workflows**: Inspectable steps, atomic tool execution
- **Platform Agnostic**: Works with Roo Code, Claude Code, Cursor, Copilot, or custom runtimes
- **Token Efficient**: Context-aware, minimal-diff editing patterns
- **Extensible**: Add custom modes, slash commands, and templates

## Mnehmos MCP Ecosystem

Extend your agents with optional MCP (Model Context Protocol) tools. These are **optional add-ons** that provide additional capabilities when installed.

### Available Tools

| Tool | Description | Tools Count |
|------|-------------|-------------|
| [**OODA MCP**](https://github.com/Mnehmos/mnehmos.ooda.mcp) | Full computer control (CLI, files, screen, keyboard, mouse, windows) | 62 |
| [**Synch MCP**](https://github.com/Mnehmos/mnehmos.synch.mcp) | Agent memory bank, context sync, bug tracking, handoffs | ~17 |
| [**Index Foundry**](https://github.com/Mnehmos/mnehmos.index-foundry.mcp) | RAG indexing, vector search, deployable projects | ~35 |
| [**arXiv MCP**](https://github.com/Mnehmos/mnehmos.arxiv.mcp) | Academic paper search and PDF content extraction | 4 |
| [**Trace MCP**](https://github.com/Mnehmos/mnehmos.trace.mcp) | Schema tracing, producer/consumer validation | 11 |
| [**ChatRPG**](https://github.com/Mnehmos/mnehmos.chatrpg.game) | D&D 5e mechanics for AI Dungeon Masters | 30+ |

### Using MCP Tools with This Framework

1. **Install desired MCP tools** from the repositories above
2. **Configure in your MCP client** (Claude Desktop, Roo Code, etc.)
3. **Add tool instructions** to your agent templates:
   - Use [tool-enabled templates](templates/tool-enabled/) with instructions pre-included
   - Or append from [individual tool docs](templates/tools/) to customize

### Tool Instruction Files

Detailed usage guides for each tool in [`templates/tools/`](templates/tools/):

| File | Description |
|------|-------------|
| [ooda-mcp.md](templates/tools/ooda-mcp.md) | OODA loop pattern, file ops, CLI, CRUD, screeninput control |
| [synch-mcp.md](templates/tools/synch-mcp.md) | Memory bank, context events, bug tracking |
| [index-foundry-mcp.md](templates/tools/index-foundry-mcp.md) | RAG pipelines, vector search, deployment |
| [arxiv-mcp.md](templates/tools/arxiv-mcp.md) | Paper search, category browsing, PDF extraction |
| [trace-mcp.md](templates/tools/trace-mcp.md) | Schema extraction, mismatch detection, scaffolding |
| [chatrpg-mcp.md](templates/tools/chatrpg-mcp.md) | Dice rolling, combat, character management |

### Quick Start with Tools

```bash
# Clone an MCP tool
git clone https://github.com/Mnehmos/mnehmos.ooda.mcp.git
cd mnehmos.ooda.mcp
npm install && npm run build

# Add to your MCP client config (example for Claude Desktop)
# %APPDATA%\Claude\claude_desktop_config.json
{
  "mcpServers": {
    "ooda": {
      "command": "node",
      "args": ["/path/to/mnehmos.ooda.mcp/dist/index.js"]
    }
  }
}
```

## Requirements

Any agentic runtime supporting:
- Multiple modes/roles with distinct instructions
- Atomic tool execution
- File-scoped deterministic edits

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

- ⭐ Star this repo if useful
- 🐛 Open issues for bugs or suggestions
- 🔀 PRs welcome for templates, docs, and examples

## License

[MIT License](LICENSE) — Open source for professional and commercial use.

### Acknowledgments

- [Prompt Engineering Sources](https://mnehmos.github.io/mnehmos.prompts.research/) (20+ research papers)
- Vincent Shing Hin Chong — [Language Construct Modeling](https://osf.io/q6cyp/)
- Multi-agent AI research community
