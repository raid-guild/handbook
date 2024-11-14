---
id: dao-operations
title: DAO Operations
sidebar_label: DAO Operations
---

# DAO Proposals and DAOhaus Guide

RaidGuild operates through member-driven proposals that support both the Guild and broader web3 projects. Using the [DAOhaus](https://daohaus.club/) platform and [Moloch v3 DAO contracts](https://docs.daohaus.club/contracts/moloch-v3), members can create, sponsor, vote on, and process various proposal types, shaping the Guild’s direction and projects in a decentralized way. This guide outlines both the types of proposals you can make and how to navigate DAOhaus to get involved.

---

## Types of Proposals

Guild members can submit different proposals based on their goals:

- **DAO Token Swap**: Swap tokens to join the DAO by tributing capital in exchange for shares.
- **ERC-20 Token Transfer**: Request funds for internal projects or improvements.
- **Remove Member**: Request the removal of a member due to malicious activity.
- **Multicall Proposal Builder**: Execute multiple transactions in one proposal, such as asset swaps within the War Chest.
- **Update Governance Settings**: Change parameters like voting period or quorum requirements.
- **Add Shaman**: Grant specific permissions to an external contract for governance or project work.

## Making a Proposal

To submit a proposal in DAOhaus:

1. **Navigate to Proposals**: Go to the [RaidGuild DAO](https://admin.daohaus.club/#/molochv3/0x64/0xf02fd4286917270cb94fbc13a0f4e1ed76f7e986), select “Proposals,” and click “New Proposal.”
2. **Choose Proposal Type**: Select the appropriate proposal type from the list and fill in each field thoughtfully:
   - **Title**: Include a clear, concise title. Example: “New Member – Igor Bogdanoff”
   - **Description**: Briefly outline what and why, keeping it to the essential details.
   - **Link**: Provide context or resources for members to review.
   - **Applicant**: Specify the recipient or address for funding proposals.
   - **Payment Requested**: Specify the amount (shares or funds) required. Members can request up to 100 shares (500 wxDAI) for new membership proposals.
   - **Request Shares**: Request voting shares in the DAO, up to 20% of the total requested amount for funding proposals.
   - **Request Loot**: Request non-voting shares (Loot), which can be Ragequit for a claim on DAO assets but do not carry voting power.
   - **Give Tribute**: Specify the capital amount you commit to the War Chest for membership or funding proposals.

### Sponsorship

After submission, your proposal will be placed in **Unsponsored Proposals**. Sponsorship by a current member is needed to move it to a vote. Although you can sponsor your own proposal as a member, having another member sponsor it ensures all requirements are met and strengthens its chances of approval.

### Voting and Processing

1. **Queued Proposals**: Sponsored proposals enter the Queue, which controls the voting flow.
2. **Voting Period**: Proposals enter a 72-hour voting period during which members cast votes. A simple majority of “Yes” over “No” is required for passage.
3. **Grace Period**: Once voting ends, a 48-hour grace period begins, allowing members to Ragequit if they disagree with the outcome.
4. **Processing**: Approved proposals are timestamped on-chain, executing all specified outcomes. Completed proposals can be reviewed in your Member Profile.

---

### Additional Resources

- **Moloch V3 Overview**: [Explore the Moloch V3 framework](https://docs.daohaus.club/contracts), which features ERC-20 governance tokens and streamlined treasury management.
- **Proposal Documentation**: For more details, see the [DAOhaus guide](https://guide.daohaus.club/).

DAO proposals in RaidGuild empower members to contribute ideas, manage funding, and refine operations. By following these guidelines, members can navigate the proposal process smoothly, helping shape the Guild’s future with every vote. 

---

### Contract Addresses

| Name                    | xDAI Address                               | Mainnet Address (deprecated)               | Optimism Address                          |
| ----------------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| DAO                     | 0xf02fd4286917270cb94fbc13a0f4e1ed76f7e986 | 0xbeb3e32355a933501c247e2dbde6e6ca2489bf3d | 0xf4f65a5c6590fbc15b3869510e5f1e7114041c53 |
| ENS Subdomain Registrar | TBD                                        | 0x5Cb634C351A03FF2BfB59C73dB8B429FFdFBbB62 | TBD                                        |
| ETH Registry            | TBD                                        | 0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85 | TBD                                        |
| Multisig                | TBD                                        | 0x3C3692681cD1c0F42FA68A2521719Cc24CEc3AF3 | TBD                                        |
| Minion                  | TBD                                        | 0x17405148473E521b62cBCf8eBd929E8A30C4D3aA | TBD                                        |
| NFT Certificates        | TBD                                        | 0x7b408ad9019c20c5a1222Bf7f7e58A6Fa00A086a | TBD                                        |
| NFT Badges              | TBD                                        | 0xAA65E7c8BBf3F2C6d2d8634Fc830F050a55BBbF9 | TBD                                        |
| NFT Sale Trading Cards  | TBD                                        | 0x3480a5E2E8A381F200F2e547f5aE6c3042e67449 | TBD                                        |
| Public Resolver         | TBD                                        | 0xDaaF96c344f63131acadD0Ea35170E7892d3dfBA | TBD                                        |
| Spoils Manager          | TBD                                        | N/A                                        | 0x9aFA71188fC0cd4445AbC4e671B466C2ea405130 |

