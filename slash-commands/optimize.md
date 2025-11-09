---
description: Performance optimization and bottleneck analysis
argument-hint: <target> [options]
category: development
permissions: [read, edit, command]
sparc-alignment: [refinement]
implementation: [performance-optimization, bottleneck-analysis]
---

# Optimize Command

Analyze and optimize system performance through comprehensive profiling and bottleneck identification.

## **Command Options**

### **Target Specification**
- `target` - System, component, or process to optimize
- `--type=[cpu|memory|io|database|network]` - Optimization type (default: auto-detect)
- `--depth=[quick|standard|comprehensive]` - Analysis depth (default: standard)
- `--benchmark=[yes|no]` - Include performance benchmarking (default: yes)

### **Optimization Configuration**
- `--profile=[yes|no]` - Enable performance profiling (default: yes)
- `--bottlenecks=[yes|no]` - Identify bottlenecks (default: yes)
- `--recommendations=[yes|no]` - Provide optimization suggestions (default: yes)
- `--validate=[yes|no]` - Validate optimizations (default: yes)

### **Output Configuration**
- `--format=[markdown|json|report]` - Output format (default: markdown)
- `--metrics=[yes|no]` - Include performance metrics (default: yes)
- `--charts=[yes|no]` - Generate performance charts (default: no)

## **Optimization Types**

### **⚡ CPU Optimization**
- **Algorithm Efficiency**: Improve time complexity and reduce operations
- **Parallel Processing**: Utilize multiple cores effectively
- **Caching**: Implement CPU-level caching strategies
- **Compilation**: Use optimized compiler flags and settings

### **💾 Memory Optimization**
- **Memory Leaks**: Detect and fix memory allocation issues
- **Garbage Collection**: Optimize object lifecycle and cleanup
- **Data Structures**: Choose efficient memory layouts
- **Buffer Management**: Optimize I/O buffer sizes

### **🌐 I/O Optimization**
- **Async Processing**: Use non-blocking I/O operations
- **Batch Operations**: Group I/O requests for efficiency
- **Network Optimization**: Reduce latency and connection overhead
- **File System**: Optimize file access patterns and caching

### **🗄️ Database Optimization**
- **Query Optimization**: Improve SQL queries and indexing
- **Connection Pooling**: Manage database connections efficiently
- **Caching Strategy**: Implement query result caching
- **Transaction Optimization**: Batch database operations

### **🌐 Network Optimization**
- **Connection Reuse**: Use persistent connections
- **Request Batching**: Group multiple operations
- **Compression**: Enable data compression for transfer
- **CDN Integration**: Use content delivery networks

## **Performance Analysis**

### **📊 Metrics Collection**
```markdown
## Performance Metrics for [TARGET]

### CPU Metrics
- **Usage Percentage**: [Current/Target]
- **Core Utilization**: [Number of cores used]
- **Context Switching**: [Rate per second]

### Memory Metrics
- **Heap Usage**: [Current/Maximum]
- **Garbage Collection**: [Frequency/Impact]
- **Memory Leaks**: [Detected/None]

### I/O Metrics
- **Throughput**: [Operations per second]
- **Latency**: [Average/P95/P99]
- **Error Rate**: [Percentage of failed operations]

### Database Metrics
- **Query Time**: [Average/P95/Maximum]
- **Connection Pool**: [Active/Idle/Total]
- **Cache Hit Rate**: [Percentage]
- **Transaction Rate**: [Per second]
```

### **🔍 Bottleneck Analysis**
```markdown
## Bottleneck Identification for [TARGET]

### CPU Bottlenecks
- **High CPU Functions**: [List of intensive operations]
- **Single-threaded Limitations**: [Blocking operations]
- **Algorithm Inefficiency**: [Complexity issues]

### Memory Bottlenecks
- **Memory Leaks**: [Locations and impact]
- **Excessive Allocation**: [Large object creation]
- **Garbage Collection Pressure**: [Frequent collections]

### I/O Bottlenecks
- **Synchronous Operations**: [Blocking I/O calls]
- **File System Contention**: [Lock contention]
- **Network Latency**: [Slow operations identified]

### Database Bottlenecks
- **Slow Queries**: [Inefficient SQL patterns]
- **Connection Exhaustion**: [Pool depletion]
- **Lock Contention**: [Database blocking issues]
- **Index Missing**: [Full table scans]
```

## **Optimization Strategies**

### **🎯 Optimization Recommendations**
```markdown
## Performance Improvements for [TARGET]

### Immediate Optimizations
- **Algorithm Replacement**: [Specific improvements]
- **Caching Implementation**: [Cache strategies]
- **Async Conversion**: [Non-blocking conversions]
- **Resource Pooling**: [Connection reuse]

### Medium-term Optimizations
- **Architecture Changes**: [Structural improvements]
- **Data Structure Optimization**: [Efficient layouts]
- **Database Schema Changes**: [Indexing improvements]

### Long-term Optimizations
- **System Redesign**: [Fundamental changes]
- **Technology Migration**: [Platform changes]
- **Hardware Scaling**: [Infrastructure upgrades]
```

## **Usage Examples**

```bash
# Comprehensive performance optimization
/optimize --type=comprehensive --depth=standard --benchmark=yes --recommendations=yes

# CPU-specific optimization
/optimize --type=cpu --profile=yes --metrics=yes

# Memory optimization with leak detection
/optimize --type=memory --bottlenecks=yes --validate=yes

# Database query optimization
/optimize --type=database --depth=comprehensive --format=report

# Network performance analysis
/optimize --type=network --charts=yes --benchmark=yes
```

## **Integration Features**

### **Performance Profiling**
- Real-time performance monitoring
- Historical performance trend analysis
- Automated bottleneck detection
- Performance regression testing

### **Optimization Automation**
- Automated code transformation suggestions
- Performance-based refactoring recommendations
- Cache optimization implementation
- Database query optimization

### **Monitoring Integration**
- Performance metrics dashboard
- Alert system for degradation
- Optimization impact tracking
- Continuous performance validation

This command provides comprehensive performance optimization capabilities with systematic analysis, bottleneck identification, and automated improvement suggestions.