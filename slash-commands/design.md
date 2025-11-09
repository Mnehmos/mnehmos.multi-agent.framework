---
description: Generate system architecture documents and design specifications
argument-hint: <component|system> [options]
category: architecture
permissions: [read, edit, browser]
sparc-alignment: [architecture]
implementation: [visual-documentation-generation, tree-of-thoughts, step-back-prompting]
---

# Architecture Design Command

Generate comprehensive system architecture documents using structured design methodologies.

## **Command Options**

### **Target Specification**
- `component` - Specific component to design (default: system)
- `system` - Complete system architecture (default)
- `--type=[monolith|microservices|serverless|hybrid]` - Architecture type (default: hybrid)
- `--framework=[mvc|ddd|layered|hexagonal]` - Design framework (default: layered)
- `--detail=[summary|detailed|comprehensive]` - Design detail level (default: detailed)

### **Design Configuration**
- `--views=[list]` - Architecture views to generate (default: logical,physical,deployment)
- `--standards=[list]` - Design standards to follow (default: clean-code,scalability,security)
- `--patterns=[list]` - Design patterns to apply (default: repository,observer,factory)
- `--diagrams=[yes|no]` - Include visual diagrams (default: yes)

### **Output Configuration**
- `--format=[markdown|json|yaml]` - Output format (default: markdown)
- `--export=[plantuml|mermaid|drawio]` - Diagram export format (default: plantuml)
- `--validate=[yes|no]` - Validate design principles (default: yes)

## **Architecture Types**

### **🏛️ Monolithic Architecture**
- **Use Case**: Small to medium applications
- **Benefits**: Simplicity, easy deployment, single database
- **Challenges**: Scalability, team coordination, technology lock-in
- **Components**: Single deployable unit with internal modules

### **🧩 Microservices Architecture**
- **Use Case**: Large, complex applications
- **Benefits**: Scalability, team autonomy, technology diversity
- **Challenges**: Complexity, network overhead, data consistency
- **Components**: Independent services with API communication

### **☁️ Serverless Architecture**
- **Use Case**: Event-driven, variable workloads
- **Benefits**: Cost efficiency, auto-scaling, reduced ops
- **Challenges**: Vendor lock-in, debugging complexity, cold starts
- **Components**: Function-based services with managed infrastructure

### **🔀 Hybrid Architecture**
- **Use Case**: Growing applications with mixed requirements
- **Benefits**: Flexibility, gradual migration, optimized resource use
- **Challenges**: Complexity, integration overhead, consistency management
- **Components**: Mixed approach with strategic component placement

## **Design Frameworks**

### **🏗️ Layered Architecture**
- **Structure**: Presentation → Business → Data → Persistence
- **Benefits**: Separation of concerns, maintainability
- **Use Cases**: Enterprise applications, clear domain boundaries

### **🎯 Domain-Driven Design (DDD)**
- **Structure**: Bounded contexts, aggregates, repositories
- **Benefits**: Business alignment, team autonomy, clear boundaries
- **Use Cases**: Complex business logic, multiple domains

### **🔷 Hexagonal Architecture**
- **Structure**: Core domain → Adapters → External systems
- **Benefits**: Testability, flexibility, isolation
- **Use Cases**: Systems with multiple external integrations

### **🎨 MVC Architecture**
- **Structure**: Model → View → Controller
- **Benefits**: Separation of concerns, testability
- **Use Cases**: Web applications, user interfaces

## **Architecture Views**

### **🧠 Logical View**
- **Focus**: Functional requirements and business logic
- **Components**: Domain models, business rules, use cases
- **Stakeholders**: Business analysts, developers, architects

### **🏗️ Physical View**
- **Focus**: Hardware and deployment topology
- **Components**: Servers, networks, storage, infrastructure
- **Stakeholders**: DevOps, system administrators, security team

### **🚀 Deployment View**
- **Focus**: Runtime configuration and environment setup
- **Components**: Containers, orchestration, monitoring, scaling
- **Stakeholders**: Operations team, SREs, cloud engineers

## **Design Patterns**

### **📦 Repository Pattern**
- **Purpose**: Encapsulate data access and business logic
- **Benefits**: Testability, separation of concerns
- **Implementation**: Interface-based with dependency injection

### **👁 Observer Pattern**
- **Purpose**: Event-driven communication between components
- **Benefits**: Loose coupling, extensibility
- **Implementation**: Subject-observer relationship with event notification

### **🏭 Factory Pattern**
- **Purpose**: Object creation without specifying concrete classes
- **Benefits**: Flexibility, maintainability, testability
- **Implementation**: Factory interface with concrete implementations

## **Usage Examples**

```bash
# Complete system architecture
/design --system --type=microservices --framework=ddd --views=logical,physical,deployment --diagrams=yes

# Component-specific design
/design component=user-authentication --type=layered --patterns=repository,observer

# Quick architecture sketch
/design --detail=summary --format=markdown --validate=yes

# Export diagrams for documentation
/design --export=plantuml --standards=clean-code,scalability --format=json
```

## **Output Structure**

### **Architecture Overview**
```markdown
# System Architecture: [SYSTEM_NAME]

## Executive Summary
- **Architecture Type**: [Monolith/Microservices/Serverless/Hybrid]
- **Design Framework**: [MVC/DDD/Layered/Hexagonal]
- **Primary Goals**: [Scalability, Maintainability, Security]

## Component Overview
### Core Domain
- [Component 1]: [Purpose and responsibilities]
- [Component 2]: [Purpose and responsibilities]

### Infrastructure Layer
- [Infrastructure 1]: [Purpose and technologies]
- [Infrastructure 2]: [Purpose and technologies]

### Data Layer
- [Data Store 1]: [Purpose and technologies]
- [Data Store 2]: [Purpose and technologies]
```

### **Design Decisions**
```markdown
## Architecture Decision Records (ADRs)

### ADR-001: Choose Microservices Architecture
- **Status**: Accepted
- **Context**: Need for team autonomy and scalability
- **Decision**: Adopt microservices with domain boundaries
- **Consequences**: Increased complexity, network overhead
- **Alternatives**: Monolith, modular monolith
```

This command enables comprehensive architecture design with multiple frameworks, patterns, and views while maintaining alignment with industry best practices.