---
description: Competitive analysis with market positioning insights
argument-hint: <target> [options]
category: research
permissions: [read, browser, mcp]
sparc-alignment: [specification]
implementation: [competitive-intelligence, market-analysis]
---

# Compare Command

Execute comprehensive competitive analysis with market positioning and strategic insights.

## **Command Options**

### **Target Specification**
- `target` - Company, product, or market to analyze
- `--competitors=[list]` - Specific competitors to analyze (default: auto-detect)
- `--metrics=[list]` - Analysis metrics (default: market-share,features,pricing)
- `--timeframe=[months|quarters|years]` - Analysis timeframe (default: 12 months)
- `--depth=[quick|standard|comprehensive]` - Analysis depth (default: standard)

### **Analysis Configuration**
- `--sources=[web|industry|financial]` - Data sources (default: web,industry)
- `--regions=[list]` - Geographic regions (default: global)
- `--segments=[list]` - Market segments (default: all)
- `--benchmarks=[yes|no]` - Include benchmarking (default: yes)

### **Output Configuration**
- `--format=[markdown|json|report]` - Output format (default: markdown)
- `--visualizations=[yes|no]` - Include charts (default: yes)
- `--recommendations=[yes|no]` - Include strategic recommendations (default: yes)

## **Competitive Analysis Framework**

### **🎯 Market Positioning**
```markdown
## Market Analysis for [TARGET]

### Market Size and Growth
- **Total Addressable Market**: [Market size in USD/billions]
- **Growth Rate**: [Annual growth percentage]
- **Market Segments**: [Key customer segments]
- **Geographic Distribution**: [Regional market breakdown]

### Competitive Landscape
- **Market Leaders**: [Top 3-5 competitors]
- **Market Challengers**: [Emerging competitors]
- **Market Followers**: [Smaller competitors]
- **New Entrants**: [Recent market entries]

### Differentiation Factors
- **Product Features**: [Unique selling propositions]
- **Technology Stack**: [Technical advantages]
- **Business Model**: [Revenue and pricing differences]
- **Brand Positioning**: [Market perception and awareness]
```

### **📊 Feature Comparison**
```markdown
## Feature Comparison Analysis

### Core Features
- **Feature 1**: [Competitor A vs B vs C]
- **Feature 2**: [Capability comparison matrix]
- **Feature 3**: [User experience comparison]
- **Feature 4**: [Integration capabilities]

### Advanced Features
- **Feature 5**: [AI/ML capabilities]
- **Feature 6**: [Security and compliance]
- **Feature 7**: [Performance and scalability]
- **Feature 8**: [Support and ecosystem]

### Pricing Analysis
- **Pricing Models**: [Subscription vs perpetual vs freemium]
- **Value Proposition**: [Cost-benefit analysis]
- **Total Cost of Ownership**: [3-5 year TCO]
- **Hidden Costs**: [Implementation, training, maintenance]
```

### **🔍 Strengths and Weaknesses**
```markdown
## SWOT Analysis for [TARGET]

### Competitive Advantages
- **Technology Leadership**: [Technical capabilities]
- **Market Position**: [Market share and brand recognition]
- **Customer Base**: [User loyalty and retention]
- **Financial Resources**: [Funding and profitability]

### Competitive Disadvantages
- **Legacy Systems**: [Technical debt and constraints]
- **Market Limitations**: [Geographic or regulatory restrictions]
- **Resource Constraints**: [Team size or budget limitations]
- **Innovation Gaps**: [Missing capabilities or features]
```

## **Usage Examples**

```bash
# Comprehensive competitive analysis
/compare "cloud crm market" --competitors=salesforce,hubspot,zoho --timeframe=12months --depth=comprehensive

# Feature-focused comparison
/compare "project management tools" --metrics=features,pricing --segments=enterprise,smb

# Market positioning analysis
/compare "e-commerce platforms" --regions=north-america,europe --benchmarks=yes --visualizations=yes

# Quick competitive overview
/compare main-competitor --depth=quick --format=json

# Industry analysis with financial data
/compare "database market" --sources=industry,financial --timeframe=quarters
```

## **Output Structure**

### **📈 Market Intelligence**
```markdown
# Competitive Intelligence Report: [TARGET]

## Executive Summary
- **Market Position**: [Current standing and trajectory]
- **Key Opportunities**: [Strategic growth areas]
- **Primary Threats**: [Major competitive challenges]
- **Recommendations**: [Strategic action items]

## Market Analysis
### Market Size and Dynamics
- **Total Addressable Market**: [Market valuation]
- **Growth Rate**: [Annual percentage]
- **Key Trends**: [Market developments and shifts]

### Competitive Landscape
- **Market Share Distribution**: [Competitor percentages]
- **Competitive Positioning**: [Relative strengths and weaknesses]
- **Market Concentration**: [Industry consolidation level]

## Feature Analysis
### Capability Comparison
- **Feature Parity**: [Standard vs differentiated features]
- **Innovation Gap**: [Missing capabilities]
- **Quality Assessment**: [Relative quality metrics]
- **User Experience**: [Comparative UX analysis]

## Strategic Recommendations
### Market Entry
- **Positioning Strategy**: [Differentiation approach]
- **Pricing Strategy**: [Competitive pricing model]
- **Go-to-Market Plan**: [Launch and growth strategy]

### Competitive Response
- **Feature Development**: [Capability enhancement priorities]
- **Market Defense**: [Competitive response strategies]
- **Partnership Strategy**: [Ecosystem development]

This command provides comprehensive competitive analysis with market intelligence, feature comparison, and strategic positioning insights.