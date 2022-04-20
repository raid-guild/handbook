---
id: client-instructions
title: Instructions for Client Payment
sidebar_label: Instructions for Client Payment
---

The raid party lead is responsible for working with the client to help them make their deposit into the escrow. The following deposit instructions can be shared with clients:

## Paying with an Externally Owned Account (e.g. MetaMask)

If you are paying Raid Guild from an EOA like MetaMask, follow these instructions:

1. Go to https://smartescrow.raidguild.org/escrow/[RaidID] -- _[raid party lead: replace [RaidID] with the RaidID from Airtable]_
2. Connect your MetaMask or WalletConnect wallet
3. Follow the instructions to deposit. There will be 2 transactions - the first to approve the Raid Guid Escrow contract to transfer your tokens, and the second to make the deposit itself.
4. Refresh to verify that the deposit has been made (you may need to reconnect your wallet).

## Paying with a Gnosis Safe

If you are paying Raid Guild from a Gnosis Safe, follow the below instructions to generate the correct transaction from the Gnosis Safe itself. Alternatively, you can use the WalletConnect app in the Gnosis Safe to interact with the Raid Guild Escrow app directly (e.g., as if you were using Metamask).

#### Step 1: Approve the Raid Guild Escrow contract to transfer your tokens

1. Go to your Gnosis Safe interface
2. Click New Transaction
3. Click Contract Interaction
4. In the Recipient field, paste the address of the token you're paying with
    - wxDAI: `0xe91D153E0b41518A2Ce8Dd3D7944Fa863463a97d`
    - WETH: `0x36c06Cb8EE68D632bDEfeb969b4751F73c67d891`
5. The ABI field will auto-populate and a dropdown menu will appear underneath
6. From the dropdown menu, select the Approve function. Two new fields will appear underneath
7. In the first field (`usr` for DAI or `guy` for WETH), paste the address of the Raid Guild Escrow contract on xDAI: `0x7f8F6E42C169B294A384F5667c303fd8Eedb3CF3`
8. In the second field (`wad`), enter the amount of tokens to deposit, multiplied by 10^18.
    - If your payment does not have any decimals (e.g. 10 DAI, not 10.5 DAI), then multiplying by 10^18 is equivalent to adding 18 zeroes to the end.
    - You can copy/paste 18 zeroes from here: `000000000000000000`
9. Click Review
10. Check that everything matches the correct inputs, and then click Submit
11. Process the transaction as you would any other Gnosis Safe transaction

#### Step 2: Deposit into the escrow

1. Click New Transaction again
2. Click Contract Interaction
3. in the Recipient field, paste the address of the Raid Guild Escrow contract: `0x7f8F6E42C169B294A384F5667c303fd8Eedb3CF3`
4. The ABI field will auto-populate and a dropdown menu will appear underneath
5. From the dropdown menu, select the confirmLocker function. Two new fields will appear underneath
6. In the first field (`value`), enter `0`.
7. In the second field (`index`). enter [Escrow Index] -- _[raid party lead: replace [Escrow Index] with the Escrow Index from Airtable]_
8. Click Review
9. Check that everything matches the correct inputs, and then click Submit
10. Process the transaction as you would any other Gnosis Safe transaction

Finally, check with Raid Guild to confirm that the deposit was successful.

Note: Gnosis Safe's can now use WalletConnect to connect to web3 applications directly. If that works, things will be much easier than following all the steps above. Unfortunately, it doesn't always work.
