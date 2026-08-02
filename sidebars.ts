import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  howSidebar: {
    Overview: [
      "overview/intro",
      "overview/what-is-raidguild",
      "overview/code-of-conduct",
      "overview/social-media",
    ],
    Discord: [
      "discord/etiquette",
      "discord/onboarding",
      "discord/navigation",
      "discord/meetings",
      "discord/bots",
    ],
    Membership: [
      "membership/join-the-guild",
      "membership/become-an-apprentice",
      "membership/become-a-member",
      "membership/champion-a-member",
      "membership/raid-guild-shares",
      "membership/skills-roles",
    ],
    "DAO Operations": [
      "dao-operations/rips",
      "dao-operations/dao-operations",
      "dao-operations/dao-roles",
      "dao-operations/dao-tokens",
      "dao-operations/design-system",
    ],
    Raids: [
      "raids/intro-to-raiding",
      "raids/cleric-sop",
      "raids/getting-paid",
      "raids/raiding-on-optimism-chain",
    ],
    Escrow: [
      "escrow/intro-to-smartinvoice",
      "escrow/create-an-escrow",
      "escrow/funding-an-escrow",
    ],
    Resources: ["resources/learn-about-web3", "resources/glossary"],
  },
};

export default sidebars;
