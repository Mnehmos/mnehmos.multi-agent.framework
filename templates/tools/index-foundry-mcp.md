# Autonomic Layer: Index Foundry MCP Integration

> **Tier 3 Appendix** | Add to somatic instructions when Index Foundry MCP is installed.
> Provides: End-to-end RAG pipelines, document Q&A, search APIs.

---

## The Autonomic Nervous System

Index Foundry is the **semantic memory** component of the autonomic layer. It handles document understanding without conscious attention:

1. **Ingest**: URLs, PDFs, folders, sitemaps
2. **Process**: Extract text, chunk semantically
3. **Embed**: Generate vector embeddings
4. **Index**: Store in searchable format
5. **Query**: Semantic, keyword, or hybrid search
6. **Serve**: Deploy as HTTP API

---

## Pipeline Overview

```
Sources                    Processing                 Output
───────────────────────────────────────────────────────────────
URL         ─┐            ┌─> Chunk   ─┐           ┌─> Query API
Sitemap     ─┼─> Extract ─┤            ├─> Embed ──┤
PDF         ─┤            └─> Enrich  ─┘           └─> Chat UI
Folder      ─┘                                     
```

---

## High-Level Tools (Project API)

| Tool | Purpose | Key Parameters |
|------|---------|----------------|
| `project_create` | Initialize RAG project | `project_id`, `name`, `embedding_model` |
| `project_add_source` | Add content source | `project_id`, `url`/`pdf_path`/`folder_path`/`sitemap_url` |
| `project_build` | Process all sources | `project_id`, `force`, `dry_run` |
| `project_query` | Search the index | `project_id`, `query`, `mode`, `top_k` |
| `project_export` | Generate deployment files | `project_id`, `include_http` |
| `project_serve` | Start local server | `project_id`, `port`, `mode` |
| `project_deploy` | Deploy to Railway | `project_id`, `env_vars`, `dry_run` |

---

## Quick Start

```typescript
// 1. Create project
await project_create({
  project_id: "docs-search",
  name: "Documentation Search",
  embedding_model: { provider: "openai", model_name: "text-embedding-3-small" }
})

// 2. Add sources
await project_add_source({
  project_id: "docs-search",
  sitemap_url: "https://docs.example.com/sitemap.xml"
})

// 3. Build index
await project_build({ project_id: "docs-search" })

// 4. Test queries
const results = await project_query({
  project_id: "docs-search",
  query: "How do I authenticate users?",
  mode: "hybrid",
  top_k: 5
})
```

---

## Utility Tools

| Tool | Purpose |
|------|---------|
| `classify_query` | Determine if RAG retrieval is needed |
| `debug_query` | Trace retrieval pipeline for debugging |
| `extract_tables` | Linearize tables for better embedding |

---

## Search Modes

| Mode | Description |
|------|-------------|
| `semantic` | Vector similarity search |
| `keyword` | BM25 keyword matching |
| `hybrid` | Combined with RRF fusion (recommended) |

---

## Installation

```json
{
  "mcpServers": {
    "index-foundry": {
      "command": "node",
      "args": ["path/to/mnehmos.index-foundry.mcp/dist/index.js"],
      "env": {
        "OPENAI_API_KEY": "sk-..."
      }
    }
  }
}
```

**GitHub**: [github.com/Mnehmos/mnehmos.index-foundry.mcp](https://github.com/Mnehmos/mnehmos.index-foundry.mcp)
