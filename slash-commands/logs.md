---
description: Activity log viewing with filtering and analysis capabilities
argument-hint: [filter] [options]
category: utility
permissions: [read]
sparc-alignment: [completion]
implementation: [state-management, traceability-documentation]
---

# Logs Command

View and analyze activity logs with comprehensive filtering and analysis capabilities.

## **Command Options**

### **Log Specification**
- `filter` - Filter logs by agent, mode, project, or time range
- `--agent=[name]` - Show logs for specific agent (default: all)
- `--mode=[name]` - Filter by mode (default: all)
- `--project=[name]` - Filter by project (default: all)
- `--level=[info|warn|error]` - Log level filter (default: all)
- `--timeframe=[hours|days|weeks]` - Time range (default: 24 hours)

### **Display Configuration**
- `--format=[table|json]` - Output format (default: table)
- `--tail=[yes|no]` - Show recent entries first (default: no)
- `--analysis=[yes|no]` - Include log analysis (default: yes)
- `--export=[yes|no]` - Export capability (default: no)

## **Log Categories**

### **🔄 Agent Activity**
- **Task Execution**: Command usage and results
- **Mode Transitions**: Agent switching and context changes
- **Performance Metrics**: Resource usage and efficiency
- **Error Tracking**: Failures and recovery actions

### **🏗️ System Events**
- **Build Processes**: Compilation and deployment activities
- **Security Events**: Authentication and authorization attempts
- **Performance Events**: Resource utilization and bottlenecks
- **Integration Events**: External service connections and API calls

### **📊 User Interactions**
- **Command Usage**: Frequency and patterns of use
- **Session Management**: Login/logout activities
- **Feature Usage**: Tool and feature access patterns
- **Error Encounters**: Issues and resolution attempts

## **Log Analysis**

### **📈 Activity Metrics**
```markdown
## Activity Analysis for [TIMEFRAME]

### Agent Performance
- **Task Completion Rate**: [Percentage of successful executions]
- **Average Response Time**: [Time per operation]
- **Error Rate**: [Percentage of failed operations]
- **Resource Utilization**: [CPU and memory usage]

### System Health
- **Uptime**: [System availability percentage]
- **Response Time**: [Average system response time]
- **Error Rate**: [System error frequency]
```

### **🔍 Pattern Analysis**
```markdown
## Usage Pattern Analysis for [TIMEFRAME]

### Command Frequency
- **Most Used Commands**: [Top 5 commands]
- **Peak Usage Times**: [High activity periods]
- **User Behavior Patterns**: [Common interaction sequences]
- **Feature Adoption**: [New feature usage trends]

### Error Patterns
- **Common Errors**: [Frequent failure modes]
- **Recovery Actions**: [Successful resolution strategies]
```

## **Usage Examples**

```bash
# Show recent activity
/logs --timeframe=24hours --tail=yes

# Filter by specific agent
/logs --agent=architect --level=error --analysis=yes

# Filter by project
/logs --project=ecommerce --timeframe=weeks --format=json

# Comprehensive analysis
/logs --timeframe=weeks --analysis=yes --format=table

# Export logs
/logs --export=yes --timeframe=days --format=json
```

## **Integration Features**

### **🔄 Multi-Agent Coordination**
- Cross-agent activity correlation
- Mode transition tracking and validation
- Performance optimization across agent workflows

### **📊 Analytics Integration**
- Real-time log processing and analysis
- Historical trend identification and reporting
- Automated alerting for anomalies

### **🔍 Security Monitoring**
- Authentication attempt tracking and analysis
- Permission violation detection and alerting
- Suspicious activity pattern identification

This command provides comprehensive activity logging and analysis capabilities for monitoring system health and user interactions across the multi-agent framework.