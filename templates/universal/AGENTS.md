# AGENTS.md

> **Universal Agent Contract** | Works with: Roo Code, Claude Code, Cursor, Copilot, Warp, VS Code

Your LLM is a brain in a jar. These contracts give it a nervous system.

---

## The Agentic Nervous System

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CENTRAL (BRAIN) - Cognition                      │
│    Orchestrator • Architect • Planner • Ask • Deep Research        │
│         ↑ Receives sensory input   ↓ Sends motor commands          │
├─────────────────────────────────────────────────────────────────────┤
│                   SOMATIC (BODY) - Voluntary Action                 │
│         Red Phase • Green Phase • Blue Phase • Code • Debug        │
│              ↑ Tool results   ↓ Tool invocations                   │
├─────────────────────────────────────────────────────────────────────┤
│                AUTONOMIC (SUBCONSCIOUS) - Background                │
│              Memory • Synch MCP • Index Foundry MCP                 │
│           State persistence, retrieval, agent coordination         │
├─────────────────────────────────────────────────────────────────────┤
│                   REFLEX (SPINAL CORD) - Immediate                  │
│                Trace MCP • Schema Validation • Contracts            │
│              Rejects bad inputs before cognition                    │
└─────────────────────────────────────────────────────────────────────┘
```

---

## OODA Loop

All work follows **Observe → Orient → Decide → Act**:

### Observe 👁️
- Read the task/issue completely
- Scan relevant files and dependencies
- Note current test status and coverage
- Check for existing patterns in codebase

### Orient 🧭
- Map what exists vs what's needed
- Identify risks, constraints, unknowns
- Decompose into atomic subtasks
- Consider impact on other components

### Decide 🎯
- Choose approach with lowest risk
- Define scope boundaries (in/out)
- Set acceptance criteria
- Identify which mode should execute

### Act ⚡
- Execute one subtask at a time
- Use one tool per message
- Validate before proceeding to next task
- Return structured boomerang payload

---

## TDD Cycle

The nervous system enforces test-driven development:

```
🔴 RED    →  Write failing tests that define expected behavior
              (tests/ only, verify tests actually fail)
              
🟢 GREEN  →  Write MINIMAL code to pass tests
              (src/ only, no extra features)
              
🔵 BLUE   →  Refactor while keeping tests green
              (both directories, run tests after each change)
```

### When to Use Each Phase

| Scenario | Cycle |
|----------|-------|
| New feature | Red → Green → Blue |
| Bug fix | Reproduce → Red (regression test) → Green → Blue |
| Refactor | Blue only (tests must stay green) |
| Performance | Red (benchmark tests) → Green → Blue |

---

## Scope Discipline

### Workspace Isolation

Every task has boundaries:
```json
{
  "workspace_path": "src/auth/",
  "file_patterns": ["*.ts", "!*.test.ts"]
}
```

### Rules

- **Stay within assigned files/directories**
- Do not modify unrelated code
- Escalate when requirements are ambiguous
- Reference mode definitions in `custom_modes.yaml`

### Parallel Safety

Tasks can run in parallel ONLY when:
- `workspace_path` values don't overlap, OR
- `file_patterns` are explicitly disjoint

When in doubt, serialize.

---

## Task Completion

### Boomerang Protocol

Every completed task returns structured data:

```json
{
  "type": "task-completed",
  "task_id": "auth-impl-001",
  "from": "green-phase",
  "to": "orchestrator",
  "status": "success",
  "files_changed": [
    "src/auth/jwt.ts",
    "src/auth/index.ts"
  ],
  "tests_run": ["npm test -- auth"],
  "summary": "Implemented JWT validation - 5 tests passing",
  "notes": "Used jsonwebtoken library, added to package.json"
}
```

### Escalation

When blocked:
```json
{
  "type": "escalation",
  "task_id": "auth-impl-001",
  "from": "green-phase",
  "status": "blocked",
  "summary": "Missing JWT_SECRET environment variable",
  "notes": "Options: 1) Add to .env, 2) Use placeholder for dev"
}
```

---

## Code Standards

### Minimal Changes
- Surgical changes over rewrites
- Prefer extending existing patterns
- One concept per commit/change

### Quality Gates
- Tests proportionate to change complexity
- Update docs when changing behavior
- Follow existing linting/formatting rules

### Naming
- Clear, descriptive identifiers
- Match existing conventions in codebase
- Tests: "should [expected] when [condition]"

---

## Mode Reference

| Mode | Layer | Purpose |
|------|-------|---------|
| 🔄 Orchestrator | Central | Coordinate modes, manage task maps |
| 🏛️ Architect | Central | System design, ADRs, contracts |
| 📋 Planner | Central | Task maps, backlogs, dependencies |
| 🔴 Red Phase | Somatic | Write failing tests |
| 🟢 Green Phase | Somatic | Minimal implementation |
| 🔵 Blue Phase | Somatic | Refactor with green tests |
| 💻 Code | Somatic | Complex implementation |
| 🐛 Debug | Somatic | Root cause analysis |
| ❓ Ask | Central | Clarification, research |
| 📁 Memory | Autonomic | Documentation, knowledge |
| 🔎 Deep Research | Autonomic | Investigation, analysis |
| 🔬 Deep Scope | Central | Issue scoping |
| 🗄️ Index Foundry | Autonomic | RAG pipelines |
| 📝 Markdown Transcriber | Autonomic | Document formatting |

---

## Quick Reference

```
OBSERVE  →  What's the current state?
ORIENT   →  What needs to change?
DECIDE   →  How to change it safely?
ACT      →  Execute one step, validate, repeat

TDD:     Red → Green → Blue
SCOPE:   Stay within assigned boundaries
RETURN:  Structured boomerang payload
```

---

## Tool Tiers

Extend with appendices from `templates/tools/`:

| Tier | Components | Capability |
|------|------------|------------|
| 0 | This file + baseline | Toolless coordination |
| 1 | Native tools | File I/O, commands, search |
| 2 | OODA MCP | Computer automation (62 tools) |
| 3 | Synch + Index Foundry | Memory + RAG |
| 4 | Trace MCP | Schema validation |

Each tier adds nervous system capabilities while preserving core contracts.

---

## Learn More

- **Website**: [mnehmos.github.io/mnehmos.multi-agent.framework](https://mnehmos.github.io/mnehmos.multi-agent.framework)
- **GitHub**: [github.com/Mnehmos/mnehmos.multi-agent.framework](https://github.com/Mnehmos/mnehmos.multi-agent.framework)
- **Tools**: See `templates/tools/` for MCP integration guides
