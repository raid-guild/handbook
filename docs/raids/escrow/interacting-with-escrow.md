---
id: interacting-with-escrow
title: Interacting With the Escrow
sidebar_label: Interacting With the Escrow
---

### General tips

- Make sure the Client address is not a centralized exchange address. Client will not have access to call the necessary functions.
- Clients depositing from a smart contract account (such as a DAO or multisig) will need to **ensure that the account can interact with other smart contracts** (e.g. via Aragon Agent, Moloch Minion, or a Gnosis Safe contract interaction).
- All of these actions are completely composable with [SmartInvoice](https://app.smartinvoice.xyz), so if you hit any snags within Dungeon Master, you can utilize that also. Or vice versa (the whole escrow lifecycle is not supported in DM currently -- `resolve` is not available).

### Deposit

_who can do this? **client, anyone**_

When your escrow is ready for funding a button will be provided to initiate a `deposit` transaction from your wallet.

Funds do not need to be sent from the client address and tokens can be sent directly to the escrow via `transfer` on any ERC20 tokens.

After initiating the `deposit`, you can select the number of milestones to fund. You're only required to fund 1 milestone at a time, though you can fund as many as you'd like at one time.

![deposit form image](/escrow/deposit.png)

- [Check out the docs for depositing on SmartInvoice](https://docs.smartinvoice.xyz/tutorials/client/deposit-funds)

### Release

_who can do this? **client**_

When a milestone is ready for `release` you can return to the app to initiate a `release` for the next milestone. By default only the next milestone will be released.

![release form image](/escrow/release.png)

- [Check out the docs for releasing on SmartInvoice](https://docs.smartinvoice.xyz/tutorials/client/release-escrow-funds-inside-milestone)

### Lock

_who can do this? **client, provider**_

If at any time either party on the agreement wants to dispute the completion of the current milestone/escrow they can lock the escrow to enable the resolver to sort out the dispute off-chain and settle it onchain. After the safety valve date, neither party can lock the escrow.

- [Check out the docs for locking on SmartInvoice](https://docs.smartinvoice.xyz/tutorials/client/lock-milestone-and-request-arbitration)

### Resolve

_who can do this? **resolver**_

When a dispute is locked, the resolver can resolve the dispute and release the funds to the appropriate party.

- [Check out the docs for resolving on SmartInvoice](https://docs.smartinvoice.xyz/tutorials/arbitrator/release-disputed-escrow-funds)

### Withdraw

_who can do this? **client**. when can you do this? **after safety valve date**_

If the provider has not completed the work by the safety valve date, the client can withdraw the remaining funds from the escrow. This doesn't affect the client's ability to release milestones but neither party can lock the escrow after the safety valve date.

- Handle via SmartInvoice
