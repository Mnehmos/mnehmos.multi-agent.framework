---
description: Generate prompt templates for consistent agent communication
argument-hint: <template_type> [options]
category: framework
permissions: [read, edit, command]
sparc-alignment: [specification]
implementation: [template-prompting]
---

# Template Command

Generate structured prompt templates for consistent agent communication and task execution.

## **Command Options**

### **Template Specification**
- `template_type` - Type of template to generate
- `--agent=[name]` - Target agent for template (default: current)
- `--context=[project]` - Template context (default: current)
- `--format=[markdown|json]` - Output format (default: markdown)

### **Template Configuration**
- `--variables=[yes|no]` - Include variable placeholders (default: yes)
- `--examples=[yes|no]` - Include usage examples (default: yes)
- `--validation=[yes|no]` - Include validation rules (default: yes)

## **Template Types**

### **🎯 Task Assignment Templates**
- **Development Tasks**: Code implementation and feature development
- **Research Tasks**: Investigation and analysis projects
- **Architecture Tasks**: System design and documentation
- **Testing Tasks**: Quality assurance and validation

### **🔍 Analysis Templates**
- **Code Review**: Security and performance analysis
- **Performance Analysis**: Bottleneck identification and optimization
- **Security Analysis**: Vulnerability assessment and mitigation

### **📊 Reporting Templates**
- **Progress Reports**: Task status and completion tracking
- **Quality Reports**: Code metrics and technical debt
- **Risk Reports**: Issue tracking and mitigation strategies

## **Template Structure**

### **📝 Standard Template Format**
```markdown
# [TEMPLATE_NAME]

## Context
- **Project**: [Current project context]
- **Agent**: [Target agent capabilities]
- **Objective**: [Specific goal or deliverable]
- **Constraints**: [Limitations and requirements]

## Task Specification
- **Type**: [Development/Research/Analysis]
- **Priority**: [High/Medium/Low]
- **Scope**: [Specific deliverables and boundaries]
- **Success Criteria**: [Measurable outcomes]

## Instructions
- **Approach**: [Methodology or process]
- **Requirements**: [Specific needs and expectations]
- **Deliverables**: [Expected outputs and artifacts]
- **Timeline**: [Duration and milestones]

## Variables
- **{{PROJECT_NAME}}**: Current project name
- **{{AGENT_CAPABILITIES}}**: Target agent skills
- **{{CURRENT_DATE}}**: Template generation date
- **{{TASK_ID}}**: Unique task identifier
```

### **🎨 Agent-Specific Templates**
```markdown
# Architect Task Template

## Context
- **Agent**: Architect (System Design, Architecture Documentation)
- **Project**: [Current system context]

## Task Specification
- **Type**: Architecture Design
- **Objective**: Design scalable, maintainable system architecture
- **Requirements**: Follow SOLID principles, integrate with existing components

## Instructions
- **Approach**: Use layered architecture with domain-driven design
- **Deliverables**: Architecture diagrams, design documents, integration specifications
- **Timeline**: 2 weeks for initial design, 1 week for refinement
```

## **Usage Examples**

```bash
# Generate task assignment template
/template task-assignment --agent=architect --context=new-project --examples=yes

# Create analysis template for builder
/template analysis --agent=builder --type=code-review --variables=yes

# Generate research template
/template research --agent=deep-research --context=competitive-analysis --format=json
```

## **Template Library**

### **🔄 Workflow Templates**
- **Project Planning**: Task breakdown and resource allocation
- **Code Development**: Implementation and testing workflows
- **Quality Assurance**: Review and validation procedures

### **🔍 Analysis Templates**
- **SWOT Analysis**: Strengths, weaknesses, opportunities, threats
- **Risk Assessment**: Technical and business risk evaluation
- **Competitive Analysis**: Market positioning and feature comparison

## **Integration Features**

### **Template Management**
- **Template Library**: Organized collection of templates
- **Version Control**: Template versioning and history
- **Customization**: User-defined template modifications
- **Sharing**: Template export and import capabilities

### **Agent Coordination**
- **Dynamic Variables**: Context-aware placeholder replacement
- **Agent-Specific Logic**: Mode-based template variations
- **Validation Rules**: Template structure and content validation
- **Output Formatting**: Consistent markdown and JSON generation

This command enables creation of structured prompt templates that ensure consistent agent communication and task execution across the multi-agent framework.