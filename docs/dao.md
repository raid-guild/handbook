---
id: dao
title: The DAO
sidebar_label: The DAO
---

Raid Guild is structured as Distributed Autonomous Organization - better known as a DAO.

You can access the [Raid Guild DAO here](https://app.daohaus.club/dao/0x64/0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f).

As a DAO, members have staked capital (in the form of [wxDAI](https://www.xdaichain.com/for-developers/developer-resources/wrapped-xdai)) to the War Chest in exchange for Shares. All capital is held by a trustless smart contract and distributed in accordance to Proposals governed by Members. No one person owns the keys to the smart contract, and funding can only be distributed if consensus is reached among shareholders.

Every member of Raid Guild has at least 1 Share, and Shares are used to vote on proposals and access private channels in Discord.

Raid Guild uses Wrapped xDAI as it’s base currency, which can be quickly converted to and from xDAI using the [Wrap ETH](https://wrapeth.com/) tool (made with love by the Raid Guild).

### Moloch V2 Primer

Raid Guild utilizes the Moloch V2 framework. A great overview of Moloch V2 and it’s benefits can be found [here](https://medium.com/raid-guild/moloch-evolved-v2-primer-25c9cdeab455).

Moloch was popularized due to its Minimum Viable DAO design and the advent of “ragequit” - a means for members to exit the DAO by exchanging their shares for a pro-rata claim on the War Chest’s assets.

The TLDR of Moloch V2 is that it allows for an optimized War Chest and new Proposal Types. Moloch V2 can hold hundreds of different ERC20 tokens, and allows for anyone (including those without shares) to make a proposal to the DAO.

### Proposal Types

Within the War Chest, members can make a number of different proposals including:

-   **Membership** - Requesting new shares to join the DAO
-   **Funding** - Requesting funding from the DAO
-   **Whitelist Token** - Request to add support for a new ERC20 token.
-   **GuildKick** - Request to forcibly remove a malicious member through a vote
-   **Trading** - Request the DAO to swap assets within the War Chest

### Proposal Process

To submit a proposal, select Proposals followed by **New Proposal**.

Select the Proposal Type (described above) and fill in all fields. Here are some of the things you’ll want to keep in mind when filling out a proposal.

-   **TITLE:** Enter a description of the proposal. Example: New Member - Igor Bogdanoff
-   **DESCRIPTION:** Anything you believe is relevant to your proposal. The shorter the description the better, and the important piece here is the _WHAT_ you are asking for and _WHY_.
-   **LINK:** Whatever information gives us the best context to review your proposal and make an informed decision.
-   **SHARE REQUESTED:** The number of Shares request. Every Raid Guild Share is equal to 5 wxDAI. New members may request a maximum of 100 shares for a total of 500 wxDAI.
-   **TOKEN TRIBUTE:** The amount of capital you are committing to deposit to the War Chest. Tribute is relevant to Membership Proposals.
-   **+ LOOT:** Loot is a non-voting share. This means you will have shares which can be raqequit but do not hold voting rights. Loot shares cost the same as regular share at 5 wxDAI/share.

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

All new shares are issued at a rate of 5 wxDAI/share and new members may request a maximum of 100 shares when joining.

### Migration to xDAI

On February 18, 2021, Raid Guild migrated its on-chain DAO to the xDAI network in order to reduce the burden of high gas fees on Ethereum mainnet and facilitate more on-chain interactions, governance, and experimentation.

Our migration [proceeded](https://forum.daohaus.club/t/how-to-do-the-xdai-migration/278) as follows:

1. Create a Gnosis Safe multisig with 7 active Raid Guild members on mainnet, and an equivalent Safe on xDAI
2. Initiate proposals to send the balance of each token in the War Chest to the mainnet Safe
3. Vote on, pass, and process the proposals, resulting in the tokens being sent to the mainnet Safe
4. From the Safe, send each token over the [xDAI](https://dai-bridge.poa.network/) [bridge](https://xdai-omnibridge.web.app/) to the Safe on xDAI
5. Wrap the resulting xDAI into wxDAI
6. Summon a new DAO on xDAI using DAOhaus' multisummoner feature to instantiate the new DAO with all existing members (see the next section for details)
7. From the xDAI Safe, send the balance of each token into the new DAO
8. `Sync` each token in the new DAO bank to reflect the new balances

### Share Price Change

At the same time as the migration to xDAI, Raid Guild [changed its membership and share price model](https://forum.daohaus.club/t/changing-our-share-price-from-an-eth-peg-to-a-dai-peg/230). This was done in order to return the cost of joining the guild to a more reasonable rate -- $500 vs. 1 ETH ($1900 at the time) -- and to ensure that it stays that way in the future.

However, this change created a new wrinkle. Setting the new cost of joining the guild so much lower than previously would have diluted the financial value of existing shares as new members joined. To counteract this effect, Raid Guild granted additional shares to existing members at the cutover time. The amount of additional shares was determined by the ratio of the previous joining price (1 WETH = $1900) to the new joining price ($500), i.e. `3.8`.

Since Moloch shares are integers, introducing this decimal multiplier would have caused some rounding errors, so Raid Guild split _all_ shares (both pre- and post-cutover) by a factor of 10. This meant that existing members' shares were multiplied by `38` in the new xDAI DAO, the new minimum shares for full membership increased from 10 to 100 shares, and the new share price is now $5 per share. The full calculation can be found in [this worksheet](https://docs.google.com/spreadsheets/d/1VTY0Qr7blE9fN1b76PT0Hi_F8bCEHIbLBi1xZon7oBc/edit#gid=0).

### Contract Addresses

| Name                    | xDAI Address                               | Mainnet Address (deprecated)               |
| ----------------------- | ------------------------------------------ | ------------------------------------------ |
| DAO                     | 0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f | 0xbeb3e32355a933501c247e2dbde6e6ca2489bf3d |
| Minion                  | TBD                                        | 0x17405148473E521b62cBCf8eBd929E8A30C4D3aA |
| NFT Certificates        | TBD                                        | 0x7b408ad9019c20c5a1222Bf7f7e58A6Fa00A086a |
| NFT Badges              | TBD                                        | 0xAA65E7c8BBf3F2C6d2d8634Fc830F050a55BBbF9 |
| NFT Sale Trading Cards  | TBD                                        | 0x3480a5E2E8A381F200F2e547f5aE6c3042e67449 |
| ENS Subdomain Registrar | TBD                                        | 0x5Cb634C351A03FF2BfB59C73dB8B429FFdFBbB62 |
| ETH Registry            | TBD                                        | 0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85 |
| Public Resolver         | TBD                                        | 0xDaaF96c344f63131acadD0Ea35170E7892d3dfBA |
