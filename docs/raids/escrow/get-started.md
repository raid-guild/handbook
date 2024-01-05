---
id: get-started
title: Creating an Escrow
sidebar_label: Create an Escrow
---

### Prerequisites

The raid party lead (e.g. <span class='cleric'>Cleric</span> or <span class='monk'>Monk</span>) [will want to create an escrow](https://dm.raidguild.org/escrow) for the raid (or RIP).


<table>
    <tr>
        <td>Info</td>
        <td>Description</td>
    </tr>
    <tr>
        <td>**Raid party addresses**</td>
        <td>Addresses for all raid party members or a Safe address</td>
    </tr>
    <tr>
        <td>**The client's address**</td>
        <td>The address where the client can release the funds and lock the escrow. _DOESN'T NEED TO BE THE ADDRESS DEPOSITING FUNDS_</td>
    </tr>
    <tr>
        <td>**Milestone amounts**</td>
        <td>From the milestone amounts we'll calculate the total payment for the raid. Milestone amounts are flexible. All milestones must use the same token</td>
    </tr>
    <tr>
        <td>**Safety valve withdrawal date**</td>
        <td>This is the date past which the client can withdraw any remaining funds in escrow, on the assumption that the raid has not delivered on its promise. This does not affect the ability of the client to release milestones as normal.</td>
    </tr>
</table>

### Create the escrow

1. Enter project details, if RIP


2. Enter escrow details


3. Handle split details


4. Enter milestones


5. Confirm & Deploy



:::warning ALERT

Only tokens whitelisted will be accessible as escrow tokens! Only send tokens to an escrow you're sure are whitelisted.

::: 



### Get the escrow funded

1. Raid party lead sends the client the URL to the escrow in SmartInvoice
2. Client sends payment for at least the first milestone

:::danger WARNING

Before sending any funds to an escrow ensure that the client address can call the proper functions to `release` and `lock`

::: 