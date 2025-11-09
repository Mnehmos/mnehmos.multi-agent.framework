---
description: Delegate tasks to appropriate specialist agents with structured prompts
argument-hint: <task_id> <agent> [options]
category: project-management
permissions: [read, edit, command, mcp]
sparc-alignment: [specification]
implementation: [boomerang-task-delegation, instructed-prompting, template-prompting]
---

# Task Assignment Command

Delegate tasks to appropriate specialist agents using structured prompts and boomerang pattern coordination.

## **Command Options**

### **Task Specification**
- `task_id` - Unique identifier for the task to assign
- `agent` - Target agent mode (orchestrator, architect, builder, debug, etc.)
- `--priority=[low|medium|high|critical]` - Task priority level (default: medium)
- `--deadline=[date]` - Task deadline (format: YYYY-MM-DD)
- `--review=[yes|no]` - Include code review step (default: yes)

### **Assignment Configuration**
- `--context=[project]` - Context for task assignment (default: current)
- `--dependencies=[list]` - Task dependencies (task_ids)
- `--resources=[list]` - Required resources (tools, access, etc.)
- `--checkpoint=[yes|no]` - Human review checkpoints (default: yes)

### **Output Configuration**
- `--format=[markdown|json|yaml]` - Output format (default: markdown)
- `--notify=[yes|no]` - Send assignment notifications (default: yes)
- `--track=[yes|no]` - Enable progress tracking (default: yes)

## **Agent Capabilities Mapping**

### **🔄 Orchestrator**
- **Best For**: Project coordination, task management, workflow optimization
- **Skills**: SPARC methodology, boomerang patterns, resource allocation
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

### **🔍 Deep Research**
- **Best For**: Comprehensive investigation, competitive analysis, market research
- **Skills**: Deep analysis, multi-source synthesis, trend identification
- **Limitations**: Time-intensive, requires clear scope

## **SPARC Implementation**

### **Specification Phase**
- Define task requirements and success criteria
- Identify appropriate agent based on task nature
- Establish timeline and resource requirements
- Document constraints and assumptions

### **Pseudocode Phase**
- Generate structured prompt for target agent
- Plan task execution approach and methodology
- Define validation criteria and checkpoints
- Specify expected deliverables and outputs

### **Refinement Phase**
- Validate agent-task compatibility
- Refine prompt based on agent capabilities
- Plan boomerang return coordination
- Establish communication protocols

### **Completion Phase**
- Execute task delegation with structured prompt
- Track assignment status and progress
- Validate agent response and deliverables
- Update project state and documentation

## **Assignment Templates**

### **Development Task Template**
```markdown
# Task Assignment: [TASK_ID]

## Task Specification
- **Type**: [Development/Architecture/Research/etc.]
- **Priority**: [Priority Level]
- **Deadline**: [Due Date]
- **Assigned Agent**: [Agent Mode]

## Requirements
- **Functional Requirements**: [What must be implemented]
- **Technical Requirements**: [How it should be implemented]
- **Quality Requirements**: [Performance, security, maintainability]

## Deliverables
- **Primary Deliverable**: [Main expected output]
- **Secondary Deliverables**: [Additional outputs]
- **Documentation**: [Required documentation]
- **Testing**: [Test requirements and coverage]

## Success Criteria
- [ ] Requirement 1: [Specific, measurable criterion]
- [ ] Requirement 2: [Specific, measurable criterion]
- [ ] Requirement 3: [Specific, measurable criterion]
```

### **Research Task Template**
```markdown
# Research Assignment: [TASK_ID]

## Research Scope
- **Topic**: [Research subject]
- **Depth**: [Basic/Comprehensive/Deep]
- **Sources**: [Required source types]
- **Perspectives**: [Analysis viewpoints]

## Research Questions
- **Primary Question**: [Main research objective]
- **Secondary Questions**: [Additional investigation areas]
- **Constraints**: [Limitations and boundaries]

## Expected Outputs
- **Analysis Report**: [Comprehensive findings document]
- **Recommendations**: [Actionable insights]
- **Sources**: [Cited references and links]
- **Risk Assessment**: [Potential issues and mitigations]
```

## **Usage Examples**

```bash
# Assign development task to builder
/assign TASK-001 builder --priority=high --deadline=2024-12-15

# Assign architecture task to architect
/assign TASK-002 architect --context=new-project --review=yes

# Assign research task to deep-research agent
/assign TASK-003 deep-research-agent --priority=medium --checkpoint=yes

# Assign debugging task with dependencies
/assign TASK-004 debug --dependencies=TASK-001,TASK-002 --resources=access-to-logs

# Complex assignment with full configuration
/assign TASK-005 builder --priority=critical --deadline=2024-11-30 --context=production --review=yes --track=yes
```

## **Boomerang Coordination**

### **Task Assignment Flow**
1. **Validation**: Verify task requirements and agent compatibility
2. **Prompt Generation**: Create structured prompt using templates
3. **Delegation**: Execute boomerang task delegation
4. **Tracking**: Monitor assignment status and progress
5. **Validation**: Review agent response and deliverables
6. **Integration**: Update project state and documentation

### **Return Coordination**
- **Expected Return**: Structured task completion with deliverables
- **Validation Criteria**: Meeting all specified requirements
- **Quality Gates**: Code review, testing, documentation
- **Next Steps**: Integration with dependent tasks

This command enables efficient task delegation across the multi-agent framework while maintaining clear accountability and structured coordination.