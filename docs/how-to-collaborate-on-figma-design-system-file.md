---
id: how-to-collaborate-on-figma-design-system-file
title: How to collaborate  on Figma design system file.
sidebar_label: Figma design system collaboration
---

The Figma design system file is a library of design elements and components that can be used to design and build RG ecosystem apps. The design system also helps both the designers and developers to collaborate on the same design language.

Reference links:
- [Figma design system file](https://www.figma.com/file/61uUvOs2T2cKQUhIn6sMRu/RaidGuild-DSM-(NEW-Token-Based)?type=design&node-id=0%3A1&mode=design&t=IK5msYMmDvq3vQEY-1)
- [Storybook](https://raid-guild.github.io/design-system/?path=/story/)

In the current design system file all the elements and components are linked to the Storybook as references to maintain consistency.

# Design Asset Synchronisation from Figma to Storybook

Using the [Token Studio](https://www.figma.com/community/plugin/843461159747178978/tokens-studio-for-figma-figma-tokens) plugin the design system components have been updated that also generates JSON code which is then used in the storybook to synchronise Figma designs with the code.

**Steps to setup and use Token Studio Plugin**
1. Get edit access for the Design system Figma file
2. Go to Figna plugins and Search for Token Studio
4. After you run the plugin it will ask to enter credentials to be able to pull design tokens
5. Credential is basically a personal access token code of the GitHub repo in which the token have been stored
6. You can request for access token from a Guild member responsible for managing the GitHub repo for the design system
7. Once the access token is provided you will see an option to pull tokens from GitHub to Figma
8. Finally you can see all the design tokens in the Plugin that can also be used to design new components
9. Use the tokens to design new components

> Note: Codes are generated and synced only for the Tokens and not for the components.

**How to Push and Pull tokens from Figma to GitHub and vice-versa.**
1. If you have added a new token or updated an existing token in the design system file you will have to push those changes into the code for synchronisation in the Storybook
2. First select the Styles & variables option to create new styles in the Figma file from the tokens
3. Select the style type that you have added/updated
4. Then click on Create to add those styles in the Figma
5. Next, Click on Apply to Document button to apply the latest changes in the Figma file (this will update all the components)
6. In the left bottm you can select the GitHub branch to push changes
7. Click on Push icon to send the changes into GitHub code
8. Similarly if a dev notofies about changes done from the code side in the tokens you can select the Pull icon to update those changes into the Toekn studio and follow the steps from 2-5 above to apply changes in the Figma file/components.

**Video Guides for Token Studio Plugin**
[Google Drive Link](https://drive.google.com/drive/folders/12_4zMI5VmcJZR8z-N7XDOAnw2yjHU_iN?usp=sharing)

* Setup and use Token Studio plugin - [Watch video](https://drive.google.com/file/d/1wFqD91UqaB-ePBahL2rwXyzXOkBnszfG/view?usp=sharing)
* Create a new Token using plugin - [Watch video](https://drive.google.com/file/d/1n8TYzrHb8Mg9TpZNY6-VPG7FAwpYYYkB/view?usp=sharing)
* Create component from tokens - [Watch video](https://drive.google.com/file/d/1ygivq2LlKWU5cRXO9-6NbInGp3kigvv3/view?usp=sharing)
* Push changes to GitHub
When there is any chnages made to the tokens using the plugin you can push those changes to the GitHub repo using the Push to GitHub option in the plugin.
* Pull updates from GitHub
    - When a changes have been made in the token repository code and pushed into the Github repo by someone you can pull those changes by selecting the Pull from GitHub option in the token studio plugin.
    - Next you can sync those changes to Figma file by simply selecting "Create Style & Variable" option in the plugin and the same will be updated in the Design system figma file.



# How to contribute to the design system file?

## 1. Within the RG Figma Team
Once the design system is published it will be available within the RaidGuild Figma team for anyone to pull the published components and use it to design RG applications to maintain consistency across the apps.

Any team member with **edit** access can update the existing components or add new components and publish the updated library.

> **Note:** It is a good practice to duplicate the component artboard that you want to change/update. Once the required changes have been done and reviewed by a team member responsible for its management the changes can then be applied to the original component and pushed to the design library.

## 2. Outside the Figma team
For a member who is a new contributor or is outside the Figma team can follow the following steps:

- Access the file through the [Figma link](https://www.figma.com/file/xha2APaLAJeXGaLhrWMhEO/RaidGuild-DSM-(RG-UI)?type=design&node-id=0%3A1&mode=design&t=pKFUSTHMd3A38pKS-1)
- Create a duplicate version of the file
- Add/make changes to the components
- Send the file for review with details on the changes made
- Once approved the updated components will be copied to the main file
- Publish changes to the library to make it available across the team

## How to pull RG design library into a project
If you are in the RG Figma team you will have access to the published design library. All the future changes made to the main file will prompt you to update the library in your design file.

Following are the steps to pull the design library in a Figma file that you are working on:
1. On the **Assets** panel of your Figma file select the **Team Library** icon

<img width="482" alt="image" src="https://github.com/raid-guild/handbook/assets/26507741/ce54d9bf-60fc-46af-a3f8-ebe64e53e97a" />

2. From the Library pop-up select the Raid Guild design library option and toggle it to enbale in your file

<img width="460" alt="Screenshot 2023-07-12 at 12 46 17 AM" src="https://github.com/raid-guild/handbook/assets/26507741/0c4ebd0c-ced3-49ac-88b6-c4730fce76d6" />

3. Once enabled, all the design elements and components from the library will be available on your Assets panel to be able to use in your Figma project.

**For members not inside the RG Figma team will have to go through the following steps:**
1. Duplicate the main Figma design system file to your drafts
2. Create a Figma team project (this will require a Figma paid plan)
3. Move the duplicate file into the team project created
4. Go to Assets -> Click on Team Library icon -> Publish Library

<img width="1440" alt="Screenshot 2023-07-12 at 12 55 47 AM" src="https://github.com/raid-guild/handbook/assets/26507741/8592ecc3-07b3-41e7-b640-7ae7243b5698" />

5. Once published, create a new Figma file/select the existing file you want to work on
6. Go to Assets -> Click on the Team Library icon -> Select the RG design system library -> Toggle it on
7. Now you're all set to use the RG design system library in your next design project 🎉

## How to test RaidGuild design components inside Figma
The new Figma update offers Dev mode which allows us to test the components in the playground, take references from dev resources and inspect code directly from the Figma.

- Select the component
- Toggle Dev mode
- Select Open in the playground
- Test it out!

Here is a short tutorial on how you can use Figma dev mode to test components and their variants inside Figma.

![figma-dev-mode](https://github.com/raid-guild/handbook/assets/26507741/cf7b62fd-6192-45bf-9d11-c04e9002ad91)

