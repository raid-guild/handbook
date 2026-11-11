import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import RaidaLauncher from "../components/RaidaLauncher";

type RootProps = {
  children: ReactNode;
};

export default function Root({ children }: RootProps): ReactNode {
  return (
    <>
      {children}
      <RaidaLauncher />
      <Analytics />
    </>
  );
}
