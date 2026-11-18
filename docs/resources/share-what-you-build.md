---
id: share-what-you-build
title: Share What You Build
---

# Share What You Build

Start in the [**build-in-public** Discord forum](https://discord.com/channels/684227450204323876/1572424880433930372). A screenshot, a link if you have one, and a sentence about what you made are enough. Say if you want feedback, testers, or collaborators. You can share pixel art, a work in progress, or a finished tool without creating a Portal Project.

## Give the build a home

- **Already hosted? Register a Portal module.** If your tool, game, or interactive piece has a working URL, it can be registered as a [Portal module](https://portal.raidguild.org/modules) without moving its hosting. Ask the Knowledge Steward’s helper if you need help registering it.
- **Mostly static? Use Portal Artifacts.** The [`portal-artifacts` README](https://github.com/raid-guild/portal-artifacts#adding-an-artifact) explains how to add a build under `public/<slug>/`, include a cover and link-preview metadata, and open a pull request. The shared Caddy service serves it on the [Railway artifacts host](https://portal-artifacts-production.up.railway.app/) after the PR merges to `main`. Some artifacts use a signed Portal launch or light state and storage through supported integrations. Ask for help setting those up if needed; keep secrets in the server-side configuration, never in the static build, PR, or Discord.
- **Need a backend, database, worker, or dedicated storage? Coordinate with the Infrastructure Maestro.** Railway is a shared resource available to all Guild members. Bring the repo or demo, what services you need, and who will maintain them to the [Infrastructure Maestro](/docs/dao-operations/dao-roles#infrastructure-maestro---holders-of-the-devops-keys).

A [Portal post](https://portal.raidguild.org/posts) is a good follow-up when you want to share how you built it, what you learned, or what others can reuse. Link back to the build so readers can try it.

## Get help with the next step

Talk to the Knowledge Steward’s helper in [Discord](https://discord.com/channels/684227450204323876/1547667574450290761) or open the helper directly in [Prism](https://prism.raidguild.org/). Share the repo or demo and what you want to do next. The helper can deploy and manage artifacts and services through chat within its approved access. Coordinate requests for dedicated infrastructure with the Infrastructure Maestro.
