---
description: Code quality improvement and refactoring workflows
argument-hint: <target> [options]
category: development
permissions: [read, edit, command]
sparc-alignment: [refinement]
implementation: [code-quality-improvement, performance-optimization]
---

# Refactor Command

Improve code quality through systematic refactoring and optimization workflows.

## **Command Options**

### **Target Specification**
- `target` - File, directory, or component to refactor
- `--type=[cleanup|optimization|restructure|modernize]` - Refactor type (default: optimization)
- `--patterns=[list]` - Specific patterns to apply (default: auto-detect)
- `--metrics=[yes|no]` - Include quality metrics (default: yes)
- `--test=[yes|no]` - Run tests after refactoring (default: yes)

### **Refactoring Configuration**
- `--depth=[quick|standard|comprehensive]` - Analysis depth (default: standard)
- `--preserve=[yes|no]` - Preserve original behavior (default: yes)
- `--backup=[yes|no]` - Create backup before changes (default: yes)
- `--review=[yes|no]` - Require code review (default: yes)

### **Output Configuration**
- `--format=[markdown|json|diff]` - Output format (default: markdown)
- `--suggestions=[yes|no]` - Include improvement suggestions (default: yes)
- `--impact=[yes|no]` - Analyze impact assessment (default: yes)

## **Refactoring Types**

### **🧹 Code Cleanup**
- **Dead Code Removal**: Eliminate unused variables and functions
- **Import Optimization**: Remove unused dependencies and imports
- **Comment Cleanup**: Remove outdated or redundant comments
- **Formatting**: Standardize code style and indentation

### **⚡ Performance Optimization**
- **Algorithm Improvement**: Replace inefficient algorithms
- **Memory Optimization**: Reduce memory allocation and leaks
- **Database Optimization**: Improve query performance and indexing
- **Caching Strategy**: Implement appropriate caching mechanisms

### **🏗️ Code Restructuring**
- **Extract Method**: Pull out complex methods into separate functions
- **Class Decomposition**: Break down large classes into smaller ones
- **Interface Segregation**: Split interfaces by client needs
- **Module Organization**: Group related functionality

### **🎨 Code Modernization**
- **Language Features**: Use modern language constructs
- **Pattern Application**: Apply appropriate design patterns
- **Dependency Updates**: Update to latest stable versions
- **Type Safety**: Add type annotations and checks

## **Code Quality Metrics**

### **📊 Complexity Analysis**
```markdown
## Complexity Metrics
- **Cyclomatic Complexity**: [Score/Level]
- **Cognitive Complexity**: [Score/Level]
- **Halstead Volume**: [Difficulty/Level]
- **Maintainability Index**: [Score/Level]
```

### **🔍 Code Smells Detection**
```markdown
## Code Smells Analysis
- **Long Method**: [Methods exceeding complexity threshold]
- **Large Class**: [Classes with too many responsibilities]
- **Duplicate Code**: [Repeated code blocks]
- **Deep Nesting**: [Excessive indentation levels]
- **Feature Envy**: [Classes using other classes more than own]
```

### **📈 Test Coverage**
```markdown
## Test Coverage Analysis
- **Line Coverage**: [Percentage of code covered]
- **Branch Coverage**: [Percentage of conditions tested]
- **Function Coverage**: [Percentage of functions tested]
- **Critical Paths**: [Coverage of important code paths]
```

## **Refactoring Workflows**

### **🔍 Analysis Phase**
```markdown
## Code Analysis for [TARGET]

### Current Issues
- **Performance Bottlenecks**: [Identified slow operations]
- **Code Complexity**: [Areas with high complexity]
- **Maintainability**: [Difficult to understand sections]
- **Technical Debt**: [Outdated patterns or dependencies]

### Refactoring Opportunities
- **Extract Methods**: [Complex methods to simplify]
- **Apply Patterns**: [Design patterns to implement]
- **Optimize Algorithms**: [Performance improvements possible]
- **Reduce Coupling**: [Dependency improvements identified]
```

### **🔧 Implementation Phase**
```markdown
## Refactoring Execution

### Applied Changes
- **Method Extraction**: [Extracted complex logic]
- **Pattern Application**: [Applied design patterns]
- **Performance Optimization**: [Algorithm improvements]
- **Code Cleanup**: [Removed dead code and imports]

### Validation Results
- **Test Results**: [All tests passing]
- **Performance Impact**: [Measured improvements]
- **Quality Metrics**: [Complexity reduction achieved]
```

## **Usage Examples**

```bash
# Comprehensive refactoring
/refactor src/user-service --type=optimization --patterns=repository,observer --metrics=yes --test=yes

# Code cleanup and modernization
/refactor legacy-module --type=modernize --depth=comprehensive --backup=yes --review=yes

# Performance-focused refactoring
/refactor api-endpoint --type=optimization --metrics=yes --impact=yes

# Restructuring with pattern application
/refactor large-class --type=restructure --patterns=extract,factory --depth=standard
```

## **Integration Features**

### **Automated Analysis**
- Code complexity calculation and visualization
- Code smell detection and reporting
- Performance bottleneck identification
- Test coverage analysis and reporting

### **Refactoring Assistance**
- Automated refactoring suggestions
- Pattern application guidance
- Code transformation and optimization
- Impact assessment and validation

### **Quality Assurance**
- Pre-refactoring analysis and planning
- Post-refactoring validation and testing
- Code review integration and approval
- Documentation updates and knowledge sharing

This command enables systematic code quality improvement through comprehensive refactoring workflows with automated analysis and quality assurance.