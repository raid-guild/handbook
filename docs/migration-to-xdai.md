---
id: migration-to-xdai
title: Migration to xDAI
sidebar_label: Migration to xDAI
--- 

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