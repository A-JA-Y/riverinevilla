import type { Metadata } from "next";
import FloatingActions from "@/components/FloatingActions";

const TITLE = "Thank You | Embassy Riverine";
const DESCRIPTION =
  "Thank you for your enquiry about Embassy Riverine. The cost sheet and floor plans follow the same day.";

// Post-submit page: keep it out of the index and give it its own title,
// description and share tags instead of the home page's.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false },
  openGraph: { title: TITLE, description: DESCRIPTION, url: "/thank-you" },
  twitter: { title: TITLE, description: DESCRIPTION },
};

// This route sits outside app/(site), so it mounts the floating call / WhatsApp
// buttons itself; every other page gets them once from its own layout or page.
export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <FloatingActions />
    </>
  );
}
