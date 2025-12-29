# Index Foundry MCP Tool Instructions

> Deterministic Vector Index Factory - RAG indexing and retrieval for knowledge bases

## Overview

Index Foundry provides tools for building searchable vector databases from any content source. It supports two workflows: fine-grained run-based pipelines for experimentation, and project-based workflows for deployable RAG applications.

**Key Principles:**
- **Deterministic**: Same inputs → same outputs
- **Idempotent**: Re-running produces identical artifacts
- **Auditable**: Every operation produces manifests and logs
- **Composable**: Tools can be chained or run independently

## Workflows

### Project-Based Workflow (Recommended)

For most use cases, use the project-based workflow to create deployable RAG applications:

```
project_create → project_add_source → project_build → project_query → project_export → project_serve
```

### Run-Based Pipeline (Advanced)

For fine-grained control and experimentation:

```
Connect → Extract → Normalize → Index → Serve
```

## Project-Based Tools

### Project Management

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `indexfoundry_project_create` | Create a new RAG project | Starting a new knowledge base |
| `indexfoundry_project_list` | List all projects | Viewing available projects |
| `indexfoundry_project_get` | Get project details | Checking project status |
| `indexfoundry_project_delete` | Delete a project | Cleanup (requires `confirm: true`) |

**Example - Create Project:**
```typescript
await indexfoundry_project_create({
  project_id: "docs-search",
  name: "Documentation Search",
  description: "Searchable knowledge base for product docs",
  embedding_model: {
    provider: "openai",
    model_name: "text-embedding-3-small",
    api_key_env: "OPENAI_API_KEY"
  },
  chunk_config: {
    strategy: "recursive",
    max_chars: 1500,
    overlap_chars: 150
  }
});
```

### Source Management

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `indexfoundry_project_add_source` | Add data source | Adding content to index |

**Source Types:**
- `url` - Single webpage
- `sitemap_url` - Crawl all pages in sitemap.xml
- `folder_path` - Local folder with documents
- `pdf_path` - Single PDF file

**Example - Add Sources:**
```typescript
// Add a URL
await indexfoundry_project_add_source({
  project_id: "docs-search",
  url: "https://docs.example.com",
  source_name: "Main Docs",
  tags: ["docs", "official"]
});

// Add local folder
await indexfoundry_project_add_source({
  project_id: "docs-search",
  folder_path: "/path/to/markdown",
  glob: "**/*.md",
  source_name: "Internal Docs",
  tags: ["internal"]
});

// Add PDF
await indexfoundry_project_add_source({
  project_id: "docs-search",
  pdf_path: "/path/to/manual.pdf",
  source_name: "User Manual",
  tags: ["manual", "pdf"]
});
```

### Build & Query

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `indexfoundry_project_build` | Process sources into vectors | After adding sources |
| `indexfoundry_project_query` | Search the vector database | Testing retrieval quality |

**Example - Build & Query:**
```typescript
// Build the index (fetches, chunks, embeds, upserts)
await indexfoundry_project_build({
  project_id: "docs-search"
});

// Query the index
const results = await indexfoundry_project_query({
  project_id: "docs-search",
  query: "How do I configure authentication?",
  mode: "hybrid",  // semantic, keyword, or hybrid
  top_k: 5,
  filter_tags: ["docs"]
});
```

### Deployment

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `indexfoundry_project_export` | Generate deployment files | Ready to deploy |
| `indexfoundry_project_deploy` | Deploy to Railway | Production deployment |
| `indexfoundry_project_serve` | Start local dev server | Testing locally |
| `indexfoundry_project_serve_stop` | Stop dev server | Done testing |
| `indexfoundry_project_serve_status` | Check server status | Monitoring |

**Example - Export & Serve:**
```typescript
// Export deployment files
await indexfoundry_project_export({
  project_id: "docs-search",
  server_name: "docs-search-server",
  include_http: true,
  railway_config: true
});

// Start local server
await indexfoundry_project_serve({
  project_id: "docs-search",
  port: 8080,
  mode: "dev",
  open_browser: true
});
```

## Run-Based Pipeline Tools

### Connect Phase (Fetch Content)

| Tool | Purpose |
|------|---------|
| `indexfoundry_connect_url` | Fetch a single URL |
| `indexfoundry_connect_sitemap` | Crawl sitemap pages |
| `indexfoundry_connect_folder` | Load local files |
| `indexfoundry_connect_pdf` | Fetch PDF file |

### Extract Phase (Convert to Text)

| Tool | Purpose |
|------|---------|
| `indexfoundry_extract_pdf` | PDF to text (layout/plain/OCR) |
| `indexfoundry_extract_html` | HTML to clean text |
| `indexfoundry_extract_document` | Generic extraction (md, txt, csv, json) |
| `indexfoundry_extract_tables` | Extract and linearize tables |

### Normalize Phase (Chunk & Enrich)

| Tool | Purpose |
|------|---------|
| `indexfoundry_normalize_chunk` | Split into semantic chunks |
| `indexfoundry_normalize_enrich` | Add metadata (language, tags) |
| `indexfoundry_normalize_dedupe` | Remove duplicates |

**Chunking Strategies:**
- `recursive` - Split by separator hierarchy (default)
- `hierarchical` - Parent-child from markdown headings
- `by_paragraph` - Paragraph boundaries
- `by_heading` - Heading boundaries
- `by_page` - Page boundaries (PDFs)
- `by_sentence` - Sentence boundaries
- `fixed_chars` - Fixed character count

### Index Phase (Embed & Store)

| Tool | Purpose |
|------|---------|
| `indexfoundry_index_embed` | Generate embeddings |
| `indexfoundry_index_upsert` | Write to vector DB |
| `indexfoundry_index_build_profile` | Configure retrieval |

**Supported Vector DBs:**
- `local` - File-based (default)
- `pinecone`
- `weaviate`
- `qdrant`
- `milvus`
- `chroma`

### Serve Phase (API)

| Tool | Purpose |
|------|---------|
| `indexfoundry_serve_openapi` | Generate OpenAPI spec |
| `indexfoundry_serve_start` | Start HTTP server |
| `indexfoundry_serve_stop` | Stop server |
| `indexfoundry_serve_status` | Check server status |
| `indexfoundry_serve_query` | Query directly (no HTTP) |

### Run Utilities

| Tool | Purpose |
|------|---------|
| `indexfoundry_run_status` | Get run details |
| `indexfoundry_run_list` | List all runs |
| `indexfoundry_run_diff` | Compare two runs |
| `indexfoundry_run_cleanup` | Delete old runs |

## Utility Tools

| Tool | Purpose | When to Use |
|------|---------|-------------|
| `indexfoundry_classify_query` | Classify query type | Deciding if RAG is needed |
| `indexfoundry_debug_query` | Debug retrieval | Diagnosing search issues |

**Example - Query Classification:**
```typescript
const classification = await indexfoundry_classify_query({
  query: "What is the vacation policy?",
  context: {
    domain: "hr-docs",
    available_collections: ["policies", "handbook"]
  }
});
// Returns: { type: "factual", needs_retrieval: true, confidence: 0.9 }
```

## Integration with Multi-Agent Framework

### Research Mode
- Use Index Foundry to build knowledge bases from research sources
- Query indexed papers and documents for synthesis

### Memory Mode
- Index project documentation for future reference
- Build searchable archives of decisions and designs

### Orchestrator
- Query knowledge bases to inform task planning
- Use classification to decide if RAG retrieval is needed

### Code Mode
- Query API documentation and code examples
- Index codebase for semantic code search

## Best Practices

1. **Choose the Right Workflow**
   - Use project-based for deployable applications
   - Use run-based for experimentation and debugging

2. **Chunking Strategy**
   - Use `recursive` for general content
   - Use `hierarchical` for structured documents with headings
   - Use `by_page` for PDFs where page context matters

3. **Search Modes**
   - `hybrid` (default) - Best for most queries
   - `semantic` - When exact keywords aren't important
   - `keyword` - When exact matches are needed

4. **Tags and Filters**
   - Tag sources by category for filtered retrieval
   - Use `filter_tags` in queries to scope results

5. **Testing**
   - Use `indexfoundry_debug_query` to diagnose poor results
   - Test with expected results to validate retrieval quality

## Environment Variables

```bash
OPENAI_API_KEY=sk-...     # For OpenAI embeddings
INDEXFOUNDRY_RUNS_DIR=./runs  # Custom runs directory
```

## Constraints

- MUST have `OPENAI_API_KEY` (or equivalent) for embeddings
- MUST run `project_build` after adding sources
- SHOULD use `dry_run: true` before destructive operations
- SHOULD tag sources for organized retrieval
