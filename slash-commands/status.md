---
description: Show current project state and task progress across all agents
argument-hint: [filter] [options]
category: utility
permissions: [read]
sparc-alignment: [completion]
implementation: [state-management, traceability-documentation]
---

# Project Status Command

Display comprehensive project state and task progress with multi-agent coordination tracking.

## **Command Options**

### **Filter Options**
- `filter` - Filter by agent, project, or status type
- `--agent=[name]` - Show status for specific agent (orchestrator, architect, builder, etc.)
- `--project=[name]` - Show status for specific project
- `--status=[active|completed|blocked|pending]` - Filter by task status

### **Display Configuration**
- `--format=[table|json|markdown]` - Output format (default: table)
- `--detail=[summary|detailed|comprehensive]` - Detail level (default: detailed)
- `--timeline=[days|weeks]` - Time range for status display (default: weeks)
- `--sort=[priority|deadline|agent]` - Sort criteria (default: priority)

### **Advanced Options**
- `--milestones=[yes|no]` - Include milestone tracking (default: yes)
- `--resources=[yes|no]` - Show resource allocation (default: yes)
- `--risks=[yes|no]` - Include risk assessment (default: yes)
- `--dependencies=[yes|no]` - Show task dependencies (default: yes)

## **Status Categories**

### **🔄 Overall Project Health**
- **Completion Rate**: Percentage of completed vs. total tasks
- **Timeline Adherence**: On-time vs. delayed task completion
- **Resource Utilization**: Agent workload and availability
- **Risk Level**: Current project risk assessment

### **👥 Agent Status Matrix**
```markdown
| Agent | Active Tasks | Completed | Blocked | Efficiency | Next Available |
|--------|-------------|----------|---------|------------|----------------|
| Orchestrator | 3 | 12 | 0 | 95% | Today |
| Architect | 2 | 8 | 1 | 88% | Tomorrow |
| Builder | 5 | 15 | 2 | 82% | Today |
| Debug | 1 | 6 | 0 | 91% | Available |
```

### **📊 Task Progress Tracking**
```markdown
## Active Tasks
### TASK-001: API Implementation
- **Agent**: Builder
- **Status**: In Progress
- **Progress**: 65%
- **Deadline**: 2024-12-15
- **Priority**: High
- **Dependencies**: TASK-002 (completed)

### TASK-002: Database Design
- **Agent**: Architect
- **Status**: Completed
- **Progress**: 100%
- **Completed**: 2024-12-10
- **Priority**: High

### TASK-003: Performance Testing
- **Agent**: Debug
- **Status**: Blocked
- **Progress**: 30%
- **Blocker**: Waiting for TASK-001 completion
- **Priority**: Medium
```

### **🎯 Milestone Tracking**
```markdown
## Phase 1: Foundation (Due: 2024-12-15)
- [x] Requirements Analysis
- [x] Architecture Design
- [ ] Core Implementation (75%)
- [ ] Integration Testing
- [ ] Documentation

## Phase 2: Enhancement (Due: 2024-12-30)
- [ ] Performance Optimization
- [ ] Security Review
- [ ] User Testing
- [ ] Deployment Preparation
```

### **⚠️ Risk and Issue Tracking**
```markdown
## Current Risks
- **High**: Builder resource overload (3 tasks queued)
- **Medium**: Architect dependency on external API
- **Low**: Debug agent availability next week

## Blocked Issues
- **TASK-003**: Performance Testing - Blocked by TASK-001
- **TASK-004**: UI Implementation - Blocked by design review
```

## **Usage Examples**

```bash
# Show overall project status
/status

# Filter by specific agent
/status --agent=builder --detail=comprehensive

# Show project-specific status
/status --project=E-commerce --timeline=weeks --sort=deadline

# Filter by task status
/status --status=active --milestones=yes --resources=yes

# Comprehensive status with all details
/status --format=markdown --detail=comprehensive --risks=yes --dependencies=yes

# JSON output for automation
/status --format=json --detail=detailed
```

## **Integration Features**

### **Multi-Agent Coordination**
- Real-time status synchronization across all agents
- Dependency tracking and blocker identification
- Resource allocation optimization
- Workload balancing recommendations

### **State Management**
- Persistent state tracking with `.roo/task-state.json`
- Traceability documentation for all status changes
- Historical progress tracking and trend analysis
- Automated status aggregation from multiple sources

### **Reporting Capabilities**
- Multiple output formats for different use cases
- Configurable detail levels for different audiences
- Sortable and filterable data views
- Export capabilities for external reporting

This command provides complete visibility into project state and multi-agent coordination, enabling effective project management and resource allocation.