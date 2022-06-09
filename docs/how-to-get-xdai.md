---
id: how-to-get-xdai
title: How to get xDAI
sidebar_label: How to get xDAI
---

Raid Guild uses [DAOhaus](https://daohaus.club/) for its DAO framework. 

Raid Guild DAOs are summoned on the Gnosis Chain (formerly xDAI) platform, which means the transactions for DAO governance are extremely inexpensive. 

xDAI can be wrapped to wxDAI for use with the Raid Guild DAO, and it can also be swapped for Raid Guild’s own RAID token.

## How to get xDAI

1.  Set up the Gnosis Chain network in MetaMask<br />
    *then* 
2.  Purchase xDAI directly<br />
    *or*
3.  Swap to xDAI from DAI on a different network

### 1. Set up the Gnosis Chain network in MetaMask

[Gnosis Chain was previously known as xDai Chain](https://www.xdaichain.com/about-gc/faqs/xdai-chain-basics "Read Gnosis Chain basics on the xdaichain website"). Transactions still use the xDai token.

* In MetaMask, click the Add Network button or navigate to Networks in Settings.
* Copy in the Gnosis Chain network information and save it.

| Field | Value |
| -------- | -------- |
| Network name     | Gnosis Chain     |
| New RPC URL     | https://rpc.gnosischain.com/    |
| Chain ID     | 100     |
| Symbol     | xDAI     |
| Block Explorer URL     | https://blockscout.com/xdai/mainnet/     |
<br />
<small>(As at April 4, 2022. Check the [Gnosis Chain website](https://www.xdaichain.com) for updates)</small>

![Add Network dropdown in MetaMask](https://i.imgur.com/hNYgffw.png)
<br /><small>Add Network option in MetaMask.</small>

![Example of filled form](https://i.imgur.com/gSM6FAB.png)
<br /><small>Example of filled form.</small>

#### Gnosis Chain tips

* Check the Gnosis Chain website for [updated network settings](https://www.xdaichain.com/for-users/getting-started-with-gc).
* Easy mode: use [chainlist.org](https://chainlist.org/) to add the Gnosis Chain network to MetaMask.
    * Connect your wallet on [chainlist.org](https://chainlist.org/).
    * Search for Gnosis Chain.
    * Click the Add To Metamask button.

### 2. Purchase xDAI directly

Buy xDAI directly to skip any swapping and bridging.

The Gnosis Chain website mentions several [options for direct purchase of xDAI](https://www.xdaichain.com/for-users/getting-started-with-gc#2-get-some-xdai-the-stable-transaction-token-for-the-chain "‘Get some xDAI’ on the Gnosis Chain website").

* Ramp Network—[some KYC involved](https://support.ramp.network/en/articles/441-what-are-the-kyc-limits "Ramp Network KYC limits"); [available in most countries](https://support.ramp.network/en/articles/433-what-countries-do-you-support "‘What countries do you support’ on the Ramp Network website")
* Mt. Pelerin—minimal KYC (phone number, email address) for small purchases; not available for US persons and some other countries ([See a list of supported countries](https://www.mtpelerin.com/support "Mt Pelerin support website") under the ‘Buying cryptos by bank transfer’ heading); 1–5 day delivery time for those outside Switzerland.

![Copy wallet address](https://i.imgur.com/f2uY8uT.png)
<br /><small>Send the xDAI to your wallet address.</small>


### 3. Bridge to xDAI from DAI on a different network

Use your regular exchange to purchase something that can be swapped into DAI, and then bridge it over to xDAI.

Transaction and swap fees are lower if you use DAI on an L2 chain or sidechain instead of using DAI on the Ethereum Mainnet.

This example uses the Polygon network, and there are 5 steps.

#### 3.1. Set up the Polygon Mainnet in MetaMask

* In MetaMask, click the Add Network button, or navigate to Settings>Networks and click Add a Network.
* Copy in the Polygon Mainnet network information and save it.

| Field | Value |
| -------- | -------- |
| Network name     | Polygon Mainnet     |
| New RPC URL     | https://polygon-rpc.com/    |
| Chain ID     | 137     |
| Symbol     | MATIC     |
| Block Explorer URL     | https://polygonscan.com/     |

<br /><small>(As at April 4, 2022. Check the [Polygon website](https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/ "‘Add Polygon Network’ on the Polygon website") for updates on adding the Polygon Mainnet to MetaMask)</small>


#### 3.2. Buy some MATIC, send it to your MetaMask wallet.

The Polygon chain was previously known as the Matic Network. The token is still named MATIC.

Buy some MATIC, send it to your MetaMask wallet.

:::info

Don’t swap 100% of your MATIC. Leave enough to cover gas fees, or the transaction won’t go through. 

:::

If your regular exchange allows you to withdraw MATIC to the Polygon Mainnet, go ahead and make your purchase from them. Other options for purchase and withdrawal of MATIC to the Polygon Mainnet (at the time of writing) include [Binance](https://blog.polygon.technology/how-to-deposit-and-withdraw-on-polygon-pos-commit-chain-on-binance/) and [Crypto.com](https://help.crypto.com/en/articles/5597853-send-and-receive-polygon-matic).

![Copy wallet address](https://i.imgur.com/VSiswiR.png)
<br /><small>Send the MATIC to your wallet address.</small>

#### 3.3. Add the DAI token to your Polygon wallet

* Copy the contract address for the token (See table below).
* In MetaMask, click Import Tokens, then paste in the contract address and wait for the rest of the fields to fill automatically.

| Field | Value |
| -------- | -------- |
| [DAI stable coin contract address (PoS)](https://polygonscan.com/token/0x8f3cf7ad23cd3cadbd9735aff958023239c6a063 "View DAI stable coin contract address on Polygonscan")     | 0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063    |

![](https://i.imgur.com/t6d6DGt.png)
<br /><small>Import tokens and Swap, highlighted with green.</small>

![Import Tokens screen](https://i.imgur.com/HpKQU4p.png)
<br /><small>Import Tokens screen.</small>

#### 3.4. Swap the MATIC to DAI

It’s easiest to do the swap in your MetaMask wallet. A DEX like Honeyswap also works.

**Swap MATIC to DAI in MetaMask**

* Click the Swap icon.
* Choose the tokens to swap, and the amount. (Don’t swap 100%; leave some for gas fees)
* Review the swap and confirm it.

![MetaMask swap screen](https://i.imgur.com/V6WbxG8.png)
<br /><small>Swap options in MetaMask.</small>

**Swap MATIC to DAI on Honeyswap**

You may get a better deal on swap fees by using a DEX like Honeyswap instead of MetaMask. 

* Go to [Honeyswap](https://app.honeyswap.org/#/swap) and connect your wallet, approving the connection in MetaMask.
* Switch to the Polygon Mainnet chain in MetaMask to swap MATIC.
* Select MATIC to swap from, then find DAI in the ‘to’ list.
* Enter the amount to swap, review the transaction details after a swap route is found, click Swap when you’re ready and confirm the swap. (Don’t swap 100%; leave some for gas fees)
* Approve the transaction in MetaMask. 
* You’ll see a ‘PENDING’ notification at the top of the screen, and a confirmation message when the transaction has completed.

![Honeyswap form](https://i.imgur.com/78bJE8G.png)
<br /><small>Honeyswap swap form with transaction details.</small>

![Honeyswap notification messages](https://i.imgur.com/HStojDL.png)
<br /><small>Pending and Confirmed notification messages.</small>

#### 3.5. Bridge the DAI to xDAI

The bridging step is occasionally difficult.

Here’s what’s typically involved with bridging:
1. A confirmation in MetaMask to *connect your wallet* to the bridge.
2. A transaction to *approve the transfer* of the token.
3. A transaction to *send the transaction*.
4. A transaction you sign to *claim the funds*.

If you get stuck between steps 2 and 3, try the transaction again from the beginning.

The Gnosis Chain website has a [section on bridges](https://www.xdaichain.com/for-users/bridges "Bridges on the Gnosis Chain website") (somewhat out of date as at April 4, 2022), and we’ll pick the [Connext bridge for Polygon to xDAI bridging](https://bridge.connext.network/DAI-from-polygon-to-gnosis).

**How to bridge**

* [Open the Connext site](https://bridge.connext.network/DAI-from-polygon-to-gnosis) and connect your wallet.
* Enter the amount to bridge, review the transaction details and fees after a  route is found, click the ‘Approve DAI’ button.
* In MetaMask, confirm the transaction that gives the bridge permission to access your DAI. Set a spend limit if possible.
* The ‘Approve DAI’ button text should change to ‘Approving DAI’, and then change again to ‘Swap’.
* Click the ‘Swap’ button, then the ‘Confirm’ button, and approve again in MetaMask.
* After the transaction has been sent, you’ll see the Claim button. Click that, then sign the transaction in MetaMask.
* When transaction is complete, switch over to your Gnosis Chain wallet in MetaMask and you’ll see your xDAI.

![Connext Approve DAI](https://i.imgur.com/0lOSOOB.png)
<br /><small>Approve bridging of your DAI.</small>

![MetaMask permissions](https://i.imgur.com/g96d1P8.png)
<br /><small>Permission request in MetaMask. (Click Edit Permission to set a spend limit)</small>

![Connext Claim DAI](https://i.imgur.com/Mdas28v.png)
<br /><small>Claim the bridged funds.</small>

#### Bridging tips

* If you get a chance, edit the permissions to set the spend limit. Some bridges might try for unlimited spends.
* If you’re concerned about the difficulty of bridging, bridge a small amount first.
* Don’t bridge 100% of your DAI. Save some for fees.
