---
description: Knowledge integration and synthesis from multiple sources
argument-hint: <topic> [options]
category: research
permissions: [read, browser, mcp]
sparc-alignment: [specification, pseudocode, refinement]
implementation: [knowledge-integration, evidence-synthesis]
---

# Synthesis Command

Integrate and synthesize knowledge from multiple sources into coherent insights.

## **Command Options**

### **Target Specification**
- `topic` - Subject or domain for synthesis
- `--sources=[list]` - Source types to integrate (default: web,academic,industry)
- `--depth=[basic|comprehensive|deep]` - Synthesis depth (default: comprehensive)
- `--validation=[yes|no]` - Cross-source validation (default: yes)

### **Synthesis Configuration**
- `--framework=[integrative|analytical|critical]` - Synthesis approach (default: integrative)
- `--weighting=[equal|expertise|recency]` - Source weighting (default: expertise)
- `--conflicts=[yes|no]` - Handle conflicting information (default: yes)
- `--certainty=[high|medium|low]` - Certainty level (default: medium)

### **Output Configuration**
- `--format=[markdown|json|report]` - Output format (default: markdown)
- `--evidence=[yes|no]` - Include supporting evidence (default: yes)
- `--gaps=[yes|no]` - Identify knowledge gaps (default: yes)
- `--recommendations=[yes|no]` - Provide recommendations (default: yes)

## **Synthesis Frameworks**

### **🔗 Integrative Synthesis**
- **Purpose**: Combine diverse knowledge into unified understanding
- **Process**: Identify patterns, resolve conflicts, create coherence
- **Use Case**: Complex problems requiring multiple perspectives
- **Output**: Holistic insights with evidence support

### **🔍 Analytical Synthesis**
- **Purpose**: Critical evaluation and comparison of sources
- **Process**: Systematic analysis, validation, and ranking
- **Use Case**: Decision support with risk assessment
- **Output**: Evidence-based conclusions with confidence levels

### **⚖️ Critical Synthesis**
- **Purpose**: High-stakes decisions with conflicting information
- **Process**: Identify contradictions, evaluate sources, determine reliability
- **Use Case**: Strategic planning and risk management
- **Output**: Weighted recommendations with uncertainty quantification

## **Knowledge Integration**

### **📚 Source Types**
```markdown
## Source Integration for [TOPIC]

### Academic Sources
- **Peer-Reviewed Journals**: [High credibility research]
- **Conference Papers**: [Latest research findings]
- **Theses and Dissertations**: [In-depth academic work]
- **Academic Databases**: [IEEE Xplore, ACM Digital Library]

### Industry Sources
- **Market Research Reports**: [Gartner, Forrester, McKinsey]
- **White Papers**: [Vendor research and analysis]
- **Case Studies**: [Real-world applications and results]
- **Technical Documentation**: [API docs, architecture guides]

### Web Sources
- **Expert Blogs**: [Industry thought leadership]
- **Technical Forums**: [Community knowledge and discussions]
- **News Articles**: [Current events and developments]
- **Social Media**: [Trends and community insights]

### Internal Knowledge
- **Project Documentation**: [Existing specifications and decisions]
- **Team Expertise**: [Internal subject matter experts]
- **Historical Data**: [Past projects and lessons learned]
- **Proprietary Research**: [Internal studies and analysis]
```

### **🔍 Source Validation**
```markdown
## Source Quality Assessment

### Academic Sources
- **Peer Review Status**: [Journal impact factor]
- **Publication Recency**: [Publication date relevance]
- **Author Credibility**: [Institutional affiliation]
- **Methodology Rigor**: [Research approach validity]

### Industry Sources
- **Vendor Independence**: [Potential bias assessment]
- **Data Freshness**: [Information currentness]
- **Sample Size**: [Statistical significance]
- **Methodology Transparency**: [Research approach disclosure]

### Web Sources
- **Domain Authority**: [Site expertise and reputation]
- **Source Verification**: [Cross-reference validation]
- **Content Quality**: [Accuracy and completeness]
- **Bias Detection**: [Perspective and framing analysis]
```

## **Synthesis Process**

### **🔍 Analysis Phase**
```markdown
## Knowledge Analysis for [TOPIC]

### Source Evaluation
- **Reliability Assessment**: [Source credibility scoring]
- **Bias Identification**: [Perspective and limitation analysis]
- **Contradiction Resolution**: [Conflicting information handling]
- **Gap Analysis**: [Missing information identification]

### Pattern Recognition
- **Trend Identification**: [Recurring themes and patterns]
- **Relationship Mapping**: [Concept connections and dependencies]
- **Anomaly Detection**: [Outlier and exception identification]
- **Insight Generation**: [Novel connections and conclusions]
```

### **🔗 Integration Phase**
```markdown
## Knowledge Integration for [TOPIC]

### Synthesis Approach
- **Framework Selection**: [Integrative/Analytical/Critical]
- **Weighting Strategy**: [Equal/Expertise/Recency-based]
- **Conflict Resolution**: [Contradiction handling approach]
- **Validation Method**: [Cross-source verification]

### Knowledge Structuring
- **Conceptual Framework**: [Organizing principles]
- **Relationship Mapping**: [Connection and dependency analysis]
- **Evidence Hierarchy**: [Source reliability and importance]
- **Gap Identification**: [Knowledge completeness assessment]
```

### **🎯 Output Generation**
```markdown
## Synthesis Output for [TOPIC]

### Executive Summary
- **Key Insights**: [Primary findings and conclusions]
- **Confidence Level**: [High/Medium/Low assessment]
- **Strategic Implications**: [Business and technical impact]
- **Recommendations**: [Actionable next steps]

### Detailed Analysis
- **Technical Assessment**: [Feasibility and constraints]
- **Business Evaluation**: [Market viability and ROI]
- **Risk Analysis**: [Implementation challenges and mitigations]

### Evidence and Sources
- **Supporting Evidence**: [Key facts and data points]
- **Source References**: [Citations and links]
- **Knowledge Gaps**: [Areas requiring further research]
```

## **Usage Examples**

```bash
# Comprehensive knowledge synthesis
/synthesis "enterprise architecture trends" --sources=academic,industry,web --depth=comprehensive --validation=yes

# Technical topic synthesis
/synthesis "cloud security best practices" --framework=analytical --weighting=expertise --evidence=yes

# Business-focused synthesis
/synthesis "digital transformation ROI" --sources=industry,web --framework=integrative --gaps=yes

# Critical decision synthesis
/synthesis "technology platform selection" --framework=critical --certainty=high --conflicts=yes
```

## **Integration Features**

### **Multi-Source Integration**
- Automated source collection and validation
- Cross-source contradiction resolution
- Expertise-based source weighting
- Real-time knowledge base updates

### **Quality Assurance**
- Source reliability scoring and filtering
- Fact-checking and verification
- Bias detection and mitigation
- Knowledge gap identification

### **Knowledge Management**
- Persistent knowledge base with versioning
- Search and retrieval capabilities
- Integration with existing documentation systems

This command enables comprehensive knowledge synthesis that transforms multiple sources into actionable, evidence-based insights for strategic decision-making.