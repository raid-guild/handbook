---
id: process-system-gaps
title: Raid Process and System Gaps
sidebar_label: Process and System Gaps
---

# Raid Process and System Gaps

:::warning Review artifact · Not operating policy

This register tracks gaps between the intended [Raid Lifecycle](/docs/raids/raid-lifecycle) and the systems that support it. An entry identifies work to investigate; it does not announce that a product change, permission, or automation already exists.

:::

## Status Vocabulary

### Establish one canonical CRM lifecycle

- **Desired process:** Hunters and Clerics should see one understandable path from Captured through Completed, with Nurture, Lost, and Cancelled as explicit outcomes.
- **Current gap:** CRM seed data, agent tools, documentation, and opportunity fields use overlapping status and stage vocabularies. BizDev users report that the CRM is confusing.
- **Affected system:** CRM.
- **Proposed direction:** Map CRM lead and opportunity states to the handbook lifecycle; use plain-language definitions, clear transition criteria, and an always-visible owner and next action.
- **Decision needed:** Which distinctions are operationally useful, and which are implementation history that can be removed?

### Add an explicit completed project state

- **Desired process:** An active Portal project should move cleanly to Completed after client and delivery closeout.
- **Current gap:** Portal records have a completion date but no clear `completed` status. The status options also contain both `exploratory` and `exploring`.
- **Affected system:** Portal.
- **Proposed direction:** Add `completed`, consolidate the duplicate exploratory terms, and migrate existing records deliberately.
- **Decision needed:** Whether `shipping` describes active delivery, a transition, or a completed outcome.

### Clarify commercial outcomes

- **Desired process:** Completed, Lost, Cancelled, Inactive, and Nurture should have distinct meanings and reporting behavior.
- **Current gap:** CRM opportunity status fields do not make successful completion versus inactivity or loss consistently obvious.
- **Affected system:** CRM.
- **Proposed direction:** Define outcome semantics before changing fields or reports.
- **Decision needed:** Whether a completed engagement remains an opportunity outcome, becomes a separate project-linked record, or both.

## Cross-System Identity

### Link CRM, Portal, Raid, and Camp records

- **Desired process:** A reviewer or agent can resolve one engagement across systems without guessing from names.
- **Current gap:** CRM opportunities do not have dedicated Portal project, Raid channel, or Camp channel identifiers. Portal does not have a dedicated CRM opportunity reference.
- **Affected systems:** CRM, Portal, Discord, Raid Agent.
- **Proposed direction:** Store the Portal project ID and URL plus Raid and optional Camp channel IDs on the CRM opportunity. Store the CRM opportunity ID on the Portal project. Use stable IDs rather than channel names as automation keys.
- **Decision needed:** Which system creates the shared relationship and which integrations may write each identifier.

### Define the Portal creation trigger

- **Desired process:** Concrete work appears in Portal at a predictable point without turning Portal into the sales pipeline.
- **Current gap:** A project might be created during scoping, contracting, or active delivery depending on the operator.
- **Affected systems:** CRM and Portal.
- **Proposed direction:** Create or require the Portal project when delivery becomes Active. Allow an earlier project only when a concrete collaboration surface already exists.
- **Decision needed:** Whether a signed contract, payment event, explicit start authorization, or another event is the canonical trigger.

## Raid Agent

### Define reconciliation authority and precedence

- **Desired process:** The daily Raid Agent task can reconcile permitted Raid activity with CRM and Portal, apply safe factual updates, and escalate exceptions.
- **Current gap:** Write permissions, field-level authority, conflict rules, and the review queue are not fully specified.
- **Affected systems:** Raid Agent, CRM, Portal, Discord.
- **Proposed direction:** Use the dedicated Raid Agent channel as the command and exception inbox. Search before create, use stable IDs, make idempotent updates, retain source links, and log changes.
- **Decision needed:** Approve a field-by-field automation policy and the humans responsible for each escalation class.

Suggested evidence precedence for review:

1. signed agreements, approved payment records, and explicit human decisions;
2. human CRM edits for commercial state;
3. human Portal edits for project presentation and visibility;
4. raw authorized Discord or meeting evidence; and
5. agent-generated summaries and other derived material.

### Decide whether the agent may read Camps

- **Desired process:** Relevant client communication can inform the structured record without violating expectations or confidentiality.
- **Current gap:** The Raid Agent does not currently operate in Camps, and Camps are client-shared spaces.
- **Affected systems:** Discord and Raid Agent.
- **Proposed direction:** Keep Camp access disabled until a scoped policy exists. Humans can route relevant updates through the dedicated agent channel in the meantime.
- **Decision needed:** Client notice, consent, allowed data, retention, sensitive-data handling, and per-channel permission controls.

### Define mandatory human review

- **Desired process:** Automation reduces clerical work without allowing an agent to make sensitive commitments.
- **Current gap:** The review boundary is understood in principle but not encoded consistently.
- **Affected systems:** Raid Agent, CRM, Portal, Discord.
- **Proposed direction:** Require human review for pricing, contractual or legal commitments, payment instructions, confidential data, destructive changes, ambiguous identity resolution, and public publishing.
- **Decision needed:** Which non-sensitive fields the agent may update automatically at each confidence level.

## Treasury Handoff

### Document the operating boundary

- **Desired process:** Clerics can coordinate payment milestones and closeout while the responsible Treasury role maintains authoritative financial records in the Treasury tool.
- **Current gap:** Older handbook content assigns financial tracking and distribution to Dungeon Master or Discord-era workflows.
- **Affected systems:** Handbook, Treasury tooling, CRM, Portal, Discord.
- **Proposed direction:** Document the Treasury role, handoff points, and evidence requirements without copying sensitive financial data into Portal or conversational channels.
- **Decision needed:** The current Treasury tool, responsible role, standard handoff checklist, and which payment-state summary—if any—belongs in CRM.

## Product and Documentation Follow-up

- Interview Hunters about the minimum information and fewest stages needed to manage a lead confidently.
- Validate the lifecycle and ownership transitions with practicing Hunters, Clerics, Monks, and the Treasury role.
- Convert accepted gaps into separately scoped CRM, Portal, Raid Agent, or Treasury work.
- Update this register when a decision is accepted, implemented, or rejected; move settled operating rules into the normative handbook pages.
