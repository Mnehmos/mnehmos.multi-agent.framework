---
description: Switch between specialized AI agent modes
argument-hint: <mode_name> [options]
category: framework
permissions: [read, edit, command]
sparc-alignment: [specification]
implementation: [agent-configuration-management]
---

# Mode Command

Switch between specialized AI agent modes with context preservation and configuration management.

## **Command Options**

### **Mode Specification**
- `mode_name` - Target agent mode (orchestrator, architect, builder, etc.)
- `--context=[project]` - Context for mode switch (default: current)
- `--persist=[yes|no]` - Save mode preference (default: yes)
- `--reset=[yes|no]` - Reset mode state (default: no)

### **Transition Configuration**
- `--preserve=[yes|no]` - Preserve current context (default: yes)
- `--transfer=[yes|no]` - Transfer relevant data (default: yes)
- `--validate=[yes|no]` - Validate mode capabilities (default: yes)

## **Available Modes**

### **🔄 Core Modes**
- **Orchestrator**: Project coordination and task management
- **Architect**: System design and architecture documentation
- **Builder**: Code implementation and testing
- **Debug**: Problem diagnosis and solution validation
- **Ask**: Information retrieval and communication

### **🔍 Specialist Modes**
- **Deep Research**: Comprehensive investigation and competitive analysis
- **Deep Scope**: Detailed GitHub issue analysis
- **Guardian**: Infrastructure management and CI/CD
- **Memory**: Knowledge storage and organization
- **Planner**: Product features and backlog management

### **🎨 Contributor-Inspired Modes**
- **Foresight Architect**: Long-range planning and risk assessment
- **Documenter**: Meticulous documentation and commit messages
- **Builder (Chris Estreich)**: Focused implementation specialist
- **Builder (Matt Rubens)**: Rapid development specialist
- **Refactorer (Daniel)**: Code quality and performance improvement
- **Community Manager (Hannes)**: Community outreach and user-facing docs

## **Mode Capabilities**

### **🔄 Orchestrator**
- **Best For**: Project coordination, workflow optimization, resource allocation
- **Skills**: SPARC methodology, boomerang patterns, strategic planning
- **Limitations**: Cannot implement code directly

### **🏛️ Architect**
- **Best For**: System design, architecture documentation, pattern application
- **Skills**: System architecture, component design, technical specifications
- **Limitations**: Requires builder for implementation

### **⚒️ Builder**
- **Best For**: Code implementation, testing, deployment, bug fixes
- **Skills**: Programming, testing, CI/CD, performance optimization
- **Limitations**: Requires architect for complex designs

### **🐛 Debug**
- **Best For**: Problem diagnosis, performance analysis, issue resolution
- **Skills**: Systematic debugging, root cause analysis, solution validation
- **Limitations**: Focus on existing issues, not new features

### **❓ Ask**
- **Best For**: Information gathering, research, documentation
- **Skills**: Research synthesis, competitive analysis, knowledge integration
- **Limitations**: Cannot implement solutions directly

## **Mode Transition Process**

### **🔄 Transition Workflow**
```markdown
## Mode Transition: [FROM] → [TO]

### Pre-Transition Validation
- **Mode Availability**: [Target mode capabilities]
- **Context Compatibility**: [Data transfer requirements]
- **Permission Validation**: [Access rights verification]
- **Dependency Check**: [Required resources and integrations]

### Transition Execution
- **Context Preservation**: [State and data management]
- **Configuration Update**: [Mode-specific settings]
- **Capability Transfer**: [Relevant data and workflows]
- **Validation Testing**: [Post-transition functionality]

### Post-Transition Validation
- **Mode Functionality**: [Capability verification]
- **Context Integrity**: [Data preservation check]
- **Performance Assessment**: [Efficiency and effectiveness]
```

## **Usage Examples**

```bash
# Switch to architect mode
/mode architect --context=new-project --preserve=yes --persist=yes

# Switch to debug mode with context transfer
/mode debug --context=current-project --transfer=yes --validate=yes

# Quick mode switch with reset
/mode builder --reset=yes --persist=no

# Switch to specialist mode with validation
/mode deep-research --context=investigation --validate=yes --preserve=yes
```

## **Configuration Management**

### **🔧 Mode Settings**
```markdown
## Mode Configuration: [MODE_NAME]

### Default Settings
- **Response Style**: [Formal/Concise/Creative]
- **Tool Preferences**: [Preferred development tools]
- **Output Format**: [Markdown/JSON/YAML]
- **Interaction Mode**: [Interactive/Batch]

### Custom Settings
- **Specialized Prompts**: [Mode-specific instruction sets]
- **Workflow Integration**: [Connected tools and processes]
- **Resource Allocation**: [CPU and memory limits]
```

## **Integration Features**

### **Multi-Agent Coordination**
- Seamless context preservation across mode transitions
- Boomerang task delegation with mode-specific agents
- Unified state management and tracking
- Cross-mode workflow orchestration

### **Configuration Persistence**
- Mode preference saving and loading
- Context-aware configuration management
- Environment-specific mode settings
- User preference learning and adaptation

### **Workflow Integration**
- Mode-specific tool integration
- Automated workflow adaptation
- Cross-mode task handoff and return
- Performance optimization for mode switching

This command enables seamless switching between specialized AI agent modes while maintaining context integrity and optimizing workflow efficiency.