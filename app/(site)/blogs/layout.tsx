import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs | Embassy Riverine, North Bangalore",
  description:
    "Buyer guides, pricing breakdowns and market comparisons for villa projects in the North Bangalore airport corridor.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
