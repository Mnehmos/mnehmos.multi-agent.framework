---
description: Analyze and optimize current workflows with efficiency recommendations
argument-hint: <analysis_type> [options]
category: framework
permissions: [read, edit, command]
sparc-alignment: [specification]
implementation: [workflow-optimization]
---

# Workflow Command

Analyze and optimize current workflows with comprehensive efficiency recommendations.

## **Command Options**

### **Analysis Specification**
- `analysis_type` - Type of workflow analysis (default: efficiency)
- `--workflows=[list]` - Specific workflows to analyze (default: all)
- `--agents=[list]` - Specific agents to analyze (default: all)
- `--metrics=[yes|no]` - Include performance metrics (default: yes)

### **Optimization Configuration**
- `--bottlenecks=[yes|no]` - Identify bottlenecks (default: yes)
- `--automate=[yes|no]` - Suggest automation opportunities (default: yes)
- `--integrate=[yes|no]` - Integration recommendations (default: yes)

### **Output Configuration**
- `--format=[markdown|json|report]` - Output format (default: markdown)
- `--visualizations=[yes|no]` - Include workflow charts (default: no)
- `--recommendations=[yes|no]` - Provide improvement suggestions (default: yes)

## **Workflow Analysis**

### **🔄 Development Workflows**
```markdown
## Development Workflow Analysis

### Current Process
- **Code Development**: [From idea to deployment]
- **Testing Process**: [Unit tests, integration tests, QA]
- **Deployment Process**: [Build, staging, production release]
- **Code Review Process**: [PR creation, review, merge]

### Efficiency Metrics
- **Cycle Time**: [Average time from idea to production]
- **Throughput**: [Features delivered per time period]
- **Quality Metrics**: [Bug rate, test coverage, code review time]
- **Resource Utilization**: [Team capacity and tool efficiency]
```

### **🔍 Bottleneck Identification**
```markdown
## Bottleneck Analysis

### Process Bottlenecks
- **Code Review Delays**: [Waiting for reviews]
- **Testing Bottlenecks**: [Limited test environments]
- **Deployment Delays**: [Manual deployment processes]
- **Communication Delays**: [Slow approval cycles]

### Tool Bottlenecks
- **Build Performance**: [Slow compilation and packaging]
- **Testing Infrastructure**: [Limited parallel test execution]
- **Development Environment**: [IDE performance, resource constraints]
```

### **🎯 Optimization Opportunities**
```markdown
## Workflow Optimization Recommendations

### Process Improvements
- **Automated Testing**: [CI/CD integration]
- **Parallel Processing**: [Concurrent task execution]
- **Streamlined Reviews**: [Automated code review and PR management]
- **Continuous Deployment**: [Automated release pipelines]

### Tool Optimizations
- **Build Acceleration**: [Incremental builds and caching]
- **Test Parallelization**: [Distributed test execution]
- **Environment Optimization**: [Containerized development environments]
- **Communication Efficiency**: [Integrated notification and collaboration tools]
```

## **Usage Examples**

```bash
# Comprehensive workflow analysis
/workflow --analysis-type=efficiency --workflows=development,testing,deployment --metrics=yes

# Development workflow optimization
/workflow --workflows=development --bottlenecks=yes --automate=yes --recommendations=yes

# Testing workflow analysis
/workflow --workflows=testing --analysis-type=efficiency --visualizations=yes

# Cross-agent workflow analysis
/workflow --agents=orchestrator,builder,debug --analysis-type=efficiency --integrate=yes
```

## **Integration Features**

### **🔄 Multi-Agent Coordination**
- Workflow analysis across all agent modes
- Bottleneck detection and resolution
- Automation opportunity identification
- Cross-agent dependency management

### **📊 Performance Monitoring**
- Real-time workflow efficiency tracking
- Historical performance trend analysis
- Resource utilization optimization
- Automated alerting for workflow degradation

### **🔧 Workflow Automation**
- Automated workflow optimization suggestions
- Integration with CI/CD pipelines
- Template-based workflow creation
- Performance-based workflow tuning

This command enables comprehensive workflow analysis and optimization with multi-agent coordination and performance monitoring capabilities.