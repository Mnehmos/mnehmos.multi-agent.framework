---
description: Multi-perspective analysis with comprehensive insight generation
argument-hint: <target> [options]
category: research
permissions: [read, browser, mcp]
sparc-alignment: [specification, pseudocode, refinement]
implementation: [multi-perspective-analysis]
---

# Analyze Command

Execute multi-perspective analysis with comprehensive insight generation and synthesis.

## **Command Options**

### **Target Specification**
- `target` - Topic, problem, or data to analyze
- `--perspectives=[list]` - Analysis perspectives (default: technical,business,user,ethical)
- `--depth=[quick|standard|comprehensive]` - Analysis depth (default: standard)
- `--synthesis=[yes|no]` - Include insight synthesis (default: yes)

### **Analysis Configuration**
- `--framework=[swot|five-forces|pestel]` - Analysis framework (default: swot)
- `--context=[project]` - Analysis context (default: current)
- `--stakeholders=[list]` - Stakeholder perspectives (default: all)
- `--timeframe=[days|weeks]` - Analysis timeframe (default: auto)

### **Output Configuration**
- `--format=[markdown|json|report]` - Output format (default: markdown)
- `--visualizations=[yes|no]` - Include charts (default: yes)
- `--recommendations=[yes|no]` - Include recommendations (default: yes)

## **Analysis Perspectives**

### **🔬 Technical Perspective**
- **Feasibility Assessment**: Technical viability and constraints
- **Architecture Evaluation**: System design and integration points
- **Performance Analysis**: Scalability and efficiency considerations
- **Security Review**: Vulnerabilities and protection mechanisms

### **💼 Business Perspective**
- **Market Analysis**: Size, growth, and competition
- **ROI Evaluation**: Cost-benefit and value proposition
- **Risk Assessment**: Business and operational risks
- **Strategic Fit**: Alignment with business objectives

### **👥 User Perspective**
- **Experience Design**: Usability and accessibility
- **Feature Requirements**: Functional and emotional needs
- **Adoption Analysis**: Learning curve and resistance factors
- **Feedback Integration**: User testing and validation

### **⚖️ Ethical Perspective**
- **Impact Assessment**: Social and environmental implications
- **Privacy Considerations**: Data protection and user rights
- **Bias Analysis**: Fairness and representation issues
- **Regulatory Compliance**: Legal and policy adherence

## **Analysis Frameworks**

### **🎯 SWOT Analysis**
```markdown
## SWOT Analysis for [TARGET]

### Strengths
- **Technical**: [Technical advantages and capabilities]
- **Business**: [Market position and resources]
- **Operational**: [Process and team advantages]

### Weaknesses
- **Technical**: [Limitations and gaps]
- **Business**: [Market challenges and constraints]
- **Operational**: [Process inefficiencies]

### Opportunities
- **Market**: [Growth areas and trends]
- **Technical**: [Innovation possibilities]
- **Operational**: [Efficiency improvements]

### Threats
- **Market**: [Competitive pressures and changes]
- **Technical**: [Obsolescence risks]
- **Regulatory**: [Compliance challenges]
```

### **🔀 Five Forces Analysis**
```markdown
## Five Forces Analysis for [TARGET]

### Competitive Rivalry
- **Market Saturation**: [Industry competition level]
- **Substitute Products**: [Alternative solutions]
- **Bargaining Power**: [Customer and supplier dynamics]
- **New Entrants**: [Barriers to entry]
- **Supplier Power**: [Dependency and control issues]
```

### **🔍 PESTEL Analysis**
```markdown
## PESTEL Analysis for [TARGET]

### Political Factors
- **Regulations**: [Government policies and compliance]
- **Stability**: [Political environment impact]
- **Trade Policies**: [International trade agreements]

### Economic Factors
- **Market Growth**: [Industry expansion rates]
- **Inflation**: [Cost and pricing impacts]
- **Exchange Rates**: [International business effects]

### Social Factors
- **Demographics**: [Population and user trends]
- **Cultural Trends**: [Social behavior changes]
- **Technology Adoption**: [Digital transformation rates]

### Technological Factors
- **Innovation Rate**: [Technology development speed]
- **Infrastructure**: [Digital capability maturity]
- **Automation**: [Process automation opportunities]

### Environmental Factors
- **Sustainability**: [Environmental impact requirements]
- **Climate Change**: [Weather and disaster risks]
- **Resource Scarcity**: [Material and energy constraints]

### Legal Factors
- **Data Protection**: [Privacy and security laws]
- **Intellectual Property**: [Patent and copyright issues]
- **Labor Laws**: [Employment and contractor regulations]
```

## **Usage Examples**

```bash
# Comprehensive multi-perspective analysis
/analyze market-entry-strategy --perspectives=technical,business,user --depth=comprehensive --synthesis=yes

# SWOT analysis for product decision
/analyze new-product-launch --framework=swot --stakeholders=marketing,engineering,finance

# Five forces competitive analysis
/analyze competitive-landscape --framework=five-forces --context=industry

# PESTEL market analysis
/analyze expansion-opportunity --framework=pestel --timeframe=weeks --visualizations=yes

# Technical feasibility study
/analyze technology-adoption --perspectives=technical,user --depth=standard --recommendations=yes
```

## **Output Structure**

### **📊 Executive Summary**
```markdown
# Multi-Perspective Analysis: [TARGET]

## Key Insights
- **Primary Finding**: [Main discovery]
- **Strategic Implication**: [Business impact]
- **Risk Assessment**: [Major concerns]
- **Recommendation**: [Primary action item]

## Perspective Synthesis
- **Technical Assessment**: [Feasibility and constraints]
- **Business Evaluation**: [Market viability and ROI]
- **User Analysis**: [Experience and adoption factors]
- **Ethical Considerations**: [Social and privacy impacts]
```

### **📈 Detailed Analysis**
```markdown
## Technical Analysis
### Feasibility Assessment
- **Current Capabilities**: [Existing technical foundation]
- **Required Capabilities**: [Needed technical additions]
- **Implementation Complexity**: [Development effort estimation]
- **Technology Risks**: [Technical challenges and mitigations]

## Business Analysis
### Market Opportunity
- **Total Addressable Market**: [Market size and growth]
- **Competitive Position**: [Market share and differentiation]
- **Revenue Potential**: [Financial projections and ROI]

### User Analysis
### Target Audience
- **User Segments**: [Primary user groups]
- **Experience Requirements**: [Usability and feature needs]
- **Adoption Barriers**: [Learning curve and resistance]
```

## **🎯 Recommendations**
```markdown
## Strategic Recommendations

### Short-term Actions
- **Immediate Priorities**: [Critical next steps]
- **Resource Allocation**: [Team and budget assignments]
- **Risk Mitigation**: [Immediate risk addressing]

### Medium-term Initiatives
- **Development Roadmap**: [6-18 month plans]
- **Market Entry Strategy**: [Go-to-market approach]
- **Partnership Development**: [Potential collaborations]

### Long-term Vision
- **Strategic Positioning**: [3-5 year goals]
- **Technology Evolution**: [Platform and capability development]
- **Market Leadership**: [Industry leadership strategies]
```

## **Integration Features**

### **Multi-Agent Coordination**
- Coordinate analysis across specialist agents
- Synthesize perspectives into unified insights
- Maintain consistency across analysis types

### **Automated Analysis**
- Pattern recognition and trend identification
- Data visualization and chart generation
- Recommendation engine with scoring

### **Knowledge Integration**
- Integrate with research databases and knowledge bases
- Maintain analysis history and learning
- Provide context-aware recommendations

This command enables comprehensive multi-perspective analysis that transforms complex problems into actionable strategic insights.