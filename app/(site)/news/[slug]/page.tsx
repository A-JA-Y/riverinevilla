import BlogContactForm from "@/components/BlogContactForm";
import RelatedPosts from "@/components/RelatedPosts";
import NewsData from "@/data/newsData";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import path from "path";
import fs from "fs";

type Params = Promise<{ slug: string }>;

/* ─────────────────────────────────────────────
   LOAD MDX FILE
───────────────────────────────────────────── */
async function getNewsContent(slug: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "content",
      "news",
      `${slug}.mdx`
    );

    if (!fs.existsSync(filePath)) return null;

    const mod = await import(`@/content/news/${slug}.mdx`);
    return mod.default;
  } catch {
    return null;
  }
}

/* ─────────────────────────────────────────────
   SEO META
───────────────────────────────────────────── */
export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  const news = NewsData.find((n) => n.slug === slug);
  if (!news) return {};

  const title = news.metaTitle || news.title;
  const description = news.metaDescription || news.excerpt;
  const url = `https://embassyriverinevilla.in/news/${slug}`;
  const imageUrl = typeof news.image === "string" ? news.image : "";

  return {
    title,
    description,
    keywords: news.keywords ?? [],

    alternates: {
      canonical: news.canonical || url,
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      type: "article",
      url: news.canonical || url,
      title,
      description,
      siteName: "Embassy Riverine",
      locale: "en_IN",
      images: imageUrl
        ? [
          {
            url: imageUrl,
            width: 1200,
            height: 630,
            alt: news.title,
          },
        ]
        : [],
      publishedTime: news.date,
      modifiedTime: news.updatedAt,
      authors: news.author ? [news.author] : [],
      tags: news.keywords ?? [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },

    authors: news.author ? [{ name: news.author }] : [],
    category: news.category,
  };
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default async function NewsDetail({ params }: { params: Params }) {
  const { slug } = await params;

  const news = NewsData.find((n) => n.slug === slug);
  if (!news) return notFound();

  const NewsContent = await getNewsContent(slug);
  // If MDX content is not found, we can still show metadata but body will be empty or we can use fallback
  // For now, let's treat missing MDX as notFound if that's the intended way

  const pageUrl = `https://embassyriverinevilla.in/news/${slug}`;
  const imageUrl = typeof news.image === "string" ? news.image : "";

  /* ── Breadcrumb Schema ── */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://embassyriverinevilla.in/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "News",
        item: "https://embassyriverinevilla.in/news",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: news.title,
        item: pageUrl,
      },
    ],
  };

  /* ── Article Schema ── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: news.title,
    description: news.metaDescription || news.excerpt,
    image: imageUrl || undefined,
    datePublished: news.date,
    dateModified: news.updatedAt || news.date,
    author: news.author
      ? { "@type": "Person", name: news.author }
      : { "@type": "Organization", name: "Real Revenue" },
    publisher: {
      "@type": "Organization",
      name: "Real Revenue",
      logo: {
        "@type": "ImageObject",
        url: "https://embassyriverinevilla.in/logo.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
    keywords: (news.keywords ?? []).join(", "),
  };

  return (
    <>
      {/* JSON-LD */}
      {news.schemaMarkup && (
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(news.schemaMarkup),
          }}
        />
      )}
      {news?.faqSchema && (
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(news.faqSchema),
          }}
        />
      )}

      <Script
        id="schema-article"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <article className="w-full bg-white">
        {/* HERO IMAGE */}
        <div className="relative w-full h-[480px] md:h-[560px]">
          <Image
            src={news.image}
            alt={news.altText || news.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 py-10 max-w-5xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white/90 border border-white/30 rounded-full px-3 py-1 mb-4">
              {news.category}
            </span>
          
            <p className="text-sm text-white/80 mt-3">
              {new Date(news.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] gap-12 items-start">

          {/* Main Content Area */}
          <div className="max-w-none min-w-0 wrap-break-word">
            {NewsContent ? (
              <NewsContent />
            ) : (
              <div className="py-10 text-center text-gray-400 italic">
                Content loading...
              </div>
            )}
          </div>

          {/* Sidebar */}
          {/* top-24 keeps the sticky sidebar clear of the 74px fixed header; it
              only sticks on screens tall enough to show all of it */}
          <aside className="lg:[@media(min-height:800px)]:sticky lg:top-24">
            <BlogContactForm />

            <RelatedPosts currentSlug={slug} />
          </aside>

        </div>
      </article>

    </>
  );
}

export async function generateStaticParams() {
  return NewsData.map((news) => ({ slug: news.slug }));
}
