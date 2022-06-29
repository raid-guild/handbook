---
id: discord-bots
title: Discord Bots
sidebar_label: Discord Bots
---

_Do Raid Guild Bots Dream of Electric Tweets?_

The Raid Guild relies on several bots to accomplish different automated tasks. Below is a quick guide to help you get to know how to interact with the different bots you might come across in the [Raid Guild Discord Server.](https://discord.gg/RWjkQ6DNnv)

## Collab.Land

Raid Guild uses a [Collab.Land](https://collab.land/ "Visit the collab.land website") bot to verify and grant roles and permissions on the Raid Guild Discord server.

If you are a full Raid Guild member, or an <span class="apprentice">Apprentice</span> in an onboarding cohort, you can unlock access to more server channels by using the Collab.Land bot to link your Discord account to the wallet address associated with your Raid Guild membership. 

### How to get verified with Collab.Land

1.	Unlock your wallet and switch it to the Gnosis Chain network
2.	Go to the <span class="channels">#🔓│verify-assets</span> channel and click the ‘Let’s Go!’ button
3.	The Collab.Land bot will send a message to you with instructions and a custom link to connect your wallet
4.	Click the ‘Connect Wallet’ button in that message, which will open the Collab.Land website in your browser
5.	Select Raid Guild from the list of communities, and click the Verify button
6.	Sign a transaction in your wallet if prompted
7.	Go back to the <span class="channels">#🔓│verify-assets</span> channel in Discord and wait for the message that confirms the server roles you have been granted (The message may take two minutes or more to be delivered)
8.	Enjoy access to more channels in the Raid Guild Discord server


<figure>
    <img src="https://i.imgur.com/9c3ZCf7.png" alt="Screenshot: Collab.Land bot message" />
    <figcaption>Click the ‘Connect Wallet’ button in the message you’re sent by the bot.</figcaption>
</figure>

<figure>
    <img src="https://i.imgur.com/M9WPIpm.png" alt="Screenshot: Collab.Land verify page" />
    <figcaption>Select Raid Guild, click the ‘Verify’ button, and sign a transaction if prompted.</figcaption>
</figure>

If your access to server channels drops, try getting it back by verifying again.

## Friend Time

With Friend Time you can easily coordinate times between users.

Friend Time will automatically react with a clock emoji (🕰️) to times mentioned in chat:

[https://docs.friendtime.ml/](https://docs.friendtime.ml/)

To set your timezone type `-ft map`. After that, you will be taken to a map where you can select your time zone. Copy the name of your time zone and paste it as a comment.

```jsx
-ft set <pasted time zone>
```

## BrightID Discord Bot

Verify users with Bright ID.

[https://github.com/ShenaniganDApp/brightid-discord-bot](https://github.com/ShenaniganDApp/brightid-discord-bot)

[https://discord.com/channels/709210493549674598/747917717050490960/761748220694888478](https://discord.com/channels/709210493549674598/747917717050490960/761748220694888478)

- Created by [YoungKidWarrior](https://www.notion.so/YoungKidWarrior-a5025778570f4a558a490978177c5bff)

🤖 BrightID Bot to verify users in Discord.

[Click here to Invite BrightID Bot to your server](https://bot.brightid.org/)

### Quick end-user guide

Interacting with the bot is simple; it offers 2 commands

- `!verify`: Sends a QR Code to link the BrightID app to Discord
- `!me`: Adds the "Verified" role to verified users

### To use BrightID Bot:

1. Type `!verify`
2. Scan the code (or click the link) BrightID Bot shows you
3. Use an app that has sponsorships. See [https://explorer.brightid.org/apps/index.html](https://explorer.brightid.org/apps/index.html)
4. Type `!me`

## Quartermaster

Raid Guild uses the Quartermaster bot to make a map of members and their skills. 

The Quartermaster can tell you who in the guild has a certain skill in particular, and which skills a particular someone has.

Get started by registering your own skills with the Quartermaster in the Cohorts <span class='channels'>#skills</span> channel.

Use the `!qm help` command in the <span class="channels">#skills</span> channel to see the list of commands used to interact with the Quartermaster, and [see examples and screenshots of Quartermaster usage in this write up](https://hackmd.io/@raidguild/By3kIcxD5/%2F4eTbqy2pR1qv6RSXiB87jg).

Quartermaster is a Raid Guild-skinned version of MetaFam's Skill Discovery Discord bot—check it out on [GitHub](https://github.com/MetaFam/skill-bot)! 

## xDai Faucet

xDai Faucet is a place you can recieve xDai deposited to your wallet

[https://xdai-faucet.top/](https://xdai-faucet.top/)

Made possible by @luigy 𝗹𝗲𝗺𝗼𝗻

## Sesh

😀EZPZ event creation

- Specify times however the hell you want. No more rigid formats to follow.
- Simple RSVP via reactions, plus reminders (optional).
- Wanna play Fortnite in a fortnight? We support you.

[https://sesh.fyi/](https://sesh.fyi/)

[https://sesh.fyi/manual/](https://sesh.fyi/manual/)

<iframe src="https://sesh.fyi/manual/" frameborder="0" sandbox="allow-scripts allow-popups allow-top-navigation-by-user-activation allow-forms allow-same-origin" allowfullscreen="" loading="lazy" width='100%' height='500'></iframe>

## Haus Bot

This bot is operating on Raid Guild discord channels <span class="channels">#dao-verified</span>, <span class="channels">#uh-notifications</span> and <span class="channels">#haus-of-daos</span> for the convenience of DAO Haus and UBERHAUS in order to keep track of incoming member proposals. It contains variables such as:

- the name of the proposal
- a short description of the proposal
- the amount of member shares
- the tribute amount of WXDAI
- the funding amount
- the amount of loot shares

A link on the panel redirects you to the proposal on app.daohaus.club, where you can see all the details and the actions taken upon it.

It is a notification bot that announces new DAO summons & proposals

Three cheers to vengist#8655 for creating the bot.

## Sentry

Raid Guild’s Sentry bot handles Discord server verification and gatekeeping, sends automated notifications in internal channels, and works with slash commands and DMs to perform basic tasks.

**Guard Sentry** is the gatekeeper of Raid Guild’s Discord.

**Comrade Sentry** can return basic statistics on roles, current gas price, and current RAID price, and has member-only slash commands that are used to set up Raid and Camp channels.

**Minister Sentry** can pass on anonymous feedback. Add `whisper` as the first word of a DM to Minister Sentry to have anonymous feedback relayed into the <span class='channel'>🙊│whispers</span> channel.

Read the [Raid Guild’s Sentry bot walkthrough](https://hackmd.io/@raidguild/By3kIcxD5/%2F0uqGRkMwS5y-BpVVMtVxNA) for more details on the full functionality of Sentry bot and its slash commands.

Props to Saimano#0272 for making and maintaining the sentries.
