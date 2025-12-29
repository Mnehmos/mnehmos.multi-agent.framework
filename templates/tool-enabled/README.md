# Tool-Enabled Templates

> Pre-built templates with Mnehmos MCP tool instructions included.

## Overview

These templates extend the base framework templates with optional MCP tool appendices. Use these when you have Mnehmos MCP tools installed and want agents to be aware of their capabilities.

## Available Templates

| Template | Description |
|----------|-------------|
| [custom-instructions-with-tools.md](custom-instructions-with-tools.md) | Full custom instructions with all tool appendices |

## Usage

### Option 1: Use Complete Template

Copy the entire template file to replace your custom instructions:

```bash
# For Roo Code
cp templates/tool-enabled/custom-instructions-with-tools.md .roo/custom-instructions.md
```

### Option 2: Selective Tool Inclusion

1. Start with the base template from `templates/custom-instructions-for-all-modes.md`
2. Append only the tool sections you need from `templates/tools/`

Example:
```markdown
<!-- Base instructions -->
... (content from custom-instructions-for-all-modes.md)

<!-- Append OODA MCP section -->
... (content from templates/tools/ooda-mcp.md)

<!-- Append Synch MCP section -->
... (content from templates/tools/synch-mcp.md)
```

### Option 3: Reference Tool Files

In your custom instructions, reference the tool documentation:

```markdown
## MCP Tool Guidelines

For MCP tool usage instructions, see:
- OODA MCP: templates/tools/ooda-mcp.md
- Synch MCP: templates/tools/synch-mcp.md
- Index Foundry: templates/tools/index-foundry-mcp.md
```

## Tool Installation Required

These templates assume you have the corresponding MCP tools installed. See:

| Tool | Installation |
|------|--------------|
| OODA MCP | [github.com/Mnehmos/mnehmos.ooda.mcp](https://github.com/Mnehmos/mnehmos.ooda.mcp) |
| Synch MCP | [github.com/Mnehmos/mnehmos.synch.mcp](https://github.com/Mnehmos/mnehmos.synch.mcp) |
| Index Foundry | [github.com/Mnehmos/mnehmos.index-foundry.mcp](https://github.com/Mnehmos/mnehmos.index-foundry.mcp) |
| arXiv MCP | [github.com/Mnehmos/mnehmos.arxiv.mcp](https://github.com/Mnehmos/mnehmos.arxiv.mcp) |
| Trace MCP | [github.com/Mnehmos/mnehmos.trace.mcp](https://github.com/Mnehmos/mnehmos.trace.mcp) |
| ChatRPG | [github.com/Mnehmos/mnehmos.chatrpg.game](https://github.com/Mnehmos/mnehmos.chatrpg.game) |

## Customization

### Remove Unused Tool Sections

If you don't have all tools installed, remove the corresponding appendix sections:

1. Open `custom-instructions-with-tools.md`
2. Delete the `## A. OODA MCP` section (or whichever tools you don't have)
3. Save and use the modified template

### Add Custom Tools

To add instructions for your own MCP tools:

1. Create a new file in `templates/tools/your-tool.md`
2. Follow the format of existing tool instruction files
3. Append to your custom instructions template

## Best Practices

1. **Only include tools you have installed** - Remove sections for unavailable tools
2. **Keep tool sections updated** - When upgrading MCP tools, update instructions
3. **Test tool availability** - Verify tools work before relying on them in templates
4. **Document custom tools** - Add your own MCP tools using the same format
