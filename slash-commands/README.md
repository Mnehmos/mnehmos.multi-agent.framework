---
description: User-facing guide to slash commands for the Advanced Multi-Agent AI Framework
---

# Slash Commands User Guide

This document explains how to use and adapt slash commands in the Advanced Multi-Agent AI Framework.

It is:
- Focused on practical usage for template users.
- Aligned with [`templates/slash-commands.yaml`](../templates/slash-commands.yaml).
- Platform-agnostic: examples use `/command` syntax you can wire to any runtime (Roo, Kilo Code, custom bots, terminals, CI, etc.).
- Supported by per-command docs in this directory (each file documents one command’s behavior template).

For design and implementation details, see:
- [`slash-commands-proposal.md`](../slash-commands-proposal.md)
- [`slash-commands-implementation-plan.md`](../slash-commands-implementation-plan.md)

Those are internal/optional references, not prerequisites for basic use.

## 1. What Slash Commands Are (In This Framework)

In this framework, a “slash command” is:

- A structured, human-friendly shorthand:
  - Starts with `/` (e.g. `/plan`, `/scope`, `/assign`).
  - Encodes intent, target, and options in a single line.
- A declarative contract:
  - Each command has: name, description, category, permissions, and implementation hints.
  - Defined centrally in [`templates/slash-commands.yaml`](../templates/slash-commands.yaml).
- An integration boundary:
  - Your runtime parses `/...` input.
  - Maps it to the appropriate agent(s), tools, or workflows.
  - Executes behavior consistent with this template.

This repo provides:
- A canonical command list and semantics (`templates/slash-commands.yaml`).
- Markdown specs for key commands under [`slash-commands/`](./).
- Optional helpers under [`slash-commands/core/`](./core/) for parsing/registration (example JS implementation).

You choose how to wire these into your environment.

## 2. Command Categories and Index

Based on [`templates/slash-commands.yaml`](../templates/slash-commands.yaml), commands are grouped as:

- Project Management:
  - `/plan` → Project task maps and roadmap generation ([`slash-commands/plan.md`](plan.md))
  - `/scope` → Deep issue scoping ([`slash-commands/scope.md`](scope.md))
  - `/assign` → Task delegation to agents ([`slash-commands/assign.md`](assign.md))
  - `/status` → Project/task status overview ([`slash-commands/status.md`](status.md))
  - `/review` → Code review workflow ([`slash-commands/review.md`](review.md))
  - `/merge` → PR/merge workflow ([`slash-commands/merge.md`](merge.md))

- Architecture:
  - `/design` → System/architecture design ([`slash-commands/design.md`](design.md) if present)
  - `/diagram` → Diagrams and visuals ([`slash-commands/diagram.md`](diagram.md))
  - `/pattern` → Design patterns guidance ([`slash-commands/pattern.md`](pattern.md))
  - `/validate` → Architecture validation ([`slash-commands/validate.md`](validate.md))

- Development:
  - `/build` → Build/deploy flows ([`slash-commands/build.md`](build.md))
  - `/test` → Test orchestration ([`slash-commands/test.md`](test.md))
  - `/refactor` → Refactoring workflows ([`slash-commands/refactor.md`](refactor.md))
  - `/optimize` → Performance optimization ([`slash-commands/optimize.md`](optimize.md))
  - `/debug` → Debugging workflows ([`slash-commands/debug.md`](debug.md))

- Research:
  - `/research` → Research workflows ([`slash-commands/research.md`](research.md))
  - `/analyze` → Multi-perspective analysis ([`slash-commands/analyze.md`](analyze.md))
  - `/compare` → Competitive/option comparison ([`slash-commands/compare.md`](compare.md))
  - `/synthesis` → Knowledge synthesis ([`slash-commands/synthesis.md`](synthesis.md))

- Framework:
  - `/mode` → Switch agent modes ([`slash-commands/mode.md`](mode.md))
  - `/config` → Framework configuration ([`slash-commands/config.md`](config.md))
  - `/template` → Generate prompt/templates ([`slash-commands/template.md`](template.md))
  - `/workflow` → Workflow analysis ([`slash-commands/workflow.md`](workflow.md))

- Utility:
  - `/help` → Command discovery ([`slash-commands/help.md`](help.md))
  - `/docs` → Docs access ([`slash-commands/docs.md`](docs.md))
  - `/logs` → Activity logs ([`slash-commands/logs.md`](logs.md))
  - `/export` → Export/backup ([`slash-commands/export.md`](export.md))

If a command exists in [`templates/slash-commands.yaml`](../templates/slash-commands.yaml) but does not yet have a dedicated `.md` file, use the YAML as the source of truth when adding it.

## 3. How to Use Commands (Conceptual Behavior)

Each command follows the same pattern:

- Syntax:
  - `/command-name [target] [--option=value ...]`
- Behavior:
  - Interprets intent based on `command-name`.
  - Uses `target` and options to scope the operation.
  - Produces a structured result (often markdown/JSON the runtime or human can act on).

High-level behaviors for major commands:

- `/plan`
  - Purpose: Turn a goal into a task map (phases, dependencies, owners).
  - Inputs: Project name/goal plus optional complexity/timeline flags.
  - Output: Structured plan (e.g. checklist, phases, suggested assignments).

- `/scope`
  - Purpose: Turn an issue/ticket into a detailed scope doc.
  - Inputs: Issue reference/URL, depth, components.
  - Output: Problem analysis, impact, options, recommended implementation path.

- `/assign`
  - Purpose: Route a task to a specific agent/mode with a structured spec.
  - Inputs: Task ID/description, target mode, priority, etc.
  - Output: Assignment payload your system can hand to that agent.

- `/status`
  - Purpose: Summarize project/task progress.
  - Inputs: Optional filters (project, agent, status).
  - Output: Aggregated status view; your runtime decides where data comes from.

- `/review`
  - Purpose: Run a structured review (code, docs, architecture).
  - Inputs: Target path/PR, focus areas.
  - Output: Classified findings, suggestions, optional checklists.

- `/build`
  - Purpose: Describe a build/deploy workflow with quality gates.
  - Inputs: Target, env, test/quality flags.
  - Output: A plan or invocation descriptor; your CI or runtime actually runs it.

- `/test`
  - Purpose: Coordinate tests across components or workflows.
  - Inputs: Component/feature/all; depth; options.
  - Output: Test plan or summary; runnable commands are environment-specific.

- `/mode`
  - Purpose: Switch which agent/mode should handle subsequent instructions.
  - Inputs: Mode name, context, persistence flags.
  - Output: Mode switch confirmation; your runtime updates “who” is active.

- `/config`
  - Purpose: Read/update framework or runtime configuration.
  - Inputs: Setting key(s), values, scope.
  - Output: Config diff/confirmation; actual storage is up to your system.

- `/help`, `/docs`
  - Purpose: Discover commands and docs.
  - Output: Lists, links and hints based on commands defined here.

- `/logs`, `/export`
  - Purpose: Surface activity and export state.
  - Output: Filtered log views or export manifests; backing store is your choice.

Refer to each per-command markdown file in [`slash-commands/`](./) for concrete option patterns and suggested outputs.

## 4. Adapting Slash Commands to Your Runtime

The template is intentionally runtime-agnostic. To integrate:

1. Load configuration
   - Read [`templates/slash-commands.yaml`](../templates/slash-commands.yaml).
   - Treat it as the canonical index of commands, categories, aliases, and flags.
   - Optionally, also load per-command `.md` files to show rich help/usage.

2. Parse incoming input
   - Detect lines starting with `/`.
   - Extract:
     - `name` (e.g. `plan`)
     - `args` / `options` (e.g. `--depth=comprehensive`)
   - Example: use your own parser, or adapt [`slash-commands/core/parser.js`](core/parser.js) as a reference implementation.

3. Resolve the command
   - Look up `name` or alias in the loaded command map.
   - Validate:
     - Command is enabled.
     - Any required permissions/roles in your environment.
   - If unknown, fall back to:
     - A help response built from the same registry.

4. Route to handlers
   - Map each command to a handler in your environment, for example:
     - Orchestrator/Planner agent for `/plan`, `/scope`, `/assign`.
     - Architect mode for `/design`, `/diagram`.
     - Builder/Debug modes for `/build`, `/test`, `/debug`, `/refactor`, `/optimize`.
   - Handlers should:
     - Follow the intent and shape described in the corresponding `.md`.
     - Produce structured, inspectable outputs; avoid engine-specific side effects in the spec itself.

5. Keep it platform-neutral
   - Examples in this repo mention Roo and related tools as inspiration only.
   - When implementing:
     - In Roo: wire `/...` to the Orchestrator or specific modes via your router.
     - In Kilo Code or another IDE: bind `/...` in a command palette or chat-like interface.
     - In custom systems: route `/...` to HTTP endpoints, MCP tools, bots, or CLIs.

6. Customize safely
   - You may:
     - Add runtime-specific aliases.
     - Map commands to your own pipelines (CI, GitHub, etc.).
     - Extend behaviors while preserving the high-level contract.
   - You should not:
     - Change core meanings defined in [`templates/slash-commands.yaml`](../templates/slash-commands.yaml) without tracking those changes separately (see the issue for T05).

## 5. Per-Command Markdown Files

Each `.md` file in [`slash-commands/`](./) is:

- A user-facing specification for that command:
  - Frontmatter (description, category, etc.) aligned with the YAML.
  - Detailed options, example invocations, and recommended output structure.
- A template your runtime can:
  - Render as help content.
  - Use as guidance to implement a handler.

To keep things aligned:

- When updating a command:
  - Ensure its `.md` matches its entry in [`templates/slash-commands.yaml`](../templates/slash-commands.yaml) (name, purpose, category, high-level semantics).
- When adding a new command:
  - Add it in `slash-commands.yaml`.
  - Create `slash-commands/<name>.md` with matching semantics.

## 6. Internal Design and Implementation References

For deeper implementation detail (optional for end users):

- [`slash-commands-proposal.md`](../slash-commands-proposal.md)
  - Conceptual design, command rationale, category breakdown.
  - Treat as an internal design document.

- [`slash-commands-implementation-plan.md`](../slash-commands-implementation-plan.md)
  - Phased implementation steps, suggested file structures.
  - Treat as an internal implementation roadmap.

Key points:
- Neither document is required to execute slash commands as a user.
- They are guidance for maintainers integrating this template into more advanced runtimes.
