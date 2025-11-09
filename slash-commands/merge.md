---
description: Automated PR merging with validation and conflict resolution
argument-hint: <pr_number|branch> [options]
category: development
permissions: [read, edit, command, browser]
sparc-alignment: [pseudocode, refinement, completion]
implementation: [structured-commit-workflow, github-integration-prompting]
---

# PR Merge Command

Automate pull request merging with comprehensive validation and conflict resolution.

## **Command Options**

### **Target Specification**
- `pr_number` - Pull request number to merge
- `branch` - Branch name to merge (alternative to PR number)
- `--target=[main|develop|staging]` - Target branch (default: main)
- `--method=[merge|squash|rebase]` - Merge strategy (default: merge)

### **Merge Configuration**
- `--validate=[yes|no]` - Run pre-merge validation (default: yes)
- `--conflicts=[auto|manual|skip]` - Conflict resolution strategy (default: auto)
- `--tests=[yes|no]` - Run tests before merge (default: yes)
- `--review=[yes|no]` - Require review approval (default: yes)

### **Quality Gates**
- `--lint=[yes|no]` - Run code linting (default: yes)
- `--security=[yes|no]` - Run security scan (default: yes)
- `--performance=[yes|no]` - Run performance tests (default: yes)
- `--docs=[yes|no]` - Check documentation (default: yes)

### **Output Configuration**
- `--format=[json|markdown]` - Output format (default: markdown)
- `--notify=[yes|no]` - Send notifications (default: yes)
- `--rollback=[yes|no]` - Enable rollback capability (default: yes)

## **SPARC Implementation**

### **Specification Phase**
- Define merge requirements and success criteria
- Identify stakeholders and approval requirements
- Establish validation criteria and quality gates
- Document rollback procedures and risk mitigation

### **Pseudocode Phase**
- Plan merge execution workflow
- Design conflict resolution strategies
- Plan validation and testing procedures
- Define rollback and recovery procedures

### **Refinement Phase**
- Execute merge with conflict resolution
- Run quality gates and validation
- Handle merge failures and recovery
- Optimize merge performance and reliability

### **Completion Phase**
- Validate merge success and integration
- Update project state and documentation
- Generate merge report and metrics
- Notify stakeholders and update tracking

## **Merge Strategies**

### **🔄 Standard Merge**
- **Use Case**: Feature branches to main
- **Strategy**: Create merge commit preserving history
- **Benefits**: Clear development timeline, easy debugging
- **Considerations**: Potential for fast-forward merges

### **🗜️ Squash Merge**
- **Use Case**: Feature branches to main
- **Strategy**: Combine commits into single commit
- **Benefits**: Clean history, reduced noise
- **Considerations**: Loss of granular history

### **🔀 Rebase Merge**
- **Use Case**: Long-running branches or complex histories
- **Strategy**: Reapply commits on top of target
- **Benefits**: Linear history, conflict resolution
- **Considerations**: Rewrite history, requires force push

## **Conflict Resolution**

### **🤖 Automatic Resolution**
- **Code Conflicts**: Use AI to suggest resolutions
- **Import Conflicts**: Resolve dependency version mismatches
- **Whitespace Conflicts**: Auto-merge non-conflicting changes
- **Logic Conflicts**: Flag for manual review

### **👨‍👩‍👦 Manual Resolution**
- **Interactive Mode**: Step-by-step conflict resolution
- **Diff Analysis**: Show both sides of conflicts
- **Choice Selection**: Pick resolution strategy
- **Validation**: Test resolution before finalizing

## **Quality Gates**

### **🔍 Code Quality**
- **Linting**: Check code style and conventions
- **Complexity**: Analyze cyclomatic complexity
- **Duplication**: Check for duplicate code patterns
- **Dependencies**: Verify dependency security and versions

### **🛡️ Security**
- **Vulnerability Scan**: Check for known security issues
- **Secret Detection**: Ensure no hardcoded secrets
- **Permission Analysis**: Validate access controls
- **Input Validation**: Check for injection vulnerabilities

### **⚡ Performance**
- **Load Testing**: Validate performance under load
- **Memory Usage**: Check for memory leaks
- **Database Queries**: Analyze query performance
- **API Response**: Check endpoint response times

## **Usage Examples**

```bash
# Standard merge with validation
/merge 123 --target=main --validate=yes --tests=yes

# Squash merge with quality gates
/merge feature/user-auth --method=squash --lint=yes --security=yes

# Rebase merge with conflict resolution
/merge long-running-branch --method=rebase --conflicts=auto --rollback=yes

# Merge branch without PR
/merge feature/payment --target=develop --validate=yes --review=no

# Comprehensive merge with all checks
/merge 456 --validate=yes --tests=yes --lint=yes --security=yes --performance=yes --docs=yes
```

## **Integration Features**

### **GitHub Integration**
- Automatic PR status checking and updates
- Structured commit message generation
- Pull request template management
- Merge conflict detection and resolution
- Branch protection and policy enforcement

### **CI/CD Integration**
- Pipeline trigger on merge operations
- Quality gate execution and reporting
- Automated rollback on failure
- Notification and alerting systems

### **Multi-Agent Coordination**
- Coordinate with code review agents
- Integrate with testing workflows
- Update project state across all agents
- Maintain audit trail and traceability

This command provides enterprise-grade PR merging capabilities with comprehensive validation, conflict resolution, and quality assurance integration.