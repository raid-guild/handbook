---
id: dao-tokens
title: DAO Tokens Guide
sidebar_label: DAO Tokens Guide
---

# DAO Tokens Guide

In RaidGuild, tokens such as xDAI, wxDAI, and RAID are essential for governance, funding, and participation within the DAO. This guide will help you acquire and manage these tokens, including detailed instructions on how to wrap xDAI into wxDAI and swap xDAI for RAID.

---

RaidGuild operates on [DAOhaus](https://daohaus.club/), a DAO management platform that uses the Gnosis Chain (formerly xDAI Chain) for inexpensive transaction fees on DAO activities.

- xDAI is the native stable token on Gnosis Chain.
- You can wrap xDAI to obtain wxDAI for use with RaidGuild’s DAO.
- xDAI can also be swapped for RaidGuild’s own RAID token.

## How to Get xDAI

1. **Set up the Gnosis Chain network in MetaMask**<br />
2. **Purchase xDAI directly**<br />
3. **Bridge to xDAI from DAI on another network**

### 1. Set up the Gnosis Chain Network in MetaMask

Gnosis Chain, previously known as xDai Chain, still uses the xDAI token for transactions. For more details on Gnosis Chain basics, refer to the [official website](https://developers.gnosischain.com/about-gc/faqs/xdai-chain-basics "Read Gnosis Chain basics on the Gnosis Chain website").

* Open MetaMask, click **Add Network** or go to **Settings > Networks**.
* Enter the following network information:

| Field                 | Value                                      |
| --------------------- | ------------------------------------------ |
| Network name          | Gnosis Chain                               |
| New RPC URL           | https://rpc.gnosischain.com/               |
| Chain ID              | 100                                        |
| Symbol                | xDAI                                       |
| Block Explorer URL    | https://blockscout.com/xdai/mainnet/       |

<figure>
    <img src="https://i.imgur.com/hNYgffw.png" alt="Screenshot: Add Network dropdown in MetaMask" />
    <figcaption>Add Network option in MetaMask.</figcaption>
</figure>

<figure>
    <img src="https://i.imgur.com/gSM6FAB.png" alt="Screenshot: Example of filled form" />
    <figcaption>Example of filled network form.</figcaption>
</figure>

#### Additional Tips for Gnosis Chain

* Always verify the [latest Gnosis Chain network settings and RPC URLs](https://developers.gnosischain.com/for-users/getting-started-with-gc#1-set-your-chain-id-and-rpc).
* Quick setup: You can add Gnosis Chain directly to MetaMask via [chainlist.org](https://chainlist.org/):
  * Connect your wallet on chainlist.org.
  * Search for Gnosis Chain.
  * Click **Add to MetaMask**.

---

### 2. Purchase xDAI Directly

Buying xDAI directly is an efficient option that avoids any bridging or swapping steps. For a full list of direct purchase options, see the [Gnosis Chain website](https://developers.gnosischain.com/for-users/getting-started-with-gc#2-get-some-xdai-the-stable-transaction-token-for-the-chain).

Options include:
- **Ramp Network**: Requires some KYC ([check KYC limits](https://support.ramp.network/en/articles/441-what-are-the-kyc-limits) and [supported countries](https://support.ramp.network/en/articles/433-what-countries-do-you-support)).
- **Mt. Pelerin**: Minimal KYC requirements for small purchases; unavailable to US residents ([see list of supported countries](https://www.mtpelerin.com/support)).

<figure>
    <img src="https://i.imgur.com/f2uY8uT.png" alt="Screenshot: Copy wallet address" />
    <figcaption>Send the xDAI to your wallet address after purchase.</figcaption>
</figure>

---

### 3. Bridge DAI to xDAI from Another Network

For users holding DAI on other chains, bridging DAI over to xDAI is a cost-effective option, especially when bridging from L2 networks or sidechains. Below is an example process using the Polygon network.

#### 3.1 Set up Polygon Mainnet in MetaMask

1. In MetaMask, click **Add Network** or go to **Settings > Networks**.
2. Enter the following details for Polygon:

| Field                 | Value                                      |
| --------------------- | ------------------------------------------ |
| Network name          | Polygon Mainnet                            |
| New RPC URL           | https://polygon-rpc.com/                   |
| Chain ID              | 137                                        |
| Symbol                | MATIC                                      |
| Block Explorer URL    | https://polygonscan.com/                   |

For updates, refer to the [Polygon setup guide](https://docs.polygon.technology/docs/develop/metamask/config-polygon-on-metamask/).

---

#### 3.2 Buy MATIC and Send to MetaMask

MATIC is the native token of Polygon. To get started, buy some MATIC and send it to your MetaMask wallet.

:::info
**Tip**: Leave enough MATIC for gas fees. Avoid swapping 100% of your MATIC to ensure your transactions can go through.
:::

<figure>
    <img src="https://i.imgur.com/VSiswiR.png" alt="Screenshot: Copy wallet address" />
    <figcaption>Transfer MATIC to your MetaMask wallet.</figcaption>
</figure>

---

#### 3.3 Add the DAI Token to Polygon in MetaMask

1. Copy the Polygon DAI contract address.
2. In MetaMask, click **Import Tokens** and paste the address.

| Field                       | Value                                      |
| --------------------------- | ------------------------------------------ |
| DAI Stable Coin (PoS)       | 0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063 |

<figure>
    <img src="https://i.imgur.com/t6d6DGt.png" alt="Screenshot: MetaMask Import tokens and Swap, highlighted with green" />
    <figcaption>Import tokens and Swap highlighted in MetaMask.</figcaption>
</figure>

---

#### 3.4 Swap MATIC for DAI

The easiest way to swap MATIC for DAI is within MetaMask, although using a DEX like Honeyswap may provide lower fees.

**Swap MATIC to DAI in MetaMask**

1. Click the **Swap** icon in MetaMask.
2. Choose MATIC as the input and DAI as the output, specifying the amount.
3. Confirm the swap.

<figure>
    <img src="https://i.imgur.com/V6WbxG8.png" alt="Screenshot: MetaMask swap screen" />
    <figcaption>Swapping MATIC to DAI in MetaMask.</figcaption>
</figure>

**Swap on Honeyswap**

1. Go to [Honeyswap](https://app.honeyswap.org/#/swap), connect your wallet, and approve the connection.
2. Select MATIC to swap from, then DAI to swap to.
3. Confirm the swap and approve it in MetaMask.

<figure>
    <img src="https://i.imgur.com/78bJE8G.png" alt="Screenshot: Honeyswap form" />
    <figcaption>Honeyswap swap form with transaction details.</figcaption>
</figure>

---

#### 3.5 Bridge DAI to xDAI

To bridge DAI to xDAI, use a reliable bridge like Connext, which allows transfers from Polygon to Gnosis Chain. The process typically involves several approvals in MetaMask.

1. Visit [Connext Bridge](https://bridge.connext.network/DAI-from-polygon-to-gnosis) and connect your wallet.
2. Enter the DAI amount and approve the transfer steps in MetaMask.

<figure>
    <img src="https://i.imgur.com/0lOSOOB.png" alt="Screenshot: Connext Approve DAI" />
    <figcaption>Approve DAI bridging on Connext.</figcaption>
</figure>

---

# Wrapping xDAI to wxDAI

RaidGuild uses wxDAI for various DAO functions. You can wrap xDAI to wxDAI on [Wrap Eth](https://www.wrapeth.com/) or Sushiswap.

## 1. Add wxDAI to MetaMask

| Field | Value                                      |
| ------| ------------------------------------------ |
| wxDAI token address | [0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d](https://blockscout.com/xdai/mainnet/token/0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d/token-transfers) |

## 2. Wrap xDAI Using Wrap Eth or Sushiswap

### Using Wrap Eth

1. Go to [Wrap Eth](https://www.wrapeth.com/), connect your wallet, and select Gnosis Chain.
2. Enter the xDAI amount to wrap, confirm, and approve the transaction.

<figure>
    <img src="https://i.imgur.com/qzX6p89.png" alt="Screenshot of wrapeth.com" />
    <figcaption>Wrap xDAI using Wrap Eth.</figcaption>
</figure>

### Using Sushiswap

1. Go to [Sushiswap](https://app.sushi.com/swap), connect your wallet, and select

 Gnosis Chain.
2. Choose xDAI as the input and wxDAI as the output, then confirm.

<figure>
    <img src="https://i.imgur.com/MGffVYM.png" alt="Screenshot of swap options in Sushiswap" />
    <figcaption>Swap options in Sushiswap for xDAI to wxDAI.</figcaption>
</figure>

---

# Getting RAID Tokens

RAID tokens can be acquired by swapping xDAI on Honeyswap.

### 1. Add RAID Token to MetaMask

| Field | Value                                      |
| ------| ------------------------------------------ |
| RAID Token Contract Address | [0x18E9262e68Cc6c6004dB93105cc7c001BB103e49](https://blockscout.com/xdai/mainnet/token/0x18E9262e68Cc6c6004dB93105cc7c001BB103e49) |

### 2. Swap xDAI for RAID on Honeyswap

1. Go to [Honeyswap](https://app.honeyswap.org/#/swap) and connect your wallet.
2. Select xDAI to swap from and RAID as the token to receive.
3. Confirm and approve the swap in MetaMask.

<figure>
    <img src="https://i.imgur.com/l8u0PH5.png" alt="Screenshot Select the RAID token" />
    <figcaption>Select the RAID token in Honeyswap.</figcaption>
</figure>

--- 

## More about $RAID

* [RAID token explainer](https://medium.com/raid-guild/why-token-why-now-4c0b8e8ea45) on the Raid Guild Medium blog
* [Contract details and supply](https://blockscout.com/xdai/mainnet/token/0x18E9262e68Cc6c6004dB93105cc7c001BB103e49/token-transfers) on the Blockscout website
* [RAID price in USD](https://www.coingecko.com/en/coins/raid-token) on the CoinGecko website
* [RAID/WETH pair info](https://info.honeyswap.org/#/pair/0x256f3a3b6897298ce11d34c0695c7cf49c15d1b3) on the Honeyswap Analytics website