---
id: escrow
title: Raid Payment Escrow
sidebar_label: Escrow
---

Raid Guild has developed an on-chain escrow service to facilitate payments from clients. Using the Raid Guild escrow:

-   Raid parties can be sure that the client has the money to pay for the raid
-   The client gains protections in case we don't deliver on our promise
-   Automates the process of paying spoils back to the Guild so individual raiders don't have to do it themselves

## How does it work?

The escrow has 4 main functions:

1. `Register` creates a new escrow account (should be done by the raid party))
2. `Deposit` deposits funds into that escrow account (should be done by the client)
3. `Release` releases (should be done by the client)
4. `Lock` triggers a dispute with the arbitration provider, locking the remaining funds in the escrow accounts so they cannot be released (can be done by the client or the raid party)

### Happy path

> :warning: **WARNING:** Never send funds (tokens or ETH) directly to the escrow smart contract. Those funds will not be recoverable.

1. Raid party lead (i.e., <span id='monk'>Cleric</span> or <span id='monk'>Monk</span>) [creates an escrow](https://escrow.raidguild.org/) for the raid, with the following info:
    - **Raid party multisig address**
    - **The client's address**
    - **Total payment amount**
    - **Number of milestones** (a typical raid will have 2). Currently, milestones must have uniform payments. Future versions may allow different payment amounts per milestone.
    - **Safety valve withdrawal date**. This is the date past which the client can withdraw any remaining funds in escrow, on the assumption that the raid has not delivered on its promise. Make sure to leave plenty of buffer after the expected end of the raid.
2. Raid party lead sends the client the raid ID (from Raid Central) or the url to the raid escrow
3. Client `Deposits` total raid payment (note: must use the `Deposit` function)
4. Client `Releases` first milestone payment
5. Raid commences
6. Once next milestone is reach, client releases the next payment
7. Repeat 6 until all milestones have been completed and all money has been released

> Note: currently, the escrow contract requires that clients deposit the entire payment amount at once. For larger raids, this may be burdensome for clients. Future versions will allow clients to deposit enough to cover the next milestone and then top up as milestones are finished. For now, this escrow service may be best applied to smaller raids or where clients already have all funds on hand.

### In case of dispute

-   If the client loses confidence in the raid party at any time, they may `Lock` the remaining funds in escrow so that they cannot be released or withdrawn.
-   If the client has not released funds once a milestone has been completed, the raid party may `Lock` the remaining funds in escrow.

In both cases, the `Lock` triggers the arbitration provider (i.e., LexDAO) to review the dispute. Based on their review, the arbitration provider will decide which party should receive what amount of funds, and will send a transaction to the escrow contract that will transfer the appropriate amounts to each party.

## References

-   Raid Guild Escrow home page: https://escrow.raidguild.org/
-   Direct link to a specific raid escrow: `https://escrow.raidguild.org/escrow/[raidID]`
-   LexGuildLocker contract: [0x3a08f5cf2c77d003fe07b69e76ff27cbb1520b4f](https://etherscan.io/address/0x3a08f5cf2c77d003fe07b69e76ff27cbb1520b4f#code)

> :warning: **WARNING:** Never send funds (tokens or ETH) directly to the escrow smart contract. Those funds will not be recoverable.
