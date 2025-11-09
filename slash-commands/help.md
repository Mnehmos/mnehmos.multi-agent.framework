---
description: Context-aware help system with intelligent command discovery
argument-hint: [query] [options]
category: utility
permissions: [read]
sparc-alignment: [completion]
implementation: [state-management, traceability-documentation]
---

# Help Command

Provide context-aware help with intelligent command discovery and comprehensive documentation.

## **Command Options**

### **Help Specification**
- `query` - Search query or topic (optional, shows all commands if not provided)
- `--category=[list]` - Filter by command category (default: all)
- `--agent=[name]` - Show agent-specific commands (default: current)
- `--examples=[yes|no]` - Include usage examples (default: yes)
- `--format=[markdown|json]` - Output format (default: markdown)

### **Display Configuration**
- `--verbose=[yes|no]` - Detailed output (default: no)
- `--aliases=[yes|no]` - Show command aliases (default: yes)
- `--syntax=[yes|no]` - Include syntax help (default: yes)

## **Command Categories**

### **🎯 Project Management**
- **Planning**: `/plan` - Generate comprehensive project task maps
- **Scoping**: `/scope` - Deep analysis of GitHub issues
- **Assignment**: `/assign` - Delegate tasks to specialist agents
- **Status**: `/status` - Show current project state and progress

### **🏗️ Architecture**
- **Design**: `/design` - Generate system architecture documents
- **Diagrams**: `/diagram` - Create visual documentation
- **Patterns**: `/pattern` - Apply design patterns analysis
- **Validation**: `/validate` - Architecture validation and review

### **⚒️ Development**
- **Build**: `/build` - Execute build and deployment workflows
- **Refactor**: `/refactor` - Code quality improvement
- **Optimize**: `/optimize` - Performance optimization
- **Debug**: `/debug` - Systematic debugging workflow

### **🔍 Research**
- **Research**: `/research` - Comprehensive research synthesis
- **Analysis**: `/analyze` - Multi-perspective analysis
- **Compare**: `/compare` - Competitive analysis
- **Synthesis**: `/synthesis` - Knowledge integration

### **📊 Framework**
- **Mode**: `/mode` - Switch between specialized AI agent modes
- **Config**: `/config` - Framework configuration management
- **Template**: `/template` - Generate prompt templates
- **Workflow**: `/workflow` - Workflow optimization
- **Help**: `/help` - Context-aware help system

### **🛠️ Utility**
- **Docs**: `/docs` - Quick documentation access
- **Logs**: `/logs` - Activity log viewing
- **Export**: `/export` - Data export and backup

## **Intelligent Help Features**

### **🔍 Context-Aware Discovery**
```markdown
## Intelligent Command Discovery

### Current Context Analysis
- **Active Mode**: [Current agent mode]
- **Recent Commands**: [Last 5 executed commands]
- **Project State**: [Current project and task status]
- **Available Tools**: [Accessible integrations and capabilities]

### Personalized Recommendations
- **Relevant Commands**: [Based on workflow and context]
- **Learning Suggestions**: [Feature discovery and optimization]
- **Efficiency Tips**: [Workflow improvement recommendations]
```

### **📚 Comprehensive Documentation**
```markdown
## Command Documentation

### [Command Name]
- **Description**: [Purpose and functionality]
- **Usage**: [Syntax and examples]
- **Options**: [Available parameters and effects]
- **Integration**: [Related commands and workflows]

### Agent-Specific Help
- **Mode Capabilities**: [Agent-specific command sets]
- **Best Practices**: [Optimal usage patterns]
- **Troubleshooting**: [Common issues and solutions]
```

## **Usage Examples**

```bash
# Show all available commands
/help

# Get help for specific command
/help plan --examples=yes

# Agent-specific help
/help --agent=architect --verbose=yes

# Category-specific help
/help --category=development --examples=yes

# Search for specific functionality
/help "code review" --examples=yes

# Verbose help with all details
/help --verbose --aliases=yes --syntax=yes
```

## **Integration Features**

### **🔄 Multi-Agent Coordination**
- Context preservation across help sessions
- Mode-aware command recommendations
- Workflow integration and optimization suggestions
- Learning from user interaction patterns

### **📚 Knowledge Base**
- Dynamic help content based on framework state
- Searchable command documentation with examples
- Integration with troubleshooting and FAQ systems

### **🔧 Customization**
- User preference learning and adaptation
- Custom help topics and responses
- Integration with user documentation and knowledge bases

This command provides intelligent, context-aware help that adapts to user needs and framework state for optimal assistance.