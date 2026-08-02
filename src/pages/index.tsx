import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

type JourneyItem = {
  title: string;
  label: string;
  description: string;
  icon: string;
  to: string;
};

const journeys: JourneyItem[] = [
  {
    title: "Know the Guild",
    label: "Overview",
    description:
      "Meet Raid Guild, learn our code of conduct, and understand the values behind how we work together.",
    icon: "img/brand/icons/community.svg",
    to: "/docs/overview/intro",
  },
  {
    title: "Join the Party",
    label: "Membership",
    description:
      "Find your path from applicant to apprentice to member, including roles, expectations, and guild shares.",
    icon: "img/brand/icons/dao.svg",
    to: "/docs/membership/join-the-guild",
  },
  {
    title: "Go on a Raid",
    label: "Raiding",
    description:
      "Learn the practices, responsibilities, payment flows, and tools that keep client work moving smoothly.",
    icon: "img/brand/icons/sprint.svg",
    to: "/docs/raids/intro-to-raiding",
  },
];

function JourneyCard({ title, label, description, icon, to }: JourneyItem) {
  return (
    <Link className={styles.journeyCard} to={to}>
      <img className={styles.journeyIcon} src={useBaseUrl(icon)} alt="" />
      <p className={styles.cardLabel}>{label}</p>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={styles.cardLink} aria-hidden="true">
        Explore <span>→</span>
      </span>
    </Link>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  const heroArtwork = useBaseUrl("img/brand/forge-fire.webp");
  const guildSymbol = useBaseUrl("img/brand/symbol-m500.svg");

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Knowledge for the guild</p>
            <h1>
              RaidGuild <span>Handbook</span>
            </h1>
            <p className={styles.heroLead}>
              Your field guide to joining the guild, collaborating with fellow
              raiders, and shipping excellent work together.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.primaryAction} to="/docs/overview/intro">
                Enter the handbook
              </Link>
              <Link
                className={styles.secondaryAction}
                href="https://raidguild.org"
              >
                Visit RaidGuild.org
              </Link>
            </div>
          </div>
          <div className={styles.heroArtwork}>
            <img
              src={heroArtwork}
              alt="Raid Guild builders working together around a forge"
            />
          </div>
        </div>
      </header>

      <main>
        <section className={styles.journeys} aria-labelledby="journeys-title">
          <div className="container">
            <div className={styles.sectionHeading}>
              <p className={styles.eyebrow}>Find your path</p>
              <h2 id="journeys-title">Start where you are. Raid from there.</h2>
              <p>
                The handbook is organized around the moments that matter most:
                understanding the guild, becoming a member, and doing the work.
              </p>
            </div>
            <div className={styles.journeyGrid}>
              {journeys.map((journey) => (
                <JourneyCard key={journey.title} {...journey} />
              ))}
            </div>
          </div>
        </section>

        <section className={styles.closingCta}>
          <div className={`container ${styles.closingCtaInner}`}>
            <img src={guildSymbol} alt="" />
            <div>
              <p className={styles.eyebrow}>A living document</p>
              <h2>Built by the guild. Maintained by its members.</h2>
              <p>
                Use this handbook as a shared source of truth—and help improve
                it as our practices evolve.
              </p>
            </div>
            <Link className={styles.lightAction} to="/docs/overview/intro">
              Start reading
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
