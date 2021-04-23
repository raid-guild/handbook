---
id: proposal-types
title: Proposal Types
sidebar_label: Proposal Types
---

Members can make a number of different proposals including:

-   **Membership** - Tributing capital and Requesting new shares to join the DAO
-   **Funding** - Tributing Spoils or Requesting funds from the DAO to work on internal projects and improvements
-   **Token** -  Request to add support for a new ERC20 token
-   **Trade**  - Request the DAO to swap one asset for another within the War Chest
-   **GuildKick** - Request to forcibly remove a malicious member through a vote
-   **Minion** - A contract that allows execution of arbitrary calls i.e swapping assets in War Chest


### Proposal Process

To submit a proposal, navigate to the [Raid Guild DAO](https://app.daohaus.club/dao/0x64/0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f) and select “View Proposals” followed by New Proposal.

Select the Proposal Type (described above) and fill in all fields. Here are some of the things you’ll want to keep in mind when filling out a proposal.

-   **TITLE:** Enter a description of the proposal. Example: New Member - Igor Bogdanoff
-   **DESCRIPTION:** Anything you believe is relevant to your proposal. The shorter the description the better, and the important piece here is the _WHAT_ you are asking for and _WHY_.
-   **LINK:** Whatever information gives us the best context to review your proposal and make an informed decision.
-   **APPLICANT** With respect to funding proposals, this is the recipient or sender address you would like to have funds sent to or from.  
-   **PAYMENT REQUESTED:** The number of Shares requested. Every Raid Guild Share is equal to 5 wxDAI. New membership proposals may request a maximum of 100 shares for a total of 500 wxDAI.
-   **+REQUEST SHARES:** Voting shares in the DAO. If it is a funding proposal, Members can request payment be made in shares up to 20% of the total amount requested.
-   **+REQUEST LOOT:** Non-voting shares in the DAO. This means you will have shares which can be raqequit but do not hold voting rights. Loot shares cost the same as regular shares at 5 wxDAI/share.
-   **GIVE TRIBUTE:** The amount of capital you are committing to deposit to the War Chest. (Tribute is relevant to Membership and Funding Proposals).

After submitting a proposal, it will enter the **Unsponsored Proposals** section. This means someone with shares (which could be you) must Champion the proposal in order for it to be moved to voting.

*Note: You can sponsor your own Proposal, but it is recommended that you have another member sponsor it so they can make sure you have filled out the proposal with the correct information and you get the result you intended for.*

### Processing 
Once the proposal has been sponsored it will enter the **Queue**. The queue ensures proposals are funneled to voting in an orderly fashion. One proposal will go from the queue to the Voting Period once every two hours.

Once in the **Voting Period**, members can now vote on the proposal. Every proposal has a 72 hour voting period in which it must receive more Yes than No votes to pass.

After voting has ended, the proposal enters a **Grace Period** which gives members time to ragequit if they do not like the outcome of the vote. The grace period lasts 48 hours.

Next, The proposal is sent to **Processing** in which the vote is time stamped on-chain.

After being processed, the proposal is marked as **Completed**, and all shares, funds or outcomes are executed as specified in the proposal. All outcomes of a proposal that affect you can be viewed by clicking your Address (top right) and selecting **View Member Profile**.

### Claiming

For members that received Funding, you will need to withdraw the funds from the DAO contract under Internal Balances (viewable from Member Profile).

_Note: If you mess up your proposal, you can cancel it while in it remains Unsponsored. To do so, click the proposal and hit Cancel at the bottom. Any tribute can be withdrawn from Internal Balances to resubmit with the correct amount(s)._



### Contract Addresses

| Name                    | xDAI Address                               | Mainnet Address (deprecated)               |
| ----------------------- | ------------------------------------------ | ------------------------------------------ |
| DAO                     | 0xfe1084bc16427e5eb7f13fc19bcd4e641f7d571f | 0xbeb3e32355a933501c247e2dbde6e6ca2489bf3d |
| ENS Subdomain Registrar | TBD                                        | 0x5Cb634C351A03FF2BfB59C73dB8B429FFdFBbB62 |
| ETH Registry            | TBD                                        | 0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85 |
| Multisig                | TBD                                        | 0x3C3692681cD1c0F42FA68A2521719Cc24CEc3AF3 |
| Minion                  | TBD                                        | 0x17405148473E521b62cBCf8eBd929E8A30C4D3aA |
| NFT Certificates        | TBD                                        | 0x7b408ad9019c20c5a1222Bf7f7e58A6Fa00A086a |
| NFT Badges              | TBD                                        | 0xAA65E7c8BBf3F2C6d2d8634Fc830F050a55BBbF9 |
| NFT Sale Trading Cards  | TBD                                        | 0x3480a5E2E8A381F200F2e547f5aE6c3042e67449 |
| Public Resolver         | TBD                                        | 0xDaaF96c344f63131acadD0Ea35170E7892d3dfBA |
