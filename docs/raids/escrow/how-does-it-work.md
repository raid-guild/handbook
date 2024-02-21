---
id: how-does-it-work
title: How Does It Work?
sidebar_label: How Does It Work?
---

Raid Guild has partnered with [SmartInvoice](https://smartinvoice.xyz) to handle Escrow services. SmartInvoice was originally developed inside the guild and spun out to pursue its own path.

**Advantages of SmartInvoice**

- Raid parties can be sure that the client has the money to pay for the raid.
- The client gains protections in case we don't deliver on our promise.
- Milestones provide checkpoints for the project to hit the final deliverable
- Milestones can be flexibly added to extended projects

[**Escrow Zap**](./zap.md)

- Automates the process of paying spoils back to the Guild via [Splits](https://splits.org)
- Utilizes Splits to handle coordinating payouts between raiders for the project
- Bundles the transactions needed to get a project started into one

A [SmartInvoice](https://smartinvoice.xyz) escrow has 4 main functions:

1. `Register` creates a new escrow account (should be done by the raid party).
2. `Deposit` deposits funds into that escrow account (should be done by the client).
3. `Release` releases (should be done by the client).
4. `Lock` triggers a dispute with the arbitration provider, locking the remaining funds in the escrow accounts so they cannot be released (can be done by the client or the raid party).
