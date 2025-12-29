# arXiv MCP Tool Instructions

> Academic paper search and retrieval from the arXiv preprint repository

## Overview

The arXiv MCP provides tools for searching and retrieving academic papers from arXiv. Use these tools for research tasks, literature reviews, and accessing full paper content.

## Available Tools

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `search_papers` | Search by various criteria | Finding papers on a topic |
| `get_paper` | Get paper details by ID | Retrieving specific paper |
| `search_by_category` | Search within a category | Browsing category literature |
| `get_paper_content` | Extract PDF text | Reading full paper content |

## Tool Details

### search_papers

Search for papers using flexible query options.

**Parameters:**
- `query` - General search across all fields
- `category` - arXiv category (e.g., `cs.AI`, `physics.optics`)
- `author` - Author name
- `title` - Words in title
- `abstract` - Words in abstract
- `start` - Pagination start index (0-based)
- `max_results` - Max results (default: 10, max: 2000)
- `sort_by` - `relevance`, `lastUpdatedDate`, `submittedDate`
- `sort_order` - `ascending`, `descending`

**Example:**
```typescript
// Search for machine learning papers
const results = await search_papers({
  query: "transformer attention mechanism",
  category: "cs.LG",
  max_results: 20,
  sort_by: "submittedDate",
  sort_order: "descending"
});

// Search by author
const authorPapers = await search_papers({
  author: "Yann LeCun",
  max_results: 10
});

// Search in title
const titleSearch = await search_papers({
  title: "large language model",
  max_results: 15
});
```

**Response Structure:**
```json
{
  "feed_title": "arXiv Query: ...",
  "total_results": 150000,
  "start_index": 0,
  "items_per_page": 10,
  "papers": [
    {
      "id": "http://arxiv.org/abs/2104.13478",
      "arxiv_id": "2104.13478",
      "title": "Paper Title",
      "summary": "Abstract text...",
      "authors": ["Author 1", "Author 2"],
      "published": "2021-04-28T09:00:00Z",
      "updated": "2021-04-28T09:00:00Z",
      "categories": ["cs.LG", "cs.AI"],
      "links": [...]
    }
  ]
}
```

### get_paper

Get detailed information about a specific paper.

**Parameters:**
- `paper_id` (required) - arXiv ID (e.g., `2104.13478` or `cs/0001001`)

**Example:**
```typescript
const paper = await get_paper({
  paper_id: "2104.13478"
});
```

### search_by_category

Search for papers in a specific arXiv category.

**Parameters:**
- `category` (required) - arXiv category
- `start`, `max_results`, `sort_by`, `sort_order` - Same as `search_papers`

**Example:**
```typescript
// Get recent AI papers
const aiPapers = await search_by_category({
  category: "cs.AI",
  max_results: 25,
  sort_by: "submittedDate",
  sort_order: "descending"
});
```

### get_paper_content

Download and extract full text from a paper's PDF.

**Parameters:**
- `paper_id` (required) - arXiv ID

**Features:**
- Downloads PDF from arXiv servers
- Caches PDFs locally to avoid redundant downloads
- Extracts and cleans text content
- Returns plain text suitable for analysis

**Example:**
```typescript
const content = await get_paper_content({
  paper_id: "2104.13478"
});
// Returns: Plain text content of the paper
```

## Common arXiv Categories

### Computer Science
| Category | Name |
|----------|------|
| `cs.AI` | Artificial Intelligence |
| `cs.LG` | Machine Learning |
| `cs.CL` | Computation and Language |
| `cs.CV` | Computer Vision and Pattern Recognition |
| `cs.CR` | Cryptography and Security |
| `cs.DB` | Databases |
| `cs.SE` | Software Engineering |
| `cs.PL` | Programming Languages |

### Mathematics
| Category | Name |
|----------|------|
| `math.CO` | Combinatorics |
| `math.ST` | Statistics Theory |
| `math.OC` | Optimization and Control |

### Physics
| Category | Name |
|----------|------|
| `physics.optics` | Optics |
| `quant-ph` | Quantum Physics |

### Statistics
| Category | Name |
|----------|------|
| `stat.ML` | Machine Learning (Statistics) |

See [arXiv Category Taxonomy](https://arxiv.org/category_taxonomy) for complete list.

## Integration with Multi-Agent Framework

### Deep Research Mode
Primary user of arXiv MCP for:
- Literature reviews
- Finding related work
- Extracting methodology details
- Building bibliographies

**Workflow:**
```typescript
// 1. Search for relevant papers
const papers = await search_papers({
  query: "retrieval augmented generation",
  category: "cs.CL",
  max_results: 50,
  sort_by: "relevance"
});

// 2. Get details on promising papers
for (const paper of papers.papers.slice(0, 5)) {
  const details = await get_paper({ paper_id: paper.arxiv_id });
  // Analyze abstract and metadata
}

// 3. Extract full content for deep analysis
const fullContent = await get_paper_content({
  paper_id: topPaper.arxiv_id
});
// Parse and analyze full paper
```

### Architect Mode
- Research architectural patterns from academic literature
- Find papers on system design approaches

### Planner Mode
- Research methodologies for project planning
- Find papers on development processes

### Ask Mode
- Answer questions about research topics
- Provide paper references for claims

## Best Practices

1. **Start Broad, Then Narrow**
   - Begin with general query search
   - Refine with category or author filters
   - Use title/abstract search for specific concepts

2. **Use Pagination for Large Results**
   - Set reasonable `max_results` (10-50)
   - Use `start` parameter for pagination
   - Don't request 2000 results unless necessary

3. **Cache-Friendly Content Retrieval**
   - PDFs are cached locally after first download
   - `get_paper_content` is efficient for repeated access
   - Use `get_paper` for metadata without downloading PDF

4. **Combine with Index Foundry**
   - Download papers with `get_paper_content`
   - Index with Index Foundry for semantic search
   - Build custom research knowledge bases

## Example: Literature Review Workflow

```typescript
// 1. Define research query
const topic = "prompt engineering techniques";

// 2. Search for relevant papers
const searchResults = await search_papers({
  query: topic,
  max_results: 100,
  sort_by: "relevance"
});

// 3. Filter by date and category
const recentPapers = searchResults.papers.filter(p => 
  new Date(p.published) > new Date('2023-01-01') &&
  p.categories.some(c => c.startsWith('cs.'))
);

// 4. Extract content from top papers
const paperContents = [];
for (const paper of recentPapers.slice(0, 10)) {
  const content = await get_paper_content({ paper_id: paper.arxiv_id });
  paperContents.push({
    id: paper.arxiv_id,
    title: paper.title,
    authors: paper.authors,
    content: content
  });
}

// 5. Analyze and synthesize findings
// ... process paperContents for insights
```

## Constraints

- MUST respect arXiv API rate limits (be reasonable with requests)
- SHOULD cache paper content to avoid redundant downloads
- SHOULD cite papers properly when using their content
- SHOULD use appropriate categories for domain-specific searches
