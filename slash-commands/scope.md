---
description: Deep analysis of GitHub issues for comprehensive scope documents
argument-hint: <issue_url> [options]
category: project-management
permissions: [read, browser, mcp]
sparc-alignment: [specification, architecture]
implementation: [issue-decomposition-analysis, codebase-impact-mapping, hypothetical-scenario-modeling]
---

# Issue Scoping Command

Perform comprehensive analysis of GitHub issues to generate detailed scope documents using SPARC methodology.

## **Command Options**

### **Target Specification**
- `issue_url` - GitHub issue URL to analyze
- `--depth=[shallow|deep|comprehensive]` - Analysis depth (default: comprehensive)
- `--components=[list]` - Specific components to analyze (default: all)
- `--impact=[yes|no]` - Include impact analysis (default: yes)

### **Analysis Configuration**
- `--scenarios=[number]` - Generate hypothetical scenarios (default: 3)
- `--dependencies=[yes|no]` - Include dependency analysis (default: yes)
- `--timeline=[weeks]` - Implementation timeline estimate (default: auto)
- `--risk=[low|medium|high]` - Risk assessment level (default: auto)

### **Output Configuration**
- `--format=[markdown|json|yaml]` - Output format (default: markdown)
- `--detail=[summary|detailed|comprehensive]` - Detail level (default: comprehensive)
- `--recommendations=[yes|no]` - Include implementation recommendations (default: yes)

## **SPARC Implementation**

### **Specification Phase**
- Extract issue requirements and constraints
- Identify stakeholders and success criteria
- Document assumptions and limitations
- Define problem boundaries and scope

### **Architecture Phase**
- Analyze current codebase impact
- Map component interactions and dependencies
- Identify integration points and interfaces
- Assess technical feasibility and complexity

### **Refinement Phase**
- Generate hypothetical implementation scenarios
- Model edge cases and error conditions
- Estimate resource requirements and timeline
- Identify potential blockers and mitigations

### **Completion Phase**
- Create comprehensive scope document
- Provide implementation recommendations
- Define acceptance criteria and validation methods
- Document risks and mitigation strategies

## **Analysis Framework**

### **Issue Decomposition**
```markdown
## Problem Analysis
- **Core Issue**: [Primary problem statement]
- **Root Causes**: [Underlying factors]
- **Impact Assessment**: [Business/technical impact]
- **Urgency Level**: [Priority classification]

### Requirements Analysis
- **Functional Requirements**: [What must be implemented]
- **Non-Functional Requirements**: [Performance, security, usability]
- **Constraints**: [Technical, business, time constraints]
- **Dependencies**: [External/internal dependencies]
```

### **Codebase Impact Mapping**
```markdown
## Component Analysis
- **Affected Modules**: [List of impacted components]
- **Integration Points**: [Required interfaces and connections]
- **Data Flow Changes**: [Required data modifications]
- **API Changes**: [Required API modifications]
- **Database Changes**: [Required schema changes]
```

### **Hypothetical Scenario Modeling**
```markdown
## Implementation Scenarios
### Scenario 1: Ideal Implementation
- **Approach**: [Optimal solution path]
- **Timeline**: [Estimated duration]
- **Resources**: [Required team and tools]
- **Risks**: [Potential obstacles]

### Scenario 2: Conservative Implementation
- **Approach**: [Safe, incremental solution]
- **Timeline**: [Extended duration]
- **Resources**: [Minimal team requirements]
- **Risks**: [Reduced but present]

### Scenario 3: Agile Implementation
- **Approach**: [Iterative, flexible solution]
- **Timeline**: [Sprint-based duration]
- **Resources**: [Cross-functional team]
- **Risks**: [Scope creep, quality issues]
```

## **Usage Examples**

```bash
# Comprehensive issue analysis
/scope https://github.com/user/repo/issues/123 --depth=comprehensive --impact=yes

# Focused analysis of specific components
/scope https://github.com/user/repo/issues/456 --components=frontend,api --timeline=4

# Quick scoping with recommendations
/scope https://github.com/user/repo/issues/789 --depth=deep --recommendations=yes --format=json

# Analysis with risk assessment
/scope https://github.com/user/repo/issues/321 --risk=high --scenarios=5 --detail=comprehensive
```

## **Output Structure**

### **Executive Summary**
- Issue overview and impact assessment
- Recommended implementation approach
- Timeline and resource estimates
- Risk assessment and mitigation strategies

### **Technical Analysis**
- Detailed component impact mapping
- Integration requirements and dependencies
- Implementation complexity assessment
- Testing and validation requirements

### **Strategic Recommendations**
- Implementation roadmap with milestones
- Resource allocation suggestions
- Risk mitigation strategies
- Success criteria and validation methods

This command transforms GitHub issues into actionable scope documents that provide clear implementation guidance and risk assessment for development teams.