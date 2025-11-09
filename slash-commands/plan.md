---
description: Generate comprehensive project task maps with phases, dependencies, and agent assignments
argument-hint: <project_name> [options]
category: project-management
permissions: [read, edit, command, mcp]
sparc-alignment: [specification]
implementation: [workflow-template-prompting, boomerang-task-delegation]
---

# Project Planning Command

Generate comprehensive project task maps using SPARC methodology with multi-agent coordination.

## **Command Options**

### **Project Specification**
- `project_name` - Name of the project to plan
- `--complexity=[low|medium|high]` - Project complexity level (default: medium)
- `--team=[size]` - Team size for resource allocation (default: 3)
- `--timeline=[weeks]` - Project timeline in weeks (default: 8)
- `--checkpoint=[yes|no]` - Include human review checkpoints (default: yes)

### **Planning Configuration**
- `--phases=[number]` - Number of project phases (default: 4)
- `--agents=[list]` - Specific agents to involve (default: orchestrator,architect,builder)
- `--methodology=[agile|waterfall|hybrid]` - Development approach (default: agile)
- `--risk=[low|medium|high]` - Risk assessment level (default: medium)

### **Output Configuration**
- `--format=[markdown|json|yaml]` - Output format (default: markdown)
- `--detail=[summary|detailed|comprehensive]` - Detail level (default: detailed)
- `--github=[yes|no]` - Create GitHub issues (default: yes)
- `--dependencies=[yes|no]` - Include dependency analysis (default: yes)

## **SPARC Implementation**

### **Specification Phase**
- Define project scope and objectives
- Identify stakeholders and requirements
- Establish success criteria and KPIs
- Document constraints and assumptions

### **Architecture Phase**
- Design system architecture and components
- Define data flows and interfaces
- Plan integration points and dependencies
- Specify technology stack and tools

### **Refinement Phase**
- Break down into manageable tasks
- Assign responsibilities to specialist agents
- Establish timelines and milestones
- Plan testing and validation procedures

### **Completion Phase**
- Generate deliverable specifications
- Define acceptance criteria
- Plan deployment and maintenance
- Document lessons learned and improvements

## **Output Structure**

### **Project Overview**
```markdown
# Project: [PROJECT_NAME]

## Executive Summary
- **Objective**: [Clear project goal]
- **Timeline**: [Duration] weeks
- **Team Size**: [Number] agents
- **Complexity**: [Level]
- **Risk Level**: [Assessment]

## Phase 1: [PHASE_NAME]
- [ ] **Task 1.1**: [Task description]
  - **Agent**: [Assigned mode]
  - **Dependencies**: [task_ids or "None"]
  - **Outputs**: [Expected deliverables]
  - **Validation**: [Success criteria]
  - **Human Checkpoint**: [YES/NO]
  - **Scope**: [Detailed scope description]
```

### **Task Assignment Matrix**
- **Orchestrator**: Project coordination and task management
- **Architect**: System design and architecture documentation
- **Builder**: Implementation and testing
- **Specialists**: Domain-specific expertise as needed

### **Dependency Tracking**
- **Sequential Dependencies**: Tasks that must complete in order
- **Parallel Dependencies**: Tasks that can execute simultaneously
- **External Dependencies**: Third-party components or services
- **Resource Dependencies**: Required tools, environments, or access

## **Usage Examples**

```bash
# Basic project planning
/plan "E-commerce Platform" --complexity=high --timeline=12

# Detailed planning with specific agents
/plan "Mobile App" --team=5 --agents=orchestrator,architect,builder,debug --methodology=agile

# Quick planning with GitHub integration
/plan "API Gateway" --complexity=low --github=yes --format=json

# Comprehensive planning with risk assessment
/plan "Data Pipeline" --timeline=16 --risk=high --checkpoint=yes --detail=comprehensive
```

## **Integration Features**

### **Multi-Agent Coordination**
- Automatic task assignment based on agent capabilities
- Boomerang pattern implementation for task delegation
- Context preservation across mode transitions
- Progress tracking and status updates

### **GitHub Integration**
- Automatic issue creation from task map
- Structured commit message generation
- Pull request template management
- Milestone and release tracking

### **Quality Assurance**
- SPARC methodology compliance checking
- Dependency validation and conflict detection
- Resource allocation optimization
- Risk assessment and mitigation planning

This command transforms project ideas into actionable, structured plans that leverage the full capabilities of the Advanced Multi-Agent AI Framework.