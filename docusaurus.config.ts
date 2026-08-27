import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "RaidGuild Handbook",
  tagline: "Your guide to Raiding with the RaidGuild",
  url: "https://handbook.raidguild.org",
  baseUrl: "/",
  favicon: "img/brand/favicon.svg",
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
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "theme-color",
        content: "#efe9d7",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/img/brand/favicon-96x96.png",
      },
    },
    {
      tagName: "link",
      attributes: {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/img/brand/apple-touch-icon.png",
      },
    },
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        alt: "Raid Guild",
        src: "img/brand/symbol-black.svg",
        srcDark: "img/brand/symbol-black.svg",
      },
      items: [
        {
          to: "/docs/overview/intro",
          label: "Handbook",
          position: "left",
          activeBaseRegex: "^/docs/",
        },
        {
          href: "https://portal.raidguild.org",
          label: "Portal",
          position: "right",
        },
        {
          href: "https://www.brand.raidguild.org",
          label: "Brand Guide",
          position: "right",
        },
        {
          href: "https://raidguild.org",
          label: "RaidGuild.org",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "Raid Guild",
        src: "img/brand/symbol-black.svg",
        width: 64,
        height: 64,
      },
      links: [
        {
          title: "Handbook",
          items: [
            {
              label: "Introduction",
              to: "/docs/overview/intro",
            },
            {
              label: "Membership",
              to: "/docs/membership/join-the-guild",
            },
            {
              label: "Raiding",
              to: "/docs/raids/intro-to-raiding",
            },
          ],
        },
        {
          title: "Raid Guild",
          items: [
            {
              label: "RaidGuild.org",
              href: "https://raidguild.org",
            },
            {
              label: "Portal",
              href: "https://portal.raidguild.org",
            },
            {
              label: "Brand Guide",
              href: "https://www.brand.raidguild.org",
            },
            {
              label: "GitHub",
              href: "https://github.com/raid-guild",
            },
          ],
        },
      ],
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
  themes: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: "filename",
        indexBlog: false,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcutKeymap: "mod+k",
      },
    ],
  ],
};

export default config;
