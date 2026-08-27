import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import { useLocation } from "@docusaurus/router";
import styles from "./RaidaLauncher.module.css";

export default function RaidaLauncher(): ReactNode {
  const { pathname } = useLocation();

  if (pathname === "/raida" || pathname === "/raida/") {
    return null;
  }

  return (
    <Link
      className={styles.launcher}
      to="/raida"
      aria-label="Open the Chat with Raida concept"
    >
      <span className={styles.status} aria-hidden="true" />
      <svg
        className={styles.icon}
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M5.5 5.5h13v9h-7.25L7 18.5v-4H5.5v-9Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <path
          d="M9 9.8h.01M12 9.8h.01M15 9.8h.01"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
      <span className={styles.label}>Ask Raida</span>
    </Link>
  );
}
