---
id: raid-lifecycle
title: Raid Lifecycle
sidebar_label: Raid Lifecycle
---

# Raid Lifecycle

This lifecycle is the shared operating language for work that may become a Raid. It describes what should happen regardless of which tools support the process. CRM, Discord, Portal, and Treasury records should reflect this lifecycle without replacing it.

`Captured → Qualifying → Opportunity → Scoping → Contracting → Active → Closing → Completed`

An engagement may leave the main path as **Nurture**, **Lost**, or **Cancelled**.

## Systems and Spaces

| System or space | Purpose |
| --- | --- |
| **CRM** | Source of truth for leads, opportunities, ownership, commercial status, and next actions. |
| **Agency Discord channels** | Intake notifications, opportunity triage, Hunter coordination, recruiting, and Raid operations. |
| **Raid channel** | Internal coordination for Guild members working on a qualified opportunity or active engagement. |
| **Camp channel** | Optional client-shared Discord space when Discord is convenient for the relationship. |
| **Portal** | Project context, contributors, links, activity, and member-facing or public presentation for concrete work. It is the rendered destination, not the primary Cleric interface, sales pipeline, or project-management system. |
| **Treasury tooling** | Payment records, distributions, Guild spoils, and other financial operations managed by the responsible Treasury role. |
| **Raid Agent channel** | Primary operating interface for Clerics to create and maintain CRM and Portal records, review proposed updates, and resolve conflicts or exceptions. It is not itself a source of truth. |

Email or a client-owned system may be the external communication surface instead of a Camp. The lifecycle does not depend on a Camp or Raid channel existing.

## Lifecycle Stages

### 1. Captured

An inquiry, referral, meeting conversation, direct message, web submission, or other signal may become work, funding, a partnership, or a meaningful relationship.

- **Owner:** A Hunter or the member who receives the signal until a Hunter is assigned.
- **Required record:** Add it to the CRM with its source, an owner, enough context to recognize it, and a next action.
- **Discord:** A web intake may notify `#client-submissions`. Meeting- and relationship-sourced leads do not need their own channel.
- **Advance when:** An owner begins research or follow-up.

### 2. Qualifying

The owner learns whether there is a real need, fit, budget, timeline, decision path, and next step.

- **Owner:** Hunter.
- **Required record:** Keep the CRM summary, status, owner, last contact, and next action current.
- **Discord:** Coordinate in the Agency area when useful. Do not create a Raid merely to represent every lead.
- **Advance when:** There is enough mutual interest and substance to treat the lead as an opportunity.
- **Exit when:** Set the record to Nurture or Lost and document why.

### 3. Opportunity

The lead is qualified enough to pursue as potential work.

- **Owner:** Hunter, with a Cleric identified when client and engagement leadership are needed.
- **Required record:** Convert or promote the lead to an opportunity in the CRM. Record the client need, likely service, owner, next step, expected timing, and available budget context.
- **Discord:** Create an internal Raid channel only when several members need a durable place to scope or coordinate. Recruit through `#who-is-available` when appropriate.
- **Advance when:** A Cleric and prospective party begin a concrete scoping process.

### 4. Scoping

The prospective party develops a shared understanding of the problem, outcomes, deliverables, responsibilities, risks, timeline, and budget.

- **Owner:** Cleric for the client relationship; Monk for delivery planning when assigned.
- **Required record:** Keep the CRM opportunity and next action current. Record decisions in the Raid channel or the party's chosen working documents.
- **Discord:** Use the Raid channel for internal discussion. Create a Camp only when a client-shared Discord space helps the engagement.
- **Portal:** A Portal project is optional at this stage and should exist only when there is already a concrete collaboration surface worth preserving.
- **Advance when:** The party and client are ready to formalize the engagement.

### 5. Contracting

The client and RaidGuild agree on scope, milestones, responsibilities, commercial terms, payment schedule, and the party split.

- **Owner:** Cleric, supported by the Hunter, Monk, party, and the appropriate legal or Treasury roles.
- **Required record:** Keep the commercial status and next action in the CRM. Store contracts and financial records in their approved systems, not in public handbook or Portal fields.
- **Payments:** Escrow may be used when it reduces risk, but it is not mandatory for every Raid. There is no standard consultation fee.
- **Advance when:** The engagement is authorized to start and the party has agreed how the work and compensation will operate.
- **Exit when:** Mark the opportunity Lost or Cancelled with the reason and close unneeded coordination spaces.

### 6. Active

The party is delivering the agreed work.

- **Owner:** Cleric for the client relationship and commercial expectations; Monk for delivery; named party members for their work.
- **Required record:** Keep the CRM commercial state current. Ask the Raid Agent to create or link the Portal project and maintain its current context, contributors, links, and visibility. A Cleric may use the Portal UI directly when needed, but that is not the default workflow. Treasury tooling holds the financial record.
- **Discord:** The Raid is the internal coordination surface. A Camp, email, or the client's system is the external surface.
- **Advance when:** Deliverables are accepted and the party is ready to close the engagement.

### 7. Closing

The party resolves final acceptance, payment, distribution, documentation, and transition work.

- **Owner:** Cleric coordinates client closeout; Monk coordinates delivery closeout; the responsible Treasury role manages the financial workflow.
- **Required record:** Confirm final CRM and Portal state, accepted deliverables, remaining actions, and project links. Confirm the party split and the mandatory **10% Guild spoils** through the approved Treasury process.
- **Learning:** Hold a retrospective when useful and capture durable lessons without exposing confidential client information.
- **Advance when:** Required closeout actions are complete.

### 8. Completed

The engagement has concluded and its durable record is current.

- **Owner:** Cleric verifies that the relationship and commercial record are closed; Monk or project lead verifies the delivery record.
- **Required record:** Mark the opportunity and Portal project completed using the supported system states. Preserve a case study or summary when appropriate.
- **Discord:** Move inactive Raid and Camp channels to Valhalla according to the current archive practice.

## Side Outcomes

| Outcome | Use when | Required action |
| --- | --- | --- |
| **Nurture** | There is potential value, but no timely next step. | Record why, the owner, and a meaningful follow-up date in the CRM. |
| **Lost** | The prospective work did not proceed because of fit, timing, competition, budget, or another known reason. | Record the reason and close or archive unneeded spaces. |
| **Cancelled** | An agreed or active engagement ends before normal completion. | Record the decision, resolve contractual and Treasury obligations, update Portal context, and archive spaces after closeout. |

## Raid Agent Review Loop

The Prism Raid Agent has a dedicated Discord channel rather than acting as a conversational bot in every Raid. This channel is the primary Cleric interface for structured CRM and Portal work; Clerics are not expected to perform every update through the Portal UI.

1. The agent reviews permitted Raid activity, meeting outputs, CRM records, and Portal project records on its scheduled run.
2. It searches for an existing record before proposing or making an update.
3. It may apply clear, factual, non-sensitive updates within its approved permissions.
4. It posts conflicts, uncertain matches, missing information, and sensitive decisions to the dedicated Raid Agent channel for Cleric review.
5. A Cleric or other responsible human gives direction, after which the agent updates the appropriate source of truth.

Pricing, contractual commitments, legal decisions, payment instructions, confidential data, destructive record changes, and public publishing require human review. Agent-generated summaries are derived material and must not be treated as new source evidence.

## Rendering a Project in Portal

When a Raid reaches the appropriate lifecycle stage, the Cleric asks the Raid Agent to create or update its Portal representation. The agent should resolve the existing CRM opportunity, Portal project, and Raid channel before creating anything new.

The agent prepares a preview or change summary containing:

- project identity: title, summary, and the linked CRM opportunity;
- lifecycle context: project status, current state, start or completion dates, and last meaningful activity;
- people: Cleric or steward, Monk, and confirmed contributors;
- collaboration links: Raid channel, optional Camp, working documents, repository, deployed product, and other approved links;
- presentation controls: intended audience and visibility;
- source evidence: the records or messages supporting each material update; and
- review flags: conflicts, low-confidence inferences, missing required information, or content that may be confidential.

The Cleric confirms that the agent has matched the correct project and reviews any flagged decisions. Creating a draft or applying approved factual updates may then be automated. Changes to visibility, public narrative, case-study language, or publication require explicit human review.

Portal renders the resulting project record. The Raid Agent remains the normal control surface for maintaining it, while authorized users may use the Portal UI for direct review, correction, or editorial work.

:::warning Review note · Camp access

The Raid Agent does not currently operate in Camps. Before granting it access to client-shared channels, RaidGuild must define client notice, confidentiality, retention, and permission rules. Until then, route any Camp-derived update through an authorized human or the dedicated Raid Agent channel.

:::
