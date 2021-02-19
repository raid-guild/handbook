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

1. `Register` creates a new escrow account (should be done by the raid party)
2. `Deposit` deposits funds into that escrow account (should be done by the client)
3. `Release` releases (should be done by the client)
4. `Lock` triggers a dispute with the arbitration provider, locking the remaining funds in the escrow accounts so they cannot be released (can be done by the client or the raid party)

### Happy path

> :warning:&nbsp; **WARNING:** Never send funds (tokens or ETH) directly to the escrow smart contract. Those funds will not be recoverable.

1. Raid party lead (i.e., <span id='monk'>Cleric</span> or <span id='monk'>Monk</span>) [creates an escrow](https://xdai.escrow.raidguild.org/) for the raid, with the following info:
    - **Raid party multisig address**
    - **The client's address**
    - **Total payment amount**
    - **Number of milestones** (a typical raid will have 2). Currently, milestones must have uniform payments. Future versions may allow different payment amounts per milestone.
    - **Safety valve withdrawal date**. This is the date past which the client can withdraw any remaining funds in escrow, on the assumption that the raid has not delivered on its promise. Make sure to leave plenty of buffer after the expected end of the raid.
2. Raid party lead sends the client the raid ID (from Raid Central -- Raids V2) or the url to the raid escrow
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

## Interacting with the escrow

-   As the warning above states, **_never send ETH or ERC20 tokens directly to the escrow contract_**. They will be lost forever. All deposits into an escrow must happen via the `Deposit` function. This can be done easily via the [escrow app](https://xdai.escrow.raidguild.org/).
-   Clients should **_never use centralized exchange accounts_** to make deposits into an escrow. For one, they wouldn't be able to use the app to `Deposit` in the first place. Secondly, they wouldn't be able to `Release` funds to the raid party as milestones are completed.
-   Clients depositing from a smart contract account (such as a DAO or multisig) will need to **_ensure that the account can interact with other smart contracts_** (e.g. via Aragon Agent, Moloch Minion, or a Gnosis Safe contract interaction).

## Instructions for clients

The raid party lead is responsible for working with the client to help them make their deposit into the escrow. The following deposit instructions can be shared with clients:

### Paying with an Externally Owned Account (e.g. MetaMask)

If you are paying Raid Guild from an EOA like MetaMask, follow these instructions:

1. Go to https://xdai.escrow.raidguild.org/escrow/[RaidID] -- _[raid party lead: replace [RaidID] with the RaidID from Airtable]_
2. Connect your MetaMask or WalletConnect wallet
3. Follow the instructions to deposit. There will be 2 transactions - the first to approve the Raid Guid Escrow contract to transfer your tokens, and the second to make the deposit itself.
4. Refresh to verify that the deposit has been made (you may need to reconnect your wallet).

### Paying with a Gnosis Safe

If you are paying Raid Guild from a Gnosis Safe, follow the below instructions to generate the correct transaction from the Gnosis Safe itself. Alternatively, you can use the WalletConnect app in the Gnosis Safe to interact with the Raid Guild Escrow app directly (e.g., as if you were using Metamask).

#### Step 1: Approve the Raid Guild Escrow contract to transfer your tokens

1. Go to your Gnosis Safe interface
2. Click New Transaction
3. Click Contract Interaction
4. In the Recipient field, paste the address of the token you're paying with
    - wxDAI: `0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d`
    - WETH: `0x36c06Cb8EE68D632bDEfeb969b4751F73c67d891`
5. The ABI field will auto-populate and a dropdown menu will appear underneath
6. From the dropdown menu, select the Approve function. Two new fields will appear underneath
7. In the first field (`usr` for DAI or `guy` for WETH), paste the address of the Raid Guild Escrow contract on xDAI: `0x7f8F6E42C169B294A384F5667c303fd8Eedb3CF3`
8. In the second field (`wad`), enter the amount of tokens to deposit, multiplied by 10^18.
    - If your payment does not have any decimals (e.g. 10 DAI, not 10.5 DAI), then multiplying by 10^18 is equivalent to adding 18 zeroes to the end.
    - You can copy/paste 18 zeroes from here: `000000000000000000`
9. Click Review
10. Check that everything matches the correct inputs, and then click Submit
11. Process the transaction as you would any other Gnosis Safe transaction

#### Step 2: Deposit into the escrow

1. Click New Transaction again
2. Click Contract Interaction
3. in the Recipient field, paste the address of the Raid Guild Escrow contract: `0x7f8F6E42C169B294A384F5667c303fd8Eedb3CF3`
4. The ABI field will auto-populate and a dropdown menu will appear underneath
5. From the dropdown menu, select the confirmLocker function. Two new fields will appear underneath
6. In the first field (`value`), enter `0`.
7. In the second field (`index`). enter [Escrow Index] -- _[raid party lead: replace [Escrow Index] with the Escrow Index from Airtable]_
8. Click Review
9. Check that everything matches the correct inputs, and then click Submit
10. Process the transaction as you would any other Gnosis Safe transaction

Finally, check with Raid Guild to confirm that the deposit was successful.

Note: Gnosis Safe's can now use WalletConnect to connect to web3 applications directly. If that works, things will be much easier than following all the steps above. Unfortunately, it doesn't always work.

## References

-   Raid Guild Escrow home page: https://escrow.raidguild.org/
-   Direct link to a specific raid escrow: `https://escrow.raidguild.org/escrow/[raidID]`
-   LexGuildLocker contract: [0x7f8F6E42C169B294A384F5667c303fd8Eedb3CF3](https://blockscout.com/poa/xdai/address/0x7f8F6E42C169B294A384F5667c303fd8Eedb3CF3/contracts)

> :warning:&nbsp; **WARNING:** Never send funds (ERC20 tokens or xDAI) directly to the escrow smart contract. Those funds will not be recoverable.
