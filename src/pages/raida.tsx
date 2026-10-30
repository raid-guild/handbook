import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import { RAIDA_CHAT_URL } from "../constants/raida";
import styles from "./raida.module.css";

export default function RaidaPage(): ReactNode {
  return (
    <Layout
      title="Chat with Raida"
      description="Ask Queen Raida questions about the Guild on the RaidGuild website."
    >
      <main className={styles.page}>
        <div className={`container ${styles.content}`}>
          <p className={styles.kicker}>Queen Raida · Handbook assistant</p>
          <h1>Ask Queen Raida.</h1>
          <p>
            Chat with Raida on the RaidGuild website for help finding your way
            through the Guild and its handbook.
          </p>
          <p>
            Messages are processed by the Guild’s AI service. Please leave out
            private information.
          </p>
          <div className={styles.actions}>
            <Link
              className={styles.primaryAction}
              to={RAIDA_CHAT_URL}
              target="_self"
            >
              Chat with Raida <span aria-hidden="true">↗</span>
            </Link>
            <Link to="/docs/overview/intro">Read the handbook</Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
