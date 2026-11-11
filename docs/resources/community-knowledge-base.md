---
id: community-knowledge-base
title: Community Knowledge Base (Private Memory + Living Docs)
sidebar_label: Community Knowledge Base
---

## Pitch

Build a community knowledge base that stays private by default, supports lightweight miniapps, and produces living docs that help members quickly orient, with citations back to sources.

## Goals

- Capture ongoing community activity with minimal friction
- Keep sensitive data private and local-first for power users
- Provide high-signal “living docs” snapshots with citations
- Support simple miniapps that write structured entries
- Enable incremental synthesis for long-term memory

## Core Idea

Separate **raw intake** from **living docs**:

- **Raw intake** lives in a database (fast writes from miniapps, flexible schema)
- **Living docs** are served via an API (easy to consume by tools and clients)

This allows daily capture at scale while keeping synthesized knowledge easy to read, search, and reference in local AI sessions.

## Proposed Architecture

### 1) Miniapp intake (DB-first)

Miniapps write structured or semi-structured entries to a private Supabase project.

Example entry fields:

- `type` (standup, meeting, note, task)
- `author`
- `timestamp`
- `content` (text or JSON)
- `tags`
- `visibility` (default: private)

### 2) Synthesis jobs (automation)

Scheduled jobs produce “surfaces” and “living docs” from recent entries:

- **Daily snapshot**: topics, highlights, action items
- **Weekly digest**: through-lines, progress, open questions
- **Topic index**: current themes with source references

These jobs write Markdown files into a private `community-knowledge` repo.

### 3) Living docs (API-first)

Living docs are the high-signal outputs used in AI sessions and onboarding.

Each bullet includes citations back to DB records (IDs or permalinks).

Example API surfaces:

```
GET /snapshots
GET /weekly
GET /indexes
```

### 4) Scopes (community, project, department)

Living docs can be generated at multiple scopes:

- **Community**: cross-cutting themes, highlights, and org-level priorities
- **Department**: discipline-focused updates (e.g., research, ops, design)
- **Project**: granular status, decisions, and action items

Scopes can be selected by filters in the API (e.g., `scope=project&project_id=...`)
so the same synthesis pipeline supports different audiences without duplicating data.

The flow cascades from higher fidelity to lower fidelity:

- **High fidelity**: project-level detail and citations
- **Medium fidelity**: department rollups and trends
- **Lower fidelity**: community snapshots and through-lines

Diagram:

```
Project (high fidelity)  -->  Department (medium fidelity)  -->  Community (lower fidelity)
  details + citations           rollups + trends                 snapshots + through-lines
```

### Cross-scope sources

Some inputs (e.g., all-hands, shared research) should appear across scopes.

Two simple approaches:

- **Multi-scope tags**: entries declare multiple scopes (e.g., `scopes: [community, department:ops]`)
- **Global sources**: entries are tagged as community-wide and pulled into scoped views as a
  dedicated “Org-wide updates” section

This preserves depth where needed while keeping the broad view easy to scan.

## Privacy Model

- All intake stays private by default
- Living docs are private to the community
- Optional export of rollups for sharing (sanitized or public-safe)

## Why This Balance Works

- **Power users** can chat locally with living docs and drill into sources
- **Miniapps** stay simple: write to DB, no need to manage git
- **Traceability** preserved via citations and record IDs
- **Long-term memory** built by rolling up summaries across time

## Implementation Phases

1. **Phase 1: Intake**
   - Create Supabase schema
   - Build 1-2 miniapps (standup + meeting notes)
2. **Phase 2: Living docs**
   - Daily + weekly synthesis job
   - API endpoints for snapshots and digests
3. **Phase 3: Long-term memory**
   - Monthly/quarterly rollups
   - Topic index + open threads view
   - Export all rollups (optional)

## Open Questions

- Do we want PRs or direct commits for living docs?
- How strict should entry schemas be?
- What’s the preferred citation format (IDs vs permalinks)?
- Which surfaces are most valuable (daily, weekly, monthly)?
