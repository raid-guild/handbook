---
id: intro-to-smartinvoice
title: Intro to Smart Invoice
sidebar_label: Intro to Smart Invoice
---

:::info Optional payment tool

Smart Invoice is still used for some Raids and RIPs, but it is not required for every engagement or the only payment path. Confirm the chosen flow with the responsible Cleric and client before creating an escrow.

:::

# Introduction to Smart Invoice

RaidGuild has partnered with [SmartInvoice](https://smartinvoice.xyz) to facilitate Escrow services, ensuring secure and transparent transactions. SmartInvoice, originally created within the guild, has since grown to become an independent tool, supporting both clients and guild members in maintaining trust throughout their projects.

### Benefits of Using SmartInvoice

- **Assured Client Funds**: Clients deposit funds up-front, guaranteeing the raid party is covered upon project completion.
- **Client Protection**: Clients retain funds until each milestone is met, offering security if expectations aren’t met.
- **Milestone-Based Progress**: Milestones are used to break down deliverables, giving both parties clear checkpoints.
- **Flexibility for Long Projects**: Milestones can be added as needed, accommodating extended project timelines.

### Key Features of Escrow with SmartInvoice

SmartInvoice escrows provide four primary functions for projects:

1. **Register**: Creates a new escrow account, generally set up by the raid party.
2. **Deposit**: Allows clients to fund the escrow, providing the financial backing for milestones.
3. **Release**: Permits clients to release funds as each milestone is successfully completed.
4. **Lock**: Initiates a dispute by freezing the remaining funds, preventing further releases until resolved (available to both clients and raid party).

### Escrow Zap and Spoils Management

- **Escrow Zap**: A tool that automates guild payouts through [Splits](https://splits.org), coordinates raider payments, and simplifies transactions.
- **Spoils Manager**: Manages the DAO’s share, setting a percentage for the treasury, which is enforced through the Split contract on every release.

### Escrow Interaction Guide

#### Getting Started

- **Avoid Centralized Addresses**: Client addresses should not be from centralized exchanges to ensure they can interact with the necessary functions.
- **Smart Contract Accounts**: Clients using DAOs or multisigs should verify they can interact with SmartInvoice, commonly through Aragon Agent, Moloch Minion, or Gnosis Safe.
- **Using SmartInvoice App**: All escrow actions can be managed through [SmartInvoice](https://app.smartinvoice.xyz) if Dungeon Master lacks a required function.

#### Core Actions for Escrow

- **Deposit**: When ready, the client (or anyone) can fund the escrow by selecting the number of milestones. Funds can come from any source, directly transferring tokens to the escrow.
- **Release**: Only the client may release funds upon reaching each milestone, ensuring the project stays on track.
- **Lock**: Either party can freeze funds by locking the escrow, enabling arbitration. This must occur before the safety valve date.
- **Resolve**: If locked, the resolver steps in to decide fund distribution based on the dispute.
- **Withdraw**: Should the provider not deliver by the safety valve date, the client may withdraw remaining funds.

### Dispute Resolution

When a dispute arises, either party can initiate a `Lock` on the escrow, prompting arbitration through LexDAO or the chosen provider. This arbitration assesses the situation, determining the rightful distribution of funds.

### The Flow of Escrow Zap

The Escrow Zap merges several processes into a streamlined transaction flow, creating necessary contracts in one go:

1. Safe + DAO Split + Raid Party Split + Escrow
2. Safe + DAO Split + Escrow
3. Safe + Raid Party Split + Escrow
4. Safe + Escrow only

### Important Notes

The Spoils Manager contract allows the DAO to update the treasury address and set a raid spoils percentage, ensuring spoils are properly distributed. On the Optimism chain, a distinct [Spoils Manager](https://optimistic.etherscan.io/address/0x9aFA71188fC0cd4445AbC4e671B466C2ea405130/contracts#readContract) contract handles these values.

---

### Testing and Auditing

While SmartInvoice contracts are thoroughly tested, they have not been formally audited. The contract involves minimal risk, as it does not directly hold funds, leveraging established tools within the ecosystem.

**Proceed with caution and use at your own risk.**
