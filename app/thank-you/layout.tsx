import type { Metadata } from "next";

// Post-submit page: keep it out of the index and off the home page's title/description.
export const metadata: Metadata = {
  title: "Thank You | Embassy Riverine",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return children;
}
