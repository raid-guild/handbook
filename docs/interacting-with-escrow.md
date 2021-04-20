---
id: interacting-with-escrow
title: Interacting With the Escrow
sidebar_label: Interacting With the Escrow
--- 

-   As the warning above states, **_never send ETH or ERC20 tokens directly to the escrow contract_**. They will be lost forever. All deposits into an escrow must happen via the `Deposit` function. This can be done easily via the [escrow app](https://xdai.escrow.raidguild.org/).
-   Clients should **_never use centralized exchange accounts_** to make deposits into an escrow. For one, they wouldn't be able to use the app to `Deposit` in the first place. Secondly, they wouldn't be able to `Release` funds to the raid party as milestones are completed.
-   Clients depositing from a smart contract account (such as a DAO or multisig) will need to **_ensure that the account can interact with other smart contracts_** (e.g. via Aragon Agent, Moloch Minion, or a Gnosis Safe contract interaction).