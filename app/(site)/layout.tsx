import HomePageHeader from "@/components/HomePageHeader";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import ScrollProgress from "@/components/ScrollProgress";
import ModalWrapper from "@/components/ModalWrapper";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollProgress />
      <HomePageHeader />
      <main className="min-h-screen bg-white w-full">{children}</main>
      <ModalWrapper />
      <FloatingActions />
      <Footer />
    </>
  );
}
