---
description: Apply design patterns analysis and recommendations
argument-hint: <target> [options]
category: architecture
permissions: [read, edit, browser]
sparc-alignment: [architecture]
implementation: [pattern-application-analysis]
---

# Design Patterns Command

Analyze and apply design patterns using established software architecture principles.

## **Command Options**

### **Target Specification**
- `target` - Code, component, or system to analyze
- `--patterns=[list]` - Specific patterns to apply (default: auto-detect)
- `--context=[web|enterprise|mobile|embedded]` - Application context (default: auto-detect)
- `--language=[javascript|python|java|csharp]` - Programming language (default: auto-detect)

### **Analysis Configuration**
- `--depth=[quick|standard|comprehensive]` - Analysis depth (default: standard)
- `--suggest=[yes|no]` - Provide pattern suggestions (default: yes)
- `--refactor=[yes|no]` - Apply pattern refactoring (default: no)
- `--validate=[yes|no]` - Validate pattern implementation (default: yes)

### **Output Configuration**
- `--format=[markdown|json|uml]` - Output format (default: markdown)
- `--examples=[yes|no]` - Include code examples (default: yes)
- `--diagrams=[yes|no]` - Generate pattern diagrams (default: yes)

## **Design Patterns Library**

### **🏭 Creational Patterns**
- **Factory**: Create objects without specifying concrete classes
- **Abstract Factory**: Create families of related objects
- **Builder**: Construct complex objects step-by-step
- **Prototype**: Create new objects by copying existing ones
- **Singleton**: Ensure only one instance of a class

### **🔗 Structural Patterns**
- **Adapter**: Convert interface of one class to another
- **Bridge**: Decouple abstraction from implementation
- **Composite**: Build tree structures of objects
- **Decorator**: Add responsibilities to objects dynamically
- **Facade**: Simplify interface to complex system
- **Flyweight**: Share common state between objects
- **Proxy**: Control access to another object

### **🔄 Behavioral Patterns**
- **Chain of Responsibility**: Pass requests along chain of handlers
- **Command**: Encapsulate requests as objects
- **Interpreter**: Define language grammar and interpreter
- **Iterator**: Access elements of object sequentially
- **Mediator**: Coordinate interactions between objects
- **Memento**: Capture and restore object state
- **Observer**: Notify multiple objects of state changes
- **State**: Allow object to change behavior when state changes
- **Strategy**: Define family of algorithms
- **Template**: Define skeleton of algorithm
- **Visitor**: Add new operations to classes without modification

## **Pattern Analysis Framework**

### **🔍 Pattern Detection**
```markdown
## Pattern Analysis for [TARGET]

### Detected Patterns
- **Creational**: [Factory, Builder, Singleton]
- **Structural**: [Adapter, Composite, Facade]
- **Behavioral**: [Observer, Strategy, Command]

### Pattern Quality Assessment
- **Implementation**: [Correct/Incorrect/Partial]
- **Consistency**: [High/Medium/Low]
- **Maintainability**: [Good/Fair/Poor]
- **Scalability**: [Excellent/Average/Limited]
```

### **🎯 Pattern Recommendations**
```markdown
## Recommended Patterns for [CONTEXT]

### For Web Applications
- **MVC**: Separate concerns in web architecture
- **Repository**: Encapsulate data access logic
- **Observer**: Event-driven UI updates
- **Factory**: Create components with dependency injection

### For Enterprise Systems
- **Strategy**: Pluggable business rules
- **Command**: Undo/redo functionality
- **Mediator**: Service communication
- **Adapter**: Legacy system integration

### For Mobile Applications
- **Singleton**: Resource management
- **Observer**: State synchronization
- **Builder**: Complex object construction
- **State**: Screen flow management
```

## **Pattern Implementation Templates**

### **Factory Pattern Example**
```javascript
class DatabaseFactory {
    static create(type) {
        switch(type) {
            case 'mysql':
                return new MySQLConnection();
            case 'postgresql':
                return new PostgreSQLConnection();
            case 'mongodb':
                return new MongoDBConnection();
            default:
                throw new Error(`Unsupported database type: ${type}`);
        }
    }
}
```

### **Observer Pattern Example**
```javascript
class EventEmitter {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    notify(event, data) {
        this.observers.forEach(observer => {
            observer.update(event, data);
        });
    }
}
```

### **Strategy Pattern Example**
```javascript
class PaymentProcessor {
    constructor(strategy) {
        this.strategy = strategy;
    }
    
    process(amount) {
        return this.strategy.process(amount);
    }
}

class CreditCardStrategy {
    process(amount) {
        // Credit card processing logic
    }
}
```

## **Usage Examples**

```bash
# Analyze patterns in codebase
/pattern src/ --depth=comprehensive --suggest=yes --examples=yes

# Apply specific patterns
/pattern user-service --patterns=repository,observer,factory --refactor=yes

# Language-specific analysis
/pattern --language=python --context=web --patterns=mvc,singleton,observer

# Generate pattern documentation
/pattern --format=uml --diagrams=yes --examples=yes
```

## **Pattern Validation**

### **✅ Implementation Quality**
- **Correctness**: Pattern follows established definition
- **Consistency**: Implementation matches pattern intent
- **Flexibility**: Pattern allows for extension
- **Maintainability**: Code is readable and modifiable

### **⚠️ Common Issues**
- **Anti-Patterns**: Code smells and design problems
- **Over-Engineering**: Unnecessary complexity
- **Misapplication**: Pattern used in inappropriate context
- **Performance**: Inefficient pattern implementation

This command enables systematic application of design patterns to improve code quality, maintainability, and architectural consistency.