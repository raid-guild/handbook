import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "RaidGuild Handbook",
  tagline: "Your guide to Raiding with the RaidGuild",
  url: "https://handbook.raidguild.org",
  baseUrl: "/",
  favicon: "img/rg-icon.png",
  staticDirectories: ["static"],
  organizationName: "raid-guild",
  projectName: "handbook",
  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
    },
  },
  themeConfig: {
    navbar: {
      title: "RaidGuild",
      logo: {
        alt: "RaidGuild Logo",
        src: "img/rg-icon.png",
      },
      items: [
        {
          href: "https://raidguild.org",
          label: "Dot Org",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} RaidGuild`,
    },
  } satisfies Preset.ThemeConfig,
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/raid-guild/handbook/edit/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
};

export default config;
