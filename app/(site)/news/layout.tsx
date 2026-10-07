/**
 * /news segment layout. The listing page (page.tsx) is a server component and
 * exports its own metadata; each story in [slug] sets its own through
 * generateMetadata, so nothing is set here that could leak into the stories.
 */
export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
