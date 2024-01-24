---
id: funding-an-escrow
title: Funding an Escrow
sidebar_label: Funding an Escrow
---

:::danger WARNING

Before sending any funds to an escrow ensure that the client address can call the proper functions to `release` and `lock`

:::

The Raid party lead is responsible for working with the client to help them make their deposit into the escrow. The following deposit instructions can be shared to ensure that the client is able to make their deposit successfully.

## Paying with an Externally Owned Account (e.g. MetaMask, Rainbow)

If you are funding an escrow from an EOA like MetaMask, follow these instructions:

1. Go to `https://dm.raidguild.org/escrow/[RaidID]`
   <br />_(<span class='cleric'>**Cleric note:**</span> replace [RaidID] with the Raid ID from Dungeon Master)_
2. Connect your MetaMask or WalletConnect wallet
3. Follow the instructions to deposit, there will be 2 transactions
   - the first transaction is to approve the Raid Guid Escrow contract to transfer your tokens
   - the second on is to actually transfer the tokens to the escrow contract
4. Refresh to verify that the deposit has been made (you may need to reconnect your wallet).

The Escrow is also accessible directly in [SmartInvoice](https://app.smartinvoice.xyz), so once you get the escrow address, you can provide the SmartInvoice link which may be more client friendly. A handy link to SmartInvoice is provided on the Raid's escrow page.

:::warning ALERT

Only whitelisted tokens will be accessible as escrow tokens! Only send tokens to an escrow you're sure are whitelisted. _Additional tokens cannot be whitelisted after creation._

:::

## [Legacy] Gnosis Safe instructions

Connecting via WalletConnect or the Safe Apps should allow you to follow the same [process as above for EOAs](#paying-with-an-externally-owned-account-eg-metamask-rainbow).

If you are paying Raid Guild from a Gnosis Safe, follow the below instructions to generate the correct transaction from the Gnosis Safe itself. Alternatively, you can use the WalletConnect app in the Gnosis Safe to interact with the Raid Guild Escrow app directly (e.g., as if you were using Metamask).

:::note INFO

Using the transaction builder used to be necessary. Now you should be able to use WalletConnect or connect to a safe via Safe Apps so this **should\* no longer be needed.**

:::

### Step 1: Approve the escrow contract to transfer the token

1. Go to your Gnosis Safe interface
2. Click New Transaction
3. Click Contract Interaction
4. In the Recipient field, paste the address of the token you're paying with
   - wxDAI: `0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d`
   - WETH: `0x36c06Cb8EE68D632bDEfeb969b4751F73c67d891`
5. The ABI field will auto-populate and a dropdown menu will appear underneath
6. From the dropdown menu, select the Approve function. Two new fields will appear underneath
7. In the first field (`usr` for DAI or `guy` for WETH), paste the address of the Raid Guild Escrow contract on Gnosis
8. In the second field (`wad`), enter the amount of tokens to deposit, multiplied by 10^18.
   - If your payment does not have any decimals (e.g. 10 DAI, not 10.5 DAI), then multiplying by 10^18 is equivalent to adding 18 zeroes to the end.
   - You can copy/paste 18 zeroes from here: `000000000000000000`
9. Click Review
10. Check that everything matches the correct inputs, and then click Submit
11. Process the transaction as you would any other Gnosis Safe transaction

### Step 2: Transfer or deposit tokens into the escrow

1. Click New Transaction again
2. Click Contract Interaction
3. In the Recipient field, paste the address of the Raid Guild Escrow contract
4. The ABI field will auto-populate and a dropdown menu will appear underneath
5. From the dropdown menu, select the `deposit` function. Two new fields will appear underneath
6. In the first field (`token`), enter the payment token address.
7. In the second field (`amount`), enter the amount in wei
   - If your payment does not have any decimals (e.g. 10 DAI, not 10.5 DAI), then multiplying by 10^18 is equivalent to adding 18 zeroes to the end.
   - You can copy/paste 18 zeroes from here: `000000000000000000`
8. Click Review
9. Check that everything matches the correct inputs, and then click Submit
10. Process the transaction as you would any other Gnosis Safe transaction

Finally, check with Raid Guild to confirm that the deposit was successful.
