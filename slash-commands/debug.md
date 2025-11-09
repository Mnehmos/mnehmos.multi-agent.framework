---
description: Systematic debugging workflow with root cause analysis
argument-hint: <target> [options]
category: development
permissions: [read, edit, command]
sparc-alignment: [refinement]
implementation: [systematic-debugging, root-cause-analysis]
---

# Debug Command

Execute systematic debugging workflows with comprehensive root cause analysis and solution validation.

## **Command Options**

### **Target Specification**
- `target` - Process, component, or system to debug
- `--type=[performance|logic|security|integration]` - Debug type (default: auto-detect)
- `--method=[step-by-step|breakpoint|logging]` - Debug method (default: step-by-step)

### **Debug Configuration**
- `--depth=[quick|standard|comprehensive]` - Analysis depth (default: standard)
- `--trace=[yes|no]` - Enable execution tracing (default: yes)
- `--profile=[yes|no]` - Enable performance profiling (default: yes)
- `--logs=[yes|no]` - Analyze log files (default: yes)

### **Analysis Configuration**
- `--root-cause=[yes|no]` - Root cause analysis (default: yes)
- `--patterns=[yes|no]` - Debug pattern detection (default: yes)
- `--reproduce=[yes|no]` - Issue reproduction steps (default: yes)

### **Output Configuration**
- `--format=[markdown|json|report]` - Output format (default: markdown)
- `--fixes=[yes|no]` - Suggest automatic fixes (default: yes)
- `--test=[yes|no]` - Validate fixes (default: yes)

## **Debug Types**

### **⚡ Performance Debugging**
- **CPU Profiling**: Identify CPU bottlenecks and hotspots
- **Memory Analysis**: Detect memory leaks and allocation issues
- **I/O Analysis**: Analyze file system and network performance
- **Database Profiling**: Identify slow queries and connection issues

### **🧠 Logic Debugging**
- **Variable Tracking**: Monitor variable values and state changes
- **Flow Analysis**: Trace execution paths and decision points
- **Condition Analysis**: Debug conditional logic and edge cases
- **Algorithm Verification**: Validate computational logic and outputs

### **🔒 Security Debugging**
- **Authentication Flow**: Trace login and authorization processes
- **Permission Checks**: Validate access control and role enforcement
- **Data Validation**: Debug input sanitization and validation
- **Encryption Analysis**: Verify data protection and secure transmission

### **🔗 Integration Debugging**
- **API Communication**: Trace service interactions and data flow
- **Database Integration**: Debug data access and transaction handling
- **External Service**: Test third-party integrations and error handling

## **Debugging Workflow**

### **🔍 Issue Reproduction**
```markdown
## Issue Reproduction for [TARGET]

### Environment Setup
- **System Configuration**: [OS, version, dependencies]
- **Test Data**: [Required test inputs and state]
- **Reproduction Steps**: [Step-by-step instructions]

### Execution Analysis
- **Expected Behavior**: [What should happen]
- **Actual Behavior**: [What actually happens]
- **Error Messages**: [Captured error information]
- **Stack Traces**: [Call stack and execution flow]
```

### **🔍 Root Cause Analysis**
```markdown
## Root Cause Analysis for [ISSUE]

### Problem Classification
- **Category**: [Performance/Logic/Security/Integration]
- **Severity**: [Critical/High/Medium/Low]
- **Impact**: [System/User/Data]

### Contributing Factors
- **Code Changes**: [Recent modifications]
- **Environment Changes**: [System updates]
- **External Factors**: [Third-party issues, network]
- **User Actions**: [Recent operations]

### Root Cause Identification
- **Primary Cause**: [Main issue source]
- **Contributing Factors**: [Secondary issues]
- **Evidence**: [Logs, metrics, traces]
- **Confidence Level**: [High/Medium/Low]
```

### **🛠️ Solution Development**
```markdown
## Solution Development for [ISSUE]

### Fix Strategy
- **Approach**: [Hotfix/Refactor/Redesign]
- **Implementation**: [Code changes, configuration updates]
- **Testing**: [Validation procedures]
- **Deployment**: [Release strategy]

### Validation Plan
- **Unit Tests**: [Test cases for fix]
- **Integration Tests**: [End-to-end validation]
- **Performance Tests**: [Benchmarking and regression]
- **Security Tests**: [Vulnerability assessment]
```

## **Debugging Tools**

### **🔧 Static Analysis**
- **Code Review**: Manual inspection and analysis
- **Linting**: Automated code quality checks
- **Security Scanning**: Vulnerability detection and analysis
- **Complexity Analysis**: Code maintainability assessment

### **🔧 Dynamic Analysis**
- **Logging**: Runtime behavior tracking
- **Profiling**: Performance and resource usage monitoring
- **Tracing**: Execution flow and state tracking
- **Monitoring**: Real-time system health observation

### **🔧 Interactive Debugging**
- **Breakpoints**: Code execution pause points
- **Step Execution**: Line-by-line code running
- **Variable Inspection**: Runtime state examination
- **Expression Evaluation**: Formula and condition testing

## **Usage Examples**

```bash
# Comprehensive debugging session
/debug --type=comprehensive --depth=standard --trace=yes --profile=yes --root-cause=yes

# Performance-focused debugging
/debug --type=performance --profile=yes --logs=yes --format=report

# Logic debugging with step-by-step execution
/debug --method=step-by-step --reproduce=yes --patterns=yes

# Security debugging with authentication flow
/debug --type=security --trace=yes --logs=auth --depth=comprehensive

# Integration debugging with API analysis
/debug --type=integration --trace=yes --root-cause=yes --fixes=yes
```

## **Integration Features**

### **Multi-Agent Coordination**
- Coordinate with code review agents for fix validation
- Integrate with performance optimization agents
- Collaborate with security specialists for vulnerability analysis

### **Automated Analysis**
- Pattern-based bug detection
- Automated fix suggestion generation
- Performance bottleneck identification
- Security vulnerability scanning

### **Workflow Integration**
- Debug session tracking and management
- Integration with issue tracking systems
- Knowledge base integration for solutions

This command provides systematic debugging capabilities that combine automated analysis with interactive workflows for comprehensive issue resolution.