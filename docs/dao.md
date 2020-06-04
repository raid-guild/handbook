---
id: dao
title: The DAO
sidebar_label: The DAO
---

Raid Guild is structured as Distributed Autonomous Organization - better known as a DAO. 

You can access the [Raid Guild DAO here](https://pokemol.com/dao/0xbeb3e32355a933501c247e2dbde6e6ca2489bf3d/proposals/Completed).

As a DAO, members have staked capital (in the form of [WETH](https://weth.io/)) to the War Chest in exchange for Shares. All capital is held by a trustless smart contract and distributed in accordance to Proposals governed by Members. No one person owns the keys to the smart contract, and funding can only be distributed if consensus is reached among shareholders.

Every member of Raid Guild has at least 1 Share, and Shares are used to vote on proposals and access private channels in Discord.

Raid Guild uses Wrapped Ether as it’s base currency, which can be quickly converted to and from ETH using the [Wrap ETH](https://wrapeth.com/) tool (made with love by the Raid Guild).

### Moloch V2 Primer 

Raid Guild utilizes the Moloch V2 framework. A great overview of Moloch V2 and it’s benefits can be found [here](https://medium.com/raid-guild/moloch-evolved-v2-primer-25c9cdeab455).

Moloch was popularized due to its Minimum Viable DAO design and the advent of “ragequit” - a means for members to exit the DAO by exchanging their shares for a pro-rata claim on the War Chest’s assets.

The TLDR of Moloch V2 is that it allows for an optimized War Chest and new Proposal Types. Moloch V2 can hold hundreds of different ERC20 tokens, and allows for anyone (including those without shares) to make a proposal to the DAO.

### Proposal Types

Within the War Chest, members can make a number of different proposals including:

* Membership - Requesting new shares to join the DAO
* Funding - Requesting funding from the DAO
* Whitelist Token - Request to add support for a new ERC20 token. 
* GuildKick - Request to forcibly remove a malicious member through a vote
* Trading - Request the DAO to swap assets within the War Chest

### Proposal Process

To submit a proposal, select Proposals followed by **New Proposal**.

Select the Proposal Type (described above) and fill in all fields. Here are some of the things you’ll want to keep in mind when filling out a proposal.

* **TITLE:** Enter a description of the proposal. Example: New Member - Igor Bogdanoff
* **DESCRIPTION:** Anything you believe is relevant to your proposal. The shorter the description the better, and the important piece here is the _WHAT_ you are asking for and _WHY_.
* **LINK:** Whatever information gives us the best context to review your proposal and make an informed decision.
* **SHARE REQUESTED:** Every Raid Guild share is equal to 0.1WETH. New members may request a maximum of 10 shares for a total of 1WETH.
* **TOKEN TRIBUTE:** Enter the amount of WETH correspondent to the number of shares requested. For example, if you are requesting 1 share, enter 0.1WETH as tribute. 5 shares, 0.5WETh, etc. etc.
* **+ LOOT:** Loot is a non-voting share. This means you will have shares which can be raqequit but do not hold voting rights. Loot shares cost the same as regular share at 0.1WETH/share.

After submitting a proposal, it will enter the **Unsponsored Proposals** section. This means someone with shares (which could be you) must Champion the proposal in order for it to be moved to voting. 

Once the proposal has been sponsored it will enter the **Queue**. The queue ensures proposals are funneled to voting in an orderly fashion. One proposal will go from the queue to the Voting Period once every two hours.

Once in the **Voting Period**, members can now vote on the proposal. Every proposal has a 72 hour voting period in which it must receive more Yes than No votes to pass.

After voting has ended, the proposal enters a **Grace Period** which gives members time to raqeguit if they do not like the outcome of the vote. The grace period lasts 48 hours.

Next, The proposal is sent to **Processing** in which the vote is time stamped on-chain.

After being processed, the proposal is marked as **Completed**, and all shares, funds or outcomes are enacted. All outcomes of a proposal that affect you can be viewed by clicking your Address (top or bottom right) and selecting **My Account**.

For members which received Funding, you will need to withdraw the funding from the DAO contract under Internal Balances.

_Note: If you mess up your proposal, you can cancel it while in it remains Unsponsored. To do so, click the proposal and hit Cancel at the bottom. Any tribute can be withdrawn from Internal Balances to resubmit with the correct amount(s)._

### Raid Guild Shares

All Shares are non-transferable and unique to the DAO being used (in this case Raid Guild). 

Each share represents a pro-rata claim on the underlying capital pool and can be exchanged at any time using the Ragequit feature.

There is no cap on the amount of shares which can be issued, and each share carries one vote.

All new shares are issued at a rate of 0.1WETH/share and new members may request a maximum of 10 shares when joining.

### Proposal Etiquette

While not required, we recommend that anyone looking to make a Proposal receive soft consensus from the DAO before doing so. The best way to do this is as follows: 

* Create a post on the [Raid Guild Forum](https://forum.raidguild.org/) detailing why it benefits the DAO and how it will be executed. 
* Share that Forum post in Discord under the relevant Guild HQ channel. 
* Mention that you are planning to submit or have submitted the proposal during the weekly Roundtable. 

By following these steps, your Proposal will receive far more feedback and have a much higher chance of being passed. 

If you are a new member joining Raid Guild, you will need to be Championed by an existing member. We will cover how this works in the How To Become a Guilder section.
