/**
 * /blogs segment layout. The listing page (page.tsx) is a server component and
 * exports its own metadata; each article in [slug] sets its own through
 * generateMetadata, so nothing is set here that could leak into the articles.
 */
export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
