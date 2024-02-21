---
id: zap
title: Safe, Splits, and Escrow Zap
sidebar_label: Escrow Zap
---

# Overview

The Safe, Splits, and Escrow zap is a utility for folks spinning up tools for coordinating project deliverables.

# Flow

The zap transaction completes creating 3 - 4 different contracts, composing them together, in a single transaction. No more interface hopping to get started raiding. Check out the full diagram of the zap workflow.

![flow image](/escrow/escrow-flow.png)

Dungeon Master supports the 4 major flows of the zap:

1. Create a safe + DAO split + raid party split + escrow (green)
2. Create a safe + DAO split + escrow (blue)
3. Create a safe + raid party split + escrow (orange)
4. Create a safe + escrow

# Spoils Manager

The [Spoils Manager](https://gnosisscan.io/address/0x8C9c85b41a9491388320eA27d74A037D93d07C0F/contract#readContract) contract handles setting the spoils percentage to be collected for raids handled via Escrow. The spoils percentage is stored onchain and can be updated with proposals as the DAO is the owner of the contract. The spoils manager also lets the DAO specify the address of the treasury vault to receive the spoils. Both values can be updated by the DAO at a later time.

These values are used in the Zap contract to create a Split contract to handle spoils on behalf of the DAO. When funds are released from the escrow, they'll first flow through the splits contract that'll handle the split.

# Testing/Auditing

While the contracts have been rigorously tested and reviewed by the Raid Guild community, they have not been formally audited by any external providers. The contracts are also being used in production by Raid Guild for on-going work. As there are no funds stored in the contract and we're leveraging existing tools of the ecosystem, the risks from the zap contract directly are minimized.

**USE AT YOUR OWN RISK**
