import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

type RootProps = {
  children: ReactNode;
};

export default function Root({ children }: RootProps): ReactNode {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
