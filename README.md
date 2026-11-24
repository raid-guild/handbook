# RaidGuild Handbook

Welcome to the RaidGuild Handbook repository! This handbook serves as the central knowledge base for RaidGuild, detailing guild operations, project practices, DAO governance, and community standards. The Handbook is structured to help both new and veteran members navigate the guild’s unique systems, terminology, and tools. Here, you’ll find documentation on topics like setting up escrows, handling raid payments, DAO participation, and contributing to our decentralized organization.

## About This Repository

This site is powered by [Docusaurus 3](https://docusaurus.io/), a modern static site generator that makes it easy to build and maintain a knowledge base. The site configuration, sidebar, and custom pages are written in TypeScript. Updates to the handbook are collaborative and welcome from all members of the guild. Contributions can range from correcting outdated information, enhancing documentation, adding new sections, or improving the clarity and readability of the content.

## Best Practices for Contributing

1. **Familiarize Yourself with Handbook Standards**  
   Review the handbook to understand its tone, style, and structure. Each entry should be clear, accurate, and aligned with the guild’s mission and terminology.

2. **Use Clear and Accessible Language**  
   Avoid excessive jargon or complex explanations. The handbook should be approachable for readers at all levels of familiarity with RaidGuild.

3. **Prioritize Accuracy and Relevance**  
   Only include up-to-date and relevant information. Avoid unnecessary details that could complicate the guide or cause confusion.

4. **Propose and Discuss Major Changes**  
   For significant updates or additions, please create an issue first to discuss with other contributors. This ensures all changes align with guild practices and benefit the community.

5. **Check for Consistency**  
   Maintain consistency in terminology, formatting, and section structure to ensure a cohesive handbook. Refer to the [Glossary](docs/resources/glossary.md) for guild-specific terms.

## Getting Started

### Prerequisites

- Node.js 24
- [Corepack](https://nodejs.org/api/corepack.html), which installs the pinned pnpm version

Enable Corepack and install dependencies:

```bash
corepack enable
pnpm install
```

### Local Development

Start a local development server with:

```bash
pnpm start
```

This will open a browser window with the local site. Most changes are live-reloaded, so you can see updates without restarting the server.

### Build

Generate the static content in the `build` directory:

```bash
pnpm build
```

This output can be hosted on any static content hosting service.

### Brand typography

The Louchi handbook uses the pinned `@raidguild/brand-system` tarball in
`vendor/` for Venture Beyond display fonts and brand tokens. The current package is `0.1.0-dev.shad93ebc9`, aligned to the merged website typography in [PR #111](https://github.com/raid-guild/website/pull/111). The three Latin-subset variable
WOFF2 faces are derived from Archivo 2.001 under the SIL Open Font License 1.1;
their license, source, and checksums are included in the tarball under
`dist/fonts/venture-beyond/`. The previous Last Duel files were removed from the public site after the
Eurostile metadata audit. Ubuntu remains the reading and interface
font, with Ubuntu Mono for utility text.

### Quality Checks

Run formatting, linting, TypeScript, and production-build checks together:

```bash
pnpm check
```

### Deployment

- Open a pull request from your conventional branch (for example, `feat/...`, `fix/...`, or `docs/...`) into `main`.
- Merge the pull request after all quality checks pass.

The handbook is deployed automatically by Vercel whenever changes are merged into `main`.

---

Thank you for contributing to the RaidGuild Handbook and helping us document and share the knowledge that strengthens our guild!
