import type { ReactNode } from "react";
import clsx from "classnames";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: ReactNode;
};

const features: FeatureItem[] = [
  {
    title: "Guild Structure",
    imageUrl: "img/crown.svg",
    description:
      "Learn how Raid Guild is structured into different factions and ranks and how you can make your journey from Apprentice to Master.",
  },
  {
    title: "Project Management",
    imageUrl: "img/axes.svg",
    description:
      "The handbook contains all the guidelines, tools and resources to help you execute a successful Raid Party.",
  },
  {
    title: "Internal Ops",
    imageUrl: "img/magic.svg",
    description:
      "How we collaborate and coordinate is the most important thing for Raid Guild's success. Inside you'll find the tools and processes we use to keep organized.",
  },
];

function Feature({ imageUrl, title, description }: FeatureItem) {
  const image = useBaseUrl(imageUrl);

  return (
    <div className={clsx("col col--4", styles.feature)}>
      <div className="text--center">
        <img className={styles.featureImage} src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted,
              )}
              to="/docs/overview/intro"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map((feature) => (
                <Feature key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
