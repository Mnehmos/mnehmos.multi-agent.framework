# Advanced Multi-Agent AI Framework

A structured, production-ready multi-agent framework for coordinating specialized AI modes using clear contracts, one-tool-per-message execution, and traceable task flows.

- Supports multi-mode agent teams (Orchestrator, Architect, Planner, Code, Debug, etc.)
- Enforces scoped edits, deterministic workflows, and boomerang-style task returns
- Works across any compatible AI runtime or platform (not tied to a single vendor)
- Ships with reusable templates for modes, instructions, and slash-commands

**🔗 Quick Links:** [`templates/`](templates/) · [`meet-the-team/`](meet-the-team/) · [`slash-commands/`](slash-commands/) · [`AGENTS.md`](AGENTS.md) *(if present)*

## 🎯 What This Framework Delivers

**Professional AI Team Management** - Deploy specialized AI agents with enterprise-grade coordination, advanced prompt engineering, and systematic workflow automation for superior development outcomes.

### Key Benefits

- **Structured multi-agent coordination** using clear Orchestrator / Worker / Reviewer roles
- **Boomerang-style task returns** for traceable, auditable workflows
- **Token-aware, minimal-diff editing** patterns for safe automated changes
- **Production-oriented architecture** with explicit scopes, contracts, and documentation
- **Extensible templates** for modes, instructions, and slash-commands without locking into specific tools

## 🚀 Quick Start

### Prerequisites

Use with any agentic runtime that supports:

- Multiple modes / roles (e.g., Orchestrator, Planner, Code, Debug)
- One-tool-per-message execution
- Custom/system instructions per mode
- File-scoped, deterministic edits

Examples (non-exclusive):

- Roo / Responses-style runtimes
- Kilo Code
- Other IDE or API-based agents with similar capabilities

### 1. Clone this repository

```bash
git clone https://github.com/Mnehmos/Advanced-Multi-Agent-AI-Framework.git
cd Advanced-Multi-Agent-AI-Framework
```

### 2. Review core contracts

- Global instructions and mode contracts (see [`AGENTS.md`](AGENTS.md) if present)
- Mode templates in [`templates/custom_modes.yaml`](templates/custom_modes.yaml)
- Shared instructions in [`templates/custom-instructions-for-all-modes.md`](templates/custom-instructions-for-all-modes.md)
- Slash command designs in [`slash-commands/`](slash-commands/)

### 3. Configure your assistant / runtime

Use the sections below ("How to use this as a GitHub Template" and "Compatibility / Requirements") to wire these files into your environment and start orchestrating work via the Orchestrator/Worker/Reviewer pattern.

## 📦 How to use this as a GitHub Template

Use this repository as a starting point for your own multi-agent setup:

1. In GitHub, click "Use this template" on the repository page.
2. Create your new repository from this template.
3. In your new repo, keep the structure of:
   - [`templates/custom_modes.yaml`](templates/custom_modes.yaml)
   - [`templates/custom-instructions-for-all-modes.md`](templates/custom-instructions-for-all-modes.md)
   - [`templates/enhance-prompt-template.md`](templates/enhance-prompt-template.md)
   - [`slash-commands/`](slash-commands/)
   - [`meet-the-team/`](meet-the-team/)
   - [`AGENTS.md`](AGENTS.md) *(if present)* to house global contracts.
4. In your chosen AI platform or runtime:
   - Load the "custom instructions for all modes" into the global/system instructions.
   - Load or adapt `custom_modes.yaml` into the platform's mode/multi-agent configuration.
   - Optionally register slash-commands based on [`slash-commands/`](slash-commands/) to standardize workflows.
5. Start runs with an Orchestrator-style mode that:
   - Decomposes work into subtasks,
   - Assigns Workers with scoped file patterns,
   - Routes results through a Reviewer when needed.

This keeps the framework portable while preserving the core coordination patterns.

## 🧩 Compatibility / Requirements

This framework is designed to be environment-agnostic. Any runtime is compatible if it supports:

- One-tool-per-message or equivalent atomic tool execution
- Multiple modes / roles with distinct instructions
- Ability to enforce:
  - Workspace paths and file pattern scopes
  - Deterministic, inspectable steps
- Support for structured, JSON-like "boomerang" task return payloads

Examples:

- Roo-style / Responses-style orchestrated environments
- Kilo Code (using custom modes and project/global instructions)
- Custom in-house agentic runtimes wired to follow the same contracts

## 🏛️ Framework Architecture

### Core Coordination Layer
| Mode | Specialization | Advanced Techniques |
|------|----------------|-------------------|
| **🔄 Orchestrator** | Project Management & Task Delegation | `workflow-template-prompting`, `boomerang-task-delegation` |
| **🏗️ Architect** | System Design & Architecture | `visual-documentation-generation`, `tree-of-thoughts` |
| **📅 Planner** | Product Planning & Requirements | `user-story-prompting`, `stakeholder-perspective-analysis` |

### Implementation Team
| Mode | Specialization | Advanced Techniques |
|------|----------------|-------------------|
| **⚒️ Builder** | Software Development & Testing | `code-generation-agents`, `test-based-iterative-flow` |
| **💻 Code** | Advanced Coding & Optimization | 'modular-code-generation`, `(https://github.com/chonghin33/lcm-1.13-whitepaper)' 'language-construct-modeling` |
| **🔒 Guardian** | Infrastructure & CI/CD | `automated-development-workflows`, `semantic-guardrails` |

### Research & Analysis Team
| Mode | Specialization | Advanced Techniques |
|------|----------------|-------------------|
| **❓ Ask** | Information Discovery | `rag`, `iterative-retrieval-augmentation` |
| **🔎 Deep Research** | Comprehensive Analysis | `multi-perspective-analysis`, `systematic-literature-review` |
| **🔬 Deep Scope** | Issue Analysis & Scoping | `codebase-impact-mapping`, `hypothetical-scenario-modeling` |

### Support Specialists
| Mode | Specialization | Advanced Techniques |
|------|----------------|-------------------|
| **🐛 Debug** | Technical Diagnostics | `five-whys-prompting`, `chain-of-verification` |
| **📁 Memory** | Knowledge Management | `semantic-clustering`, `knowledge-graph-construction` |

## 🎯 Use Cases & Applications

### **Enterprise Software Development**
- Structured multi-agent assistance for large codebases
- Automated, scope-safe refactors and reviews
- Task-mapped execution with clear success criteria

### **AI / LLM Products**
- Multi-mode assistants (Ask, Plan, Code, Debug) behind a single interface
- Repeatable workflows via shared slash-commands
- Auditable changes for safety and compliance

### **Internal Tooling & Ops**
- CI/CD-aligned agent workflows
- Documentation and knowledge base automation
- Safe infrastructure and config updates via scoped Workers

## 🔄 The SPARC + Boomerang Methodology

### SPARC Framework Integration
**S**pecification → **P**seudocode → **A**rchitecture → **R**efinement → **C**ompletion

### Boomerang Task Delegation

1. **Task Creation** - Orchestrator generates structured tasks from project requirements
2. **Specialist Assignment** - Tasks delegated to the most appropriate mode/agent
3. **Scoped Execution** - Workers operate only within assigned workspace paths and file patterns
4. **Quality Integration** - Results are validated (optionally via Reviewer) and merged back
5. **Iterative Improvement** - Feedback loops refine instructions, scopes, and contracts

## 📊 Performance & Optimization Features

### **Token Efficiency**
- Context window utilization kept below 40%
- Cognitive primitive optimization (start small, scale up)
- Specialized mode selection for minimal resource usage
- "Scalpel, not Hammer" resource management philosophy

### **Quality Assurance**
- Structured task validation and success criteria
- Cross-mode verification and error checking
- Comprehensive documentation and traceability
- Automated workflow optimization

### **Scalability**
- Modular architecture supporting team expansion
- Customizable prompt engineering technique integration
- Enterprise workflow pattern implementation
- Professional project management capabilities

## 📚 Advanced Documentation

### **Framework Configuration**
- [🛠️ Custom Instructions Guide](templates/custom-instructions-for-all-modes.md)
- [⚙️ Custom Modes Configuration](templates/custom_modes.yaml)
- [✨ Enhance Prompt Documentation](templates/enhance-prompt-template.md)

### **Team Member Profiles**
Detailed documentation for each AI specialist:
- [Meet the AI Team →](meet-the-team/)

### **Task Management**
```markdown
# Project: Advanced AI System Development

## Phase 1: Architecture Planning
- [ ] **Task 1.1**: System design and architecture planning
  - **Agent**: Architect
  - **Dependencies**: None
  - **Outputs**: [architecture_diagram.md, technical_specifications.md]
  - **Validation**: Architecture review completed with stakeholder approval
  - **Human Checkpoint**: YES
  - **Scope**: Complete system architecture design using visual-documentation-generation and tree-of-thoughts techniques
```

## 🛡️ Enterprise Features

### **Security & Compliance**
- Structured documentation for audit trails
- Role-based task assignment and validation
- Quality gates and automated verification
- Professional workflow management

### **Integration Capabilities**
- GitHub integration for issue and PR management
- CI/CD pipeline automation
- Knowledge management system integration
- Custom prompt engineering technique deployment

### **Support & Maintenance**
- Comprehensive error handling and debugging
- Performance monitoring and optimization
- Documentation generation and maintenance
- Continuous improvement through feedback integration

## 🤝 Community & Contributions

- ⭐ Star this repository if you find the framework useful.
- 🛠️ Open issues or pull requests to refine contracts, docs, or examples.
- 🔗 Downstream users: keep this README neutral and add platform-specific details in your own overlays.

## 📈 Roadmap & Future Development

- Additional mode templates and role contracts
- More end-to-end examples for different runtimes
- Extended slash-command libraries for common workflows

## 📄 License & Attribution

**MIT License** - Open source framework for professional and commercial use.

### **Acknowledgments**
- SPARC Framework development community
- Multi-agent AI research contributors
- Kilo Code platform development team
- Advanced prompt engineering research community
- Framework users providing feedback and improvements
- Vincent Shing Hin Chong for their work into Language Construct Modeling | https://osf.io/q6cyp/
- 20+ research papers sources listed here: https://mnehmos.github.io/Prompt-Engineering/sources.html
---

## 🎯 Summary

This repository provides a template-friendly, platform-agnostic entrypoint for:

- Defining clear multi-agent roles and contracts
- Running deterministic, auditable, one-tool-per-message workflows
- Using reusable templates for modes, shared instructions, and slash-commands

Start from this template, connect it to your preferred agent runtime, and coordinate complex work through the Orchestrator/Worker/Reviewer pattern with scoped, reviewable changes.

[`README.md`](README.md)
