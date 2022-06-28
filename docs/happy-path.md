---
id: happy-path
title: Happy Path
sidebar_label: Happy Path
---

1. Raid party lead (i.e. <span class='cleric'>Cleric</span> or <span class='monk'>Monk</span>) [creates an escrow](https://smartescrow.raidguild.org/) for the raid, with the following info:
    - **Raid party multisig address** The xDAI Gnosis Safe address
    - **The client's address**
    - **Total payment amount**
    - **Number of milestones** A typical Raid will have two milestones. Currently, milestones must have uniform payments. Future versions may allow different payment amounts per milestone.
    - **Safety valve withdrawal date** This is the date past which the client can withdraw any remaining funds in escrow, on the assumption that the raid has not delivered on its promise. Make sure to leave plenty of buffer after the expected end of the Raid.
2. Raid party lead sends the client the Raid ID (from Raid Central -- Raids V2) or the URL to the Raid escrow.
3. Client `Deposits` total Raid payment (note: must use the `Deposit` function).
4. Client `Releases` first milestone payment
5. Raid commences
6. Once next milestone is reached, client releases the next payment
7. Repeat 6 until all milestones have been completed and all money has been released

:::danger WARNING

Please ensure the client uses the Smart Escrow website to make deposits using the `Deposit` function and the appropriate token.

:::