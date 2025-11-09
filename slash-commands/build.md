---
description: Execute build and deployment workflows with quality gates
argument-hint: <target> [options]
category: development
permissions: [read, edit, command, browser]
sparc-alignment: [pseudocode, refinement, completion]
implementation: [automated-development-workflows, semantic-guardrails]
---

# Build Command

Execute comprehensive build and deployment workflows with automated quality gates and validation.

## **Command Options**

### **Target Specification**
- `target` - Project, component, or branch to build
- `--env=[dev|staging|prod]` - Target environment (default: staging)
- `--strategy=[incremental|full|blue-green]` - Build strategy (default: incremental)
- `--parallel=[yes|no]` - Enable parallel builds (default: yes)

### **Build Configuration**
- `--test=[unit|integration|e2e|all]` - Test types to run (default: all)
- `--lint=[yes|no]` - Run code linting (default: yes)
- `--security=[yes|no]` - Run security scan (default: yes)
- `--optimize=[yes|no]` - Apply optimizations (default: yes)
- `--cache=[yes|no]` - Use build cache (default: yes)

### **Deployment Configuration**
- `--deploy=[yes|no]` - Deploy after build (default: yes)
- `--rollback=[yes|no]` - Enable rollback capability (default: yes)
- `--monitor=[yes|no]` - Setup monitoring (default: yes)
- `--notify=[yes|no]` - Send notifications (default: yes)

### **Quality Gates**
- `--coverage=[number]` - Minimum test coverage required (default: 80)
- `--performance=[yes|no]` - Performance benchmarks (default: yes)
- `--security=[yes|no]` - Security validation (default: yes)
- `--docs=[yes|no]` - Documentation check (default: yes)

### **Output Configuration**
- `--format=[json|markdown|yaml]` - Output format (default: markdown)
- `--verbose=[yes|no]` - Detailed output (default: no)
- `--artifacts=[yes|no]` - Include build artifacts (default: yes)

## **Build Strategies**

### **🔄 Incremental Build**
- **Use Case**: Regular development cycles
- **Benefits**: Fast feedback, reduced risk
- **Process**: Build only changed components
- **Deployment**: Continuous deployment to staging

### **🔵 Full Build**
- **Use Case**: Release preparation
- **Benefits**: Complete validation, fresh artifacts
- **Process**: Build entire application from scratch
- **Deployment**: Production deployment with validation

### **🟢 Blue-Green Deployment**
- **Use Case**: Zero-downtime production updates
- **Benefits**: Instant rollback capability, gradual traffic shift
- **Process**: Parallel deployment with health checks
- **Deployment**: Traffic routing between environments

## **Quality Gates**

### **🧪 Test Gates**
```markdown
## Test Execution
### Unit Tests
- **Framework**: Jest, Mocha, PyTest
- **Coverage**: Minimum 80% required
- **Threshold**: Build fails if coverage < 80%

### Integration Tests
- **Scope**: API endpoints, database interactions
- **Environment**: Dockerized test environment
- **Data**: Test fixtures and mocks

### End-to-End Tests
- **Scenarios**: Critical user journeys
- **Environment**: Staging or production-like
- **Validation**: Business logic verification
```

### **🔍 Code Quality Gates**
```markdown
## Static Analysis
### Linting
- **Tools**: ESLint, Pylint, SonarQube
- **Rules**: Project-specific configuration
- **Threshold**: Zero lint errors allowed

### Security Scanning
- **Tools**: Snyk, OWASP ZAP, CodeQL
- **Vulnerabilities**: Zero high-severity issues allowed
- **Dependencies**: Check for known CVEs

### Complexity Analysis
- **Metrics**: Cyclomatic complexity, maintainability index
- **Threshold**: Maximum complexity score allowed
```

### **⚡ Performance Gates**
```markdown
## Performance Benchmarks
### Load Testing
- **Response Time**: < 200ms for API endpoints
- **Throughput**: > 1000 requests/second
- **Memory Usage**: < 512MB for application

### Resource Profiling
- **CPU Usage**: < 70% average utilization
- **Database Queries**: < 100ms average response time
- **Network Latency**: < 50ms for internal calls
```

## **Deployment Workflows**

### **🏗️ Build Pipeline**
```yaml
stages:
  - name: checkout
    uses: actions/checkout@v3
    
  - name: setup
    run: npm ci
    
  - name: lint
    run: npm run lint
    
  - name: test
    run: npm run test:coverage
    
  - name: build
    run: npm run build
    
  - name: security-scan
    run: npm run security:scan
    
  - name: package
    run: npm run package
```

### **🚀 Deployment Pipeline**
```yaml
environments:
  staging:
    - name: deploy-staging
      run: npm run deploy:staging
      environment: STAGING
      
  production:
    - name: deploy-production
      run: npm run deploy:production
      environment: PRODUCTION
      manual-approval: required
```

### **🔄 Rollback Strategy**
```yaml
rollback:
  triggers:
    - health-check-failure
    - performance-degradation
    - error-rate-threshold
    
  procedures:
    - name: instant-rollback
      duration: 5 minutes
    - name: gradual-rollback
      duration: 30 minutes
    - name: full-rollback
      duration: 2 hours
```

## **Usage Examples**

```bash
# Standard build with all gates
/build --env=staging --test=all --lint=yes --security=yes --optimize=yes

# Production build with deployment
/build --env=prod --strategy=blue-green --deploy=yes --monitor=yes --notify=yes

# Incremental build for development
/build --strategy=incremental --parallel=yes --cache=yes --verbose=yes

# Full build with custom quality gates
/build --coverage=90 --performance=yes --docs=yes --artifacts=yes --format=json
```

## **Integration Features**

### **CI/CD Integration**
- GitHub Actions, GitLab CI, Jenkins pipeline support
- Automatic artifact generation and storage
- Environment-specific configuration management
- Rollback and recovery procedures

### **Quality Assurance**
- Automated test execution and reporting
- Security vulnerability scanning and blocking
- Performance benchmarking and alerting
- Code quality metrics and trend analysis

### **Monitoring Integration**
- Real-time build status tracking
- Deployment health monitoring
- Performance metrics collection
- Error alerting and notification

This command provides enterprise-grade build and deployment capabilities with comprehensive quality gates and automated workflows.