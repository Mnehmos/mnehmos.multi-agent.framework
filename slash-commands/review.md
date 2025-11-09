---
description: Simulated code review workflow with multi-perspective analysis
argument-hint: <target> [options]
category: development
permissions: [read, edit, command, mcp]
sparc-alignment: [pseudocode, refinement, completion]
implementation: [multi-perspective-analysis, structured-commit-workflow]
---

# Code Review Command

Execute comprehensive code review using multi-agent perspectives and structured analysis frameworks.

## **Command Options**

### **Target Specification**
- `target` - File, directory, or PR to review
- `--depth=[quick|standard|comprehensive]` - Review depth (default: standard)
- `--focus=[security|performance|style|architecture]` - Review focus area (default: all)
- `--automated=[yes|no]` - Include automated analysis tools (default: yes)

### **Review Configuration**
- `--perspectives=[list]` - Review perspectives (default: security,performance,maintainability)
- `--standards=[list]` - Coding standards to apply (default: project-specific)
- `--severity=[all|high|medium|low]` - Minimum issue severity to report (default: medium)
- `--fixes=[yes|no]` - Suggest automatic fixes (default: yes)

### **Output Configuration**
- `--format=[markdown|json|sarif]` - Output format (default: markdown)
- `--diff=[yes|no]` - Include diff suggestions (default: yes)
- `--metrics=[yes|no]` - Include quality metrics (default: yes)
- `--checklist=[yes|no]` - Generate review checklist (default: yes)

## **Review Perspectives**

### **🔒 Security Review**
- **Authentication & Authorization**: Check access controls and permission validation
- **Input Validation**: Identify injection vulnerabilities and data sanitization
- **Data Protection**: Review encryption, storage, and transmission security
- **Error Handling**: Ensure secure error messages without information leakage

### **⚡ Performance Review**
- **Algorithm Efficiency**: Analyze time complexity and optimization opportunities
- **Memory Usage**: Check for memory leaks and inefficient data structures
- **Database Queries**: Review query optimization and indexing strategies
- **Resource Management**: Assess resource cleanup and connection pooling

### **🎨 Code Style Review**
- **Naming Conventions**: Verify consistent naming patterns and clarity
- **Code Organization**: Check structure, modularity, and separation of concerns
- **Documentation**: Review comments, docstrings, and API documentation
- **Readability**: Assess code clarity and maintainability

### **🏗️ Architecture Review**
- **Design Patterns**: Evaluate appropriate pattern usage and implementation
- **Dependencies**: Review dependency management and version compatibility
- **Interfaces**: Check API design, contracts, and abstraction layers
- **Scalability**: Assess system design for growth and load handling

### **🧪 Testing Review**
- **Test Coverage**: Evaluate test completeness and edge case coverage
- **Test Quality**: Review test design, assertions, and maintainability
- **Integration Tests**: Check cross-component testing and end-to-end scenarios
- **Mocking**: Verify proper mocking and isolation in unit tests

## **SPARC Implementation**

### **Pseudocode Phase**
- Define review scope and success criteria
- Plan review approach and perspective selection
- Design automated analysis procedures
- Structure reporting format and metrics

### **Refinement Phase**
- Execute multi-perspective code analysis
- Apply coding standards and best practices
- Generate improvement suggestions and fixes
- Validate suggestions against codebase context

### **Completion Phase**
- Compile comprehensive review report
- Prioritize issues by severity and impact
- Provide actionable recommendations
- Generate structured commit suggestions

## **Issue Classification**

### **🚨 Critical Issues**
- Security vulnerabilities that could lead to data breaches
- Performance bottlenecks affecting system availability
- Architectural flaws that could cause system failures
- Data corruption or loss scenarios

### **⚠️ Major Issues**
- Performance degradation impacting user experience
- Security weaknesses with limited impact
- Code maintainability problems
- Testing gaps in critical paths

### **💡 Minor Issues**
- Code style and convention violations
- Documentation improvements needed
- Minor performance optimizations
- Enhanced error handling opportunities

## **Review Templates**

### **Security Review Template**
```markdown
## Security Analysis for [TARGET]

### 🔍 Authentication & Authorization
- [ ] Access control implementation validated
- [ ] Permission checks properly enforced
- [ ] Token/session management secure

### 🛡️ Input Validation
- [ ] SQL injection protection in place
- [ ] XSS prevention measures implemented
- [ ] Data sanitization and validation

### 🔐 Data Protection
- [ ] Sensitive data properly encrypted
- [ ] Secure transmission protocols used
- [ ] Proper data retention policies

### 🚨 Critical Findings
- **Issue**: [Security vulnerability description]
- **Severity**: Critical/High/Medium/Low
- **Location**: [File:line reference]
- **Recommendation**: [Specific fix suggestion]
```

### **Performance Review Template**
```markdown
## Performance Analysis for [TARGET]

### ⚡ Algorithm Efficiency
- **Time Complexity**: [Big O analysis]
- **Space Complexity**: [Memory usage analysis]
- **Optimization Opportunities**: [Specific improvements]

### 💾 Memory Management
- **Memory Leaks**: [Detected/None]
- **Resource Cleanup**: [Proper/Needs improvement]
- **Data Structures**: [Efficiency assessment]

### 📊 Performance Metrics
- **Current Performance**: [Baseline measurements]
- **Target Performance**: [Expected improvements]
- **Bottlenecks**: [Identified constraints]
```

## **Usage Examples**

```bash
# Comprehensive security review
/review src/auth.js --focus=security --depth=comprehensive --perspectives=security,performance

# Quick performance review
/review src/api/ --focus=performance --depth=quick --metrics=yes

# Standard review with all perspectives
/review . --depth=standard --automated=yes --format=markdown --diff=yes

# Review specific PR
/review https://github.com/user/repo/pull/123 --focus=architecture,style --severity=high

# Generate SARIF format for CI/CD integration
/review src/ --format=sarif --automated=yes --severity=medium
```

## **Integration Features**

### **Multi-Agent Analysis**
- Coordinate different specialist perspectives for comprehensive review
- Leverage agent-specific expertise (security, performance, architecture)
- Synthesize findings into actionable recommendations
- Maintain consistency across review types

### **Automated Analysis**
- Static code analysis integration
- Security vulnerability scanning
- Performance profiling and bottleneck detection
- Code quality metrics calculation

### **Workflow Integration**
- Structured commit message generation
- Pull request template population
- Integration with existing CI/CD pipelines
- Review checklist and sign-off procedures

This command provides enterprise-grade code review capabilities that combine automated analysis with multi-agent expertise to ensure code quality, security, and performance.