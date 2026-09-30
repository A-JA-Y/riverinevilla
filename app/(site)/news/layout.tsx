import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Updates | Embassy Riverine, North Bangalore",
  description:
    "Launch news, infrastructure updates and market movements across the North Bangalore airport corridor.",
  alternates: { canonical: "/news" },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
