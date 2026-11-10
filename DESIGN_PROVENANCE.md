# Handbook design provenance

The handbook follows the Louchi design system exposed by the RaidGuild brand guide's Storybook. Its pinned `@raidguild/brand-system` development package is `0.1.0-dev.sha68ace65`, fetched from the brand guide's commit-specific Railway tarball. The package provides generated semantic tokens and the Ubuntu and Ubuntu Mono font assets. `src/css/custom.css` maps those semantics to Docusaurus/Infima variables. Docusaurus controls `data-theme`; the CSS adapter mirrors the pinned package's Louchi night semantics under `html[data-theme=dark][data-brand-reign=louchi]`. A short head script sets the Louchi reign before first paint. Update the adapter when the package pin changes.

Grinder Refined Regular, Italic and Retalic are first-party site fonts in `static/brand-fonts/louchi` with source notes alongside the files. The package deliberately uses Afacad Flux as the reusable fallback. The homepage preserves its three handbook routes and illustrations while applying Storybook's typography, night palette, standalone CTA spacing and pill shape.

Sources: [Storybook](https://brand-storybook-production.up.railway.app/), [brand package manifest](https://raidguild-brand-guide-production.up.railway.app/packages/brand-system.json), and the canonical [RaidGuild brand repository](https://github.com/raid-guild/brand).
