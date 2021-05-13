---
id: how-does-it-work
title: How Does It Work?
sidebar_label: How Does It Work?
---

Raid Guild has developed an on-chain escrow service to facilitate payments from clients. Using the Raid Guild escrow:

-   Raid parties can be sure that the client has the money to pay for the raid.
-   The client gains protections in case we don't deliver on our promise.
-   Automates the process of paying spoils back to the Guild so individual raiders don't have to do it themselves.

The escrow has 4 main functions:

1. `Register` creates a new escrow account (should be done by the raid party).
2. `Deposit` deposits funds into that escrow account (should be done by the client).
3. `Release` releases (should be done by the client).
4. `Lock` triggers a dispute with the arbitration provider, locking the remaining funds in the escrow accounts so they cannot be released (can be done by the client or the raid party).