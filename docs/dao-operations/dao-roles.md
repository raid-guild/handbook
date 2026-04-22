---
id: dao-roles
title: DAO Roles empowered with Hats
sidebar_label: DAO Roles (Hats)
---

In order to make operations more efficient and reduce the coordination needed at the share holder level, we've elected to create some discreet roles and give them budgets and other decision-making authorities during their appointment.

These roles are generally appointed by motivated individuals but elections can be facilitated if there are multiple Raiders interested in a role for the same term. These roles are created and appointed by the full community and can be removed/unwound in a similar fashion. We're continuing to use other good principal-agent hygiene by using quarterly budgets or streams in longer cases. Streams can be canceled with a proposal since the funds are flowing from the DAO itself.

The roles here are powered by [Hats Protocol](https://app.hatsprotocol.xyz). Skip to [the RG Hats Tree section](#roles-chart-hats-tree) to learn more about [RaidGuild Hats Tree](https://app.hatsprotocol.xyz/trees/100/92) and [proposing a role](#proposing-a-role).

## Current Roles

_loosely ordered by permanence/value shown so far_

:::tip

Create a new Role via a proposal, read more about [Proposing a Role](#proposing-a-role).

:::

### Ganggang - Quality assurance delegates

The [_Ganggang_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.5.1.4) role acts as a trusted delegate for the DAO and while they can provide several interim functionalities for interacting with the outside world, the primary function is being the releaser for escrowed [Raid Guild Improvement Proposals (RIPs)](/docs/dao-operations/rips). Currently the process is largely manual, but RIP members should request release of milestones from the <span class="channels">[#Ganggang thread](https://discord.com/channels/684227450204323876/1176281724838232185)</span> or <span class="channels">[#ops channel](https://discord.com/channels/684227450204323876/684880238362099728)</span> in [Discord](/docs/discord/navigation), please tag the `@Ganggang` role also.

The _Ganggang_ safe lives at [`0xCFFF4a6EB44bA088EEa89A84Dd113eCfDEDA9641`](https://app.safe.global/home?safe=gno:0xCFFF4a6EB44bA088EEa89A84Dd113eCfDEDA9641) on several chains, however, only on Gnosis is it a Hat-gated Safe. The others _will_ use a bridge module to be controlled from Gnosis.

- [Gnosis](https://gnosisscan.io/address/0xCFFF4a6EB44bA088EEa89A84Dd113eCfDEDA9641)
- [Optimism](https://optimistic.etherscan.io/address/0xCFFF4a6EB44bA088EEa89A84Dd113eCfDEDA9641)
- [Mainnet](https://etherscan.io/address/0xCFFF4a6EB44bA088EEa89A84Dd113eCfDEDA9641)
- [Base](https://basescan.org/address/0xCFFF4a6EB44bA088EEa89A84Dd113eCfDEDA9641)

The _Ganggang_ role is executing 1-2 transactions per month and is currently an unpaid role. This role is effectively perpetual since the expectations are fairly minimal and members can renounce if they are looking to become inactive.

There are a couple of temporary budgets also being escrowed by _Ganggang_

- [Temporary Cookie Jar](https://discord.com/channels/684227450204323876/1197595224675991562/1197595224675991562)
- [RIP 188: Legal Formation team budget](https://github.com/raid-guild/RIPs/issues/188)

#### Claiming the _Ganggang_ role

The _Ganggang_ role requires holding two other roles in order to claim:

- [_RaidGuild Member_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.1)
- [_Healer (Operations)_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.5.1.2)
- Then claim the [_Ganggang_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.5.1.4) role and associated Safe signing authority

Currently the _Ganggang_ multisig (Safe) authority exists as a 3/7, so up to 7 Guild Members can hold the _Ganggang_ role at one time and it will require 3 to confirm a transaction. If a member needs to be rotated we can raise a proposal to transfer the role from an existing holder(s) to the new appointee(s). A member of _Ganggang_ can also renounce their role (and signing authority) at any time, if needed.

### Infrastructure Maestro - Holders of the devops keys

The [_Infrastructure Maestro(s)_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.5.1.5) are responsible for making sure the infrastructure accounts are secured and pipelines are deploying when other members push updates. Since these SaaS services tend to charge per seat, we've elected to consolidate these permissions to a couple of representatives acting as backups for each other.

The _Infrastructure Maestro (IM)_ role also has its own multisig (Safe) for receiving ongoing resources for these SaaS services that keep the Guild running. There is an [active stream](https://app.superfluid.org/stream/gnosis/0x181ebdb03cb4b54f4020622f1b0eacd67a8c63ac-0xcbf079a94e2ca54cde49478e92561215c9f534bf-0x59988e47a3503aafaa0368b9def095c818fdca01-0.0?view=0x181eBDB03cb4b54F4020622F1B0EAcd67A8C63aC) running from the [Guild](https://app.superfluid.org/?view=0x181eBDB03cb4b54F4020622F1B0EAcd67A8C63aC) to the [IM Safe](https://app.superfluid.org/?view=0xcBF079a94e2cA54CDe49478e92561215c9F534bF) and this stream can be deactivated at any time with a proposal from the Guild. The Safe is configured as a 1/1 with either of the current wearers able to claim the signing authority.

Current services handled by _Infrastructure Maestro_:

- [Vercel](https://vercel.com)
- [Pinata](https://pinata.cloud)
- [TheGraph](https://thegraph.com)
- [Railway](https://railway.app)
- [Heroku](https://heroku.com)
- [Google Cloud](https://cloud.google.com/)
- [Guild.xyz](https://guild.xyz/raidguild)
- [DigitalOcean](https://www.digitalocean.com/)

If you need to deploy new infra, reach out to one of the IM for updating.

:::info[Latest budget]

~2.5k per year

:::

#### Claiming the _Infrastructure Maestro_ role

The _Infrastructure Maestro_ role requires holding two other roles in order to claim:

1. [_RaidGuild Member_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.1)
2. [_Healer (Operations)_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.5.1.2)
3. Claim the [_Infrastructure Maestro_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.5.1.5) role and associated Safe signing authority

### Brand Steward - Unifying our shared aesthetic and persona

The [_Brand Steward_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.4.1.4) is responsible for providing a cohesive brand across the feel & aesthetic of the Guild's digital domains. Several resources are offered to provide guidance to Guild members applying the brand to their project or implementation.

- [Raid Guild design system](/docs/dao-operations/design-system) (to be converted to Tailwind theme/Shadcn components)
- Raid Guild Design System Figma
- <span class="channels">[#brand](https://discord.com/channels/684227450204323876/1176281724838232185)</span> and <span class="channels">[#dot-org](https://discord.com/channels/684227450204323876/1176281724838232185)</span> Discord channels

The _Brand Steward_ requests a regular budget where needed to ensure the project and maintenance are advanced. The Steward will document goals for the current budget and provide regular updates throughout the duration of the epoch.

:::info[Latest budget]

~1.6k per year

:::

_It's expected that a majority of the budget is allocated to completing the actual execution/implementation tasks. Roughly, up to a third of the budget should be used for Steward coordination responsibilities and planning._

#### Claiming the _Brand Steward_ role

To claim the _Brand Steward_ role a member will need to claim two other roles:

1. [_RaidGuild Member_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.1)
2. [_Archer (Design)_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.4.1.2)
3. The _Brand Steward_ role is appointed by the [_Ganggang_](#ganggang---quality-assurance-delegates) role via offchain consensus
   - Claim the _Brand Steward_ role

### Handbook Steward - Keeping our knowledge maintained

The [_Handbook Steward_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.4.2.4) is responsible for budgeting and directing maintenance of [this Handbook](/). The main resources for the Steward are the [Handbook repo](https://github.com/raid-guild/handbook) and the <span class="channels">[#handbook](https://discord.com/channels/684227450204323876/1176281724838232185)</span> Discord channel.

The _Handbook Steward_ requests a regular budget where needed to ensure the project and maintenance are advanced. The Steward will document goals for the current budget and provide regular updates throughout the duration of the epoch.

:::info[Latest budget]

~1.6k per year

:::

_It's expected that a majority of the budget is allocated to completing the actual execution/implementation tasks. Roughly, up to a third of the budget should be used for Steward coordination responsibilities and planning._

#### Claiming the _Handbook Steward_ role

To claim the _Handbook Steward_ role a member will need to claim two other roles:

1. [_RaidGuild Member_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.1)
2. [_Scribe (Content)_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.4.2.2)
3. The _Handbook Steward_ role is appointed by [_Ganggang_](#ganggang---quality-assurance-delegates) via offchain consensus
4. Claim the _Handbook Steward_ role

### Sync Steward - Coordinating the synchronous layer

The [_Sync Guild_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.5.3) is responsible for coordinating the Guild's [synchronous meetings](../discord/meetings) so they are efficient and useful to members and attendees. The Sync Steward can optionally delegate hosting and scribing responsibilities to a Jester and/or Scribe.

Sync Steward Auxiliary Roles

- **_Jester_** - _Sync Jesters_ are responsible for emceeing the synchronous gatherings. They can leverage known topics and field topics that are relevant to current goals of the Guild.
- **_Scribe_** - _Sync Scribes_ are responsible for recording meeting notes and sharing insights with the wider Guild

The Sync Steward is responsible for coordinating with the wider Guild to make sure topics to be discussed are relevant. They also encourage members to pick up the other roles for meetings in which they'll be in attendance.

The Steward requests a regular budget where needed to ensure the members are incentivized to participate. The Steward will document goals for the current budget and provide regular updates throughout the duration of the epoch.

:::info[Latest budget]

~3k per quarter

:::

_It's expected that a majority of the budget is allocated to completing the actual execution/implementation tasks. Roughly, up to a third of the budget should be used for Steward coordination responsibilities and planning._

#### Claiming a Sync Guild role

To claim a Sync Guild role a member will need to claim two other roles:

1. [_RaidGuild Member_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.1)
2. [_Tavern Keeper (Community)_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.5.2)
3. The _Sync Steward_ role is appointed by the [_Ganggang_](#ganggang---quality-assurance-delegates) role via offchain consensus
   - Claim the _Sync Steward_ role
4. The _Jester_ and _Scribe_ roles are appointed by the _Sync Steward_ role via offchain consensus
   - Claim the _Jester_ or _Scribe_ role

### Participation Steward - Tracker of Member Activeness

The [_Participation Steward_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.5.1.6) is responsible for keeping an organized and public table of all active participants; this includes what they participated in, what their member address is, and how many shares they will be rewarded with.

See the original role creation proposal [here](https://github.com/raid-guild/RIPs/issues/213), and the latest amendment [here](https://github.com/raid-guild/RIPs/issues/227).

:::info[Latest budget]

~3k per year

:::

_It's expected that a majority of the budget is allocated to completing the actual execution/implementation tasks._

### Angry Dwarf - Keeper of the Treasury

The [_Angry Dwarf_](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.5.6) is responsible for creating quarterly accounting reports, ensuring cleric SOPs are followed, and implementing sensible portfolio management.

:::info[Latest budget]

~2k per year

:::

_It's expected that a majority of the budget is allocated to completing the actual execution/implementation tasks._

## Roles Chart (Hats Tree)

[`app.hatsprotocol.xyz/trees/100/92`](https://app.hatsprotocol.xyz/trees/100/92)

![RaidGuild Hats Tree](/img/rg-tree.png)

### Overview

#### Top (Root) Hat

The [top (root) hat](https://app.hatsprotocol.xyz/trees/100/92?hatId=92) is the parent of all the other hats. It is held by the DAO itself and can manage all the other hats via [DAO proposal](/docs/dao-operations/#making-a-proposal).

#### Auto Admin

The [Autonomous Admin](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1) hat is a helper hat that allows members to claim hats where they are eligible rather than require them being assigned directly. This is a contract that has the limited ability to assign hats to members.

#### RaidGuild Member

The [RaidGuild Member](https://app.hatsprotocol.xyz/trees/100/92?hatId=92.1.1) role is the foundation of all the roles that are part of the Guild. It is a requirement to claim most other roles. It can be claimed by having at least [100 DAO voting shares](/docs/membership/raid-guild-shares).

### Proposing a Role

To propose a new role, head over to the Hats App and view the [RaidGuild Hats Tree](https://app.hatsprotocol.xyz/trees/100/92).

1. Switch to Edit Mode in the top left corner
2. Find the role that will be the parent of the new role
3. From the parent role, click the `+` button to create a new child role
4. Complete the new role details and Return to the roles list
5. You're now ready to deploy the changes for this new role
   - Since you likely aren't a wearer of the parent role, you'll need to make a [proposal to deploy the changes](/docs/dao-operations/#making-a-proposal)
   - If you are a wearer of the parent role, you hit the deploy button to deploy the changes directly
6. Get the necessary data for the proposal
   - Open the Transaction Call data section of the roles list
   - Copy the Hats contract address and use as the target of the transaction for this proposal
   - Copy the Hats transaction calldata and use as the calldata of the transaction for this proposal
7. Submit the proposal
