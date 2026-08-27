import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

type RouteCardProps = {
  index: string;
  title: string;
  description: string;
  image: string;
  to: string;
};

const routes: RouteCardProps[] = [
  {
    index: "01",
    title: "Find the Guild",
    description:
      "Understand the fellowship, its values, and the shared operating system behind every Raid.",
    image: "img/brand/louchi/spear-edge-problem-v1.webp",
    to: "/docs/overview/intro",
  },
  {
    index: "02",
    title: "Join the Party",
    description:
      "Move from Portal profile and cohort to trusted contributor and full DAO member.",
    image: "img/brand/louchi/spear-applied-ai-v1.webp",
    to: "/docs/membership/join-the-guild",
  },
  {
    index: "03",
    title: "Ship a Raid",
    description:
      "Assemble the right party, make the work legible, and deliver at the frontier.",
    image: "img/brand/louchi/spear-onchain-v1.webp",
    to: "/docs/raids/intro-to-raiding",
  },
];

function RouteCard({ index, title, description, image, to }: RouteCardProps) {
  return (
    <Link className={styles.routeCard} to={to}>
      <div className={styles.routeImage}>
        <img src={useBaseUrl(image)} alt="" />
      </div>
      <div className={styles.routeMeta}>
        <span>{index}</span>
        <span>Field route</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.routeLink} aria-hidden="true">
        Open route <span>↗</span>
      </span>
    </Link>
  );
}

export default function Home(): ReactNode {
  const builders = useBaseUrl("img/brand/louchi/guild-builders-v1.png");
  const panorama = useBaseUrl(
    "img/brand/louchi/raidguild-panorama-night-v1.webp",
  );
  const symbol = useBaseUrl("img/brand/symbol-black.svg");

  return (
    <Layout
      title="RaidGuild Handbook"
      description="The field guide for joining RaidGuild, governing the DAO, and shipping frontier work."
    >
      <header className={styles.hero}>
        <div className={styles.heroOrbit} aria-hidden="true" />
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Field guide · Louchi reign · 2026</p>
            <h1>
              The map for where the Guild goes <em>next.</em>
            </h1>
            <p className={styles.heroLead}>
              Join the fellowship. Learn the operating lore. Assemble a party
              for ambitious work across Web3, applied AI, and the frontier
              beyond.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} to="/docs/overview/intro">
                Enter the handbook <span aria-hidden="true">↗</span>
              </Link>
              <Link
                className={styles.secondaryAction}
                href="https://portal.raidguild.org"
              >
                Open Portal
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.coordinateLabel}>
              <span>39.7392° N</span>
              <span>Venture beyond</span>
            </div>
            <img
              className={styles.builders}
              src={builders}
              alt="Three RaidGuild builders equipped for their work"
            />
            <p className={styles.figureNote}>
              A builder-owned collective for the next unknown.
            </p>
          </div>
        </div>
        <div className={styles.signalBar}>
          <div className="container">
            <span>Portal first</span>
            <span>Monthly cohorts</span>
            <span>Builder owned</span>
            <span>Web3 + applied AI</span>
          </div>
        </div>
      </header>

      <main>
        <section className={styles.routes} aria-labelledby="routes-title">
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.kicker}>Choose a direction</p>
              <h2 id="routes-title">Start where you are. Raid from there.</h2>
              <p>
                The handbook is organized around the moments that matter:
                finding the Guild, entering the community, and doing excellent
                work together.
              </p>
            </div>
            <div className={styles.routeGrid}>
              {routes.map((route) => (
                <RouteCard key={route.index} {...route} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.fieldNotes}>
          <div className={`container ${styles.notesGrid}`}>
            <div>
              <p className={styles.kicker}>New field notes</p>
              <h2>Specialize without losing the Guild.</h2>
            </div>
            <p>
              Tips of the Spear develop focused practices while sharing the
              network, reputation, contracts, and hard-won knowledge of
              RaidGuild.
            </p>
            <Link to="/docs/spears/tips-of-the-spear">
              Explore the Spears <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

        <section
          className={styles.panorama}
          style={{ backgroundImage: `url(${panorama})` }}
          aria-labelledby="beyond-title"
        >
          <div className={styles.panoramaShade} />
          <div className={`container ${styles.panoramaContent}`}>
            <img src={symbol} alt="" />
            <p className={styles.kicker}>The handbook is alive</p>
            <h2 id="beyond-title">Venture beyond the page.</h2>
            <p>
              Use the handbook for durable patterns, Portal for the live Guild,
              and Discord for the conversation unfolding now.
            </p>
            <div className={styles.heroActions}>
              <Link
                className={styles.lightAction}
                href="https://portal.raidguild.org"
              >
                Enter Portal
              </Link>
              <Link className={styles.nightAction} to="/docs/agents/prism">
                Meet Queen Raida
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
