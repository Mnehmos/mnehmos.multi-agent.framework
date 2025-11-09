---
description: Quick documentation access with intelligent search and navigation
argument-hint: <query> [options]
category: utility
permissions: [read]
sparc-alignment: [completion]
implementation: [state-management, traceability-documentation]
---

# Docs Command

Provide quick access to documentation with intelligent search and navigation capabilities.

## **Command Options**

### **Search Specification**
- `query` - Search query for documentation (optional, shows all docs if not provided)
- `--type=[api|guides|tutorials|examples]` - Documentation type (default: all)
- `--format=[markdown|json]` - Output format (default: markdown)

### **Navigation Configuration**
- `--browse=[yes|no]` - Open in browser (default: no)
- `--interactive=[yes|no]` - Interactive navigation (default: no)

### **Display Configuration**
- `--verbose=[yes|no]` - Detailed output (default: no)
- `--examples=[yes|no]` - Include usage examples (default: yes)

## **Documentation Types**

### **📚 API Documentation**
- **Endpoints**: REST API specifications and examples
- **Authentication**: Security and authorization flows
- **Data Models**: Request/response schemas
- **Error Handling**: Error codes and responses

### **📖 User Guides**
- **Getting Started**: Installation and setup instructions
- **Tutorials**: Step-by-step feature guides
- **Best Practices**: Usage patterns and recommendations
- **Troubleshooting**: Common issues and solutions

### **🎓 Architecture Guides**
- **System Design**: High-level architecture overview
- **Component Documentation**: Detailed component specifications
- **Integration Guides**: Third-party service connections
- **Deployment**: Production setup and configuration

### **📝 Examples & Tutorials**
- **Code Examples**: Working implementation samples
- **Configuration**: Setup and customization examples
- **Workflows**: End-to-end process examples

## **Intelligent Search**

### **🔍 Semantic Search**
```markdown
## Search Results for "[QUERY]"

### Relevant Documentation
- **[Document 1]**: [Title and relevance score]
- **[Document 2]**: [Title and relevance score]
- **[Document 3]**: [Title and relevance score]

### Context-Aware Results
- **Current Mode**: [Agent-specific documentation]
- **Recent Commands**: [Related command documentation]
- **Project State**: [Current project context]
```

### **🧭 Quick Access**
```markdown
## Quick Access

### Core Commands
- **/plan**: Project planning and task management
- **/build**: Build and deployment workflows
- **/test**: Framework testing and validation
- **/mode**: Agent switching and configuration

### Agent-Specific Commands
- **Architect**: System design and architecture
- **Builder**: Code implementation and optimization
- **Debug**: Problem diagnosis and resolution
```

## **Usage Examples**

```bash
# Search for specific documentation
/docs "authentication flow" --type=api

# Browse API documentation
/docs --type=api --browse=yes

# Interactive navigation
/docs --interactive=yes --type=guides

# Show all documentation
/docs

# Search with examples
/docs "getting started" --examples=yes

# JSON output for automation
/docs --format=json --type=examples
```

## **Integration Features**

### **🔄 Multi-Agent Coordination**
- Mode-aware documentation filtering
- Context-preserving search results
- Integration with command help system
- Cross-mode workflow guidance

### **📚 Knowledge Management**
- Versioned documentation with change tracking
- Searchable content index
- Integration with external documentation systems

### **🔍 Intelligent Navigation**
- Contextual command suggestions
- Learning from user interaction patterns
- Adaptive content organization

This command provides intelligent documentation access with semantic search, context awareness, and multi-agent coordination capabilities.