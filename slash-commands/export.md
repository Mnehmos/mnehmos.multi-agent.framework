---
description: Data export and backup with comprehensive format support
argument-hint: <target> [options]
category: utility
permissions: [read, edit, command]
sparc-alignment: [completion]
implementation: [state-management, traceability-documentation]
---

# Export Command

Export and backup data with comprehensive format support and validation capabilities.

## **Command Options**

### **Export Specification**
- `target` - Data to export (project, config, logs, etc.)
- `--format=[json|yaml|csv|markdown]` - Export format (default: json)
- `--compress=[yes|no]` - Compress output files (default: no)
- `--encrypt=[yes|no]` - Encrypt sensitive data (default: yes)
- `--validate=[yes|no]` - Validate export integrity (default: yes)

### **Backup Configuration**
- `--destination=[path]` - Backup destination (default: ./backups)
- `--schedule=[cron|manual]` - Backup schedule (default: manual)
- `--retention=[days]` - Backup retention period (default: 30)

### **Output Configuration**
- `--include=[list]` - Data types to include (default: all)
- `--exclude=[list]` - Data types to exclude (default: none)
- `--timestamp=[yes|no]` - Add timestamps (default: yes)
- `--checksum=[yes|no]` - Generate file checksums (default: yes)

## **Export Types**

### **📊 Project Data**
- **Task Maps**: Project plans and task assignments
- **Code Reviews**: Review results and recommendations
- **Build Artifacts**: Build outputs and deployment packages
- **Documentation**: Generated docs and specifications

### **🔧 Configuration Data**
- **Framework Settings**: Mode preferences and tool configurations
- **Agent States**: Current mode states and contexts
- **User Preferences**: Customized settings and profiles

### **📚 Knowledge Base**
- **Research Results**: Analysis findings and insights
- **Templates**: Custom prompt templates and workflows
- **Best Practices**: Documented procedures and lessons learned

### **📊 Activity Logs**
- **Command History**: Executed commands and results
- **Agent Activities**: Task assignments and completions
- **System Events**: Build processes and deployments

### **🔒 Security Data**
- **Authentication Logs**: Login attempts and access patterns
- **Audit Trails**: Permission changes and data access
- **Encryption Keys**: Managed security credentials

## **Export Formats**

### **📄 JSON Export**
```json
{
  "export_timestamp": "2024-12-01T10:00:00Z",
  "version": "1.0.0",
  "data": {
    "project": {
      "name": "Advanced Multi-Agent AI Framework",
      "version": "2.0.0",
      "last_updated": "2024-12-01T09:00:00Z"
    },
    "tasks": [...],
    "config": {...}
  }
}
```

### **📝 YAML Export**
```yaml
export_timestamp: 2024-12-01T10:00:00Z
version: 1.0.0
project:
  name: Advanced Multi-Agent AI Framework
  version: 2.0.0
  last_updated: 2024-12-01T09:00:00Z
tasks:
  - id: TASK-001
    name: "Implement user authentication"
    status: completed
  - id: TASK-002
    name: "Design system architecture"
    status: in_progress
config:
  default_mode: orchestrator
  language: english
  timezone: UTC-7
```

### **📊 CSV Export**
```csv
timestamp,project,task_id,task_name,status,assigned_agent,created_date,completed_date
2024-12-01T10:00:00Z,Advanced Multi-Agent AI Framework,TASK-001,Implement user authentication,completed,orchestrator,2024-12-01T08:00:00Z,2024-12-01T17:30:00Z
2024-12-01T10:00:00Z,Advanced Multi-Agent AI Framework,TASK-002,Design system architecture,in_progress,architect,2024-12-01T09:00:00Z,
```

## **Usage Examples**

```bash
# Export project data as JSON
/export project --format=json --compress=yes --encrypt=yes

# Export configuration with backup
/export config --format=yaml --destination=./backups --schedule=cron --retention=90

# Export all data types
/export --include=project,tasks,config,logs --format=json --timestamp=yes

# Compressed export with validation
/export project --format=json --compress=yes --validate=yes --checksum=yes
```

## **Integration Features**

### **🔄 Multi-Agent Coordination**
- Cross-agent data aggregation
- Consistent format and validation
- Backup and recovery procedures
- Export scheduling and automation

### **🔒 Security**
- Data encryption and compression
- Access control and validation
- Audit trail generation and integrity checking
- Secure backup and transfer protocols

### **📊 Format Support**
- Multiple export formats for different use cases
- Schema validation and type checking
- Compression and optimization for large datasets
- Timestamp and versioning support

This command provides comprehensive data export and backup capabilities with security, validation, and multi-format support.