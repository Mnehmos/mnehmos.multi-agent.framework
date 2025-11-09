---
description: Architecture validation and review against design principles
argument-hint: <target> [options]
category: architecture
permissions: [read, edit, browser]
sparc-alignment: [architecture]
implementation: [architecture-validation, quality-assurance]
---

# Architecture Validation Command

Validate system architecture against established design principles and quality standards.

## **Command Options**

### **Target Specification**
- `target` - Architecture, component, or design to validate
- `--standards=[list]` - Design standards to check (default: clean-code,scalability,security)
- `--principles=[list]` - Architecture principles to validate (default: all)
- `--depth=[quick|standard|comprehensive]` - Validation depth (default: standard)

### **Validation Configuration**
- `--patterns=[list]` - Design patterns to check (default: auto-detect)
- `--metrics=[yes|no]` - Include quality metrics (default: yes)
- `--risks=[yes|no]` - Include risk assessment (default: yes)
- `--recommendations=[yes|no]` - Provide improvement suggestions (default: yes)

### **Output Configuration**
- `--format=[markdown|json|report]` - Output format (default: markdown)
- `--score=[yes|no]` - Include architecture score (default: yes)
- `--checklist=[yes|no]` - Generate validation checklist (default: yes)

## **Architecture Principles**

### **🎯 SOLID Principles**
- **Single Responsibility**: Each component has one reason to change
- **Open/Closed**: Components open for extension, closed for modification
- **Liskov Substitution**: Subtypes must be substitutable for base types
- **Interface Segregation**: Many client-specific interfaces better than one general interface
- **Dependency Inversion**: Depend on abstractions, not concretions

### **🏗️ Architectural Principles**
- **High Cohesion**: Related functionality grouped together
- **Low Coupling**: Minimal dependencies between components
- **Separation of Concerns**: Distinct layers with clear boundaries
- **Information Hiding**: Internal details encapsulated, external interface stable
- **Abstraction**: Hide complexity behind simple interfaces

### **🔒 Security Principles**
- **Least Privilege**: Minimum required permissions only
- **Defense in Depth**: Multiple security layers
- **Fail Securely**: Secure defaults and error handling
- **Zero Trust**: Validate all external inputs

### **⚡ Performance Principles**
- **Scalability**: Handle increased load through architecture
- **Caching**: Store frequently accessed data appropriately
- **Asynchronous Processing**: Non-blocking operations where possible
- **Resource Optimization**: Efficient memory and CPU usage

## **Validation Categories**

### **🏗️ Structural Validation**
```markdown
## Component Analysis
- **Cohesion Score**: [0-100 rating]
- **Coupling Assessment**: [Low/Medium/High]
- **Dependency Graph**: [Complexity analysis]
- **Interface Design**: [Contract evaluation]
```

### **🎨 Design Pattern Validation**
```markdown
## Pattern Implementation Review
- **Correctness**: [Proper/Incorrect usage]
- **Consistency**: [Follows/Violates pattern definition]
- **Appropriateness**: [Suitable/Misapplied context]
- **Extensibility**: [Flexible/Rigid implementation]
```

### **🔒 Security Validation**
```markdown
## Security Architecture Review
- **Authentication**: [Multi-factor/Single-factor/None]
- **Authorization**: [RBAC/ABAC/None]
- **Data Protection**: [Encryption/Masking/Clear text]
- **Network Security**: [HTTPS/TLS/Plain HTTP]
- **Input Validation**: [Comprehensive/Partial/None]
```

### **⚡ Performance Validation**
```markdown
## Performance Architecture Assessment
- **Scalability Design**: [Horizontal/Vertical/None]
- **Caching Strategy**: [CDN/Application/Database/None]
- **Database Optimization**: [Indexed/Partitioned/Unoptimized]
- **Async Processing**: [Event-driven/Synchronous/Mixed]
```

## **Quality Metrics**

### **Architecture Quality Score**
```markdown
## Overall Assessment: [SCORE]/100

### Breakdown
- **SOLID Compliance**: [85%]
- **Pattern Usage**: [90%]
- **Security Posture**: [75%]
- **Performance Design**: [80%]
- **Maintainability**: [85%]
```

### **Technical Debt Assessment**
```markdown
## Technical Debt Analysis
- **Code Complexity**: [High/Medium/Low]
- **Documentation Coverage**: [95%/80%/60%]
- **Test Coverage**: [90%/70%/50%]
- **Refactoring Priority**: [Critical/High/Medium/Low]
```

## **Usage Examples**

```bash
# Comprehensive architecture validation
/validate --target=system --standards=clean-code,scalability,security --depth=comprehensive

# Component-specific validation
/validate user-service --patterns=repository,observer --metrics=yes

# Security-focused validation
/validate --target=auth-system --principles=security --depth=standard --risks=yes

# Quick validation with scoring
/validate --depth=quick --score=yes --format=json

# Pattern validation
/validate --patterns=mvc,factory,observer --recommendations=yes
```

## **Validation Checklist**

### **✅ Structural Validation**
- [ ] Component boundaries clearly defined
- [ ] Interfaces stable and versioned
- [ ] Dependencies properly managed
- [ ] Data flow documented
- [ ] Error handling implemented

### **✅ Design Validation**
- [ ] Design patterns correctly applied
- [ ] Code follows conventions
- [ ] Documentation complete and accurate
- [ ] Examples provided and tested

### **✅ Security Validation**
- [ ] Authentication implemented correctly
- [ ] Authorization checks enforced
- [ ] Input validation comprehensive
- [ ] Data encryption where required
- [ ] Secure communication protocols

### **✅ Performance Validation**
- [ ] Scalability considered in design
- [ ] Caching appropriately implemented
- [ ] Resource usage optimized
- [ ] Bottlenecks identified and addressed

This command provides comprehensive architecture validation that ensures systems are built following established principles and quality standards.