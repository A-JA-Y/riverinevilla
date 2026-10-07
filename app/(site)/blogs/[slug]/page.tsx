/**
 * app/blogs/[slug]/page.tsx
 */

import BlogContactForm from "@/components/BlogContactForm";
import RelatedPosts from "@/components/RelatedPosts";
import { blogData } from "@/data/blogData";
import Image from "next/image";
import { notFound } from "next/navigation";
import Script from "next/script";
import path from "path";
import fs from "fs";

type Params = Promise<{ slug: string }>;

/* ─────────────────────────────────────────────
   LOAD MDX FILE
───────────────────────────────────────────── */
async function getBlogContent(slug: string) {
  try {
    const filePath = path.join(
      process.cwd(),
      "content",
      "blogs",
      `${slug}.mdx`
    );

    if (!fs.existsSync(filePath)) return null;

    const mod = await import(`@/content/blogs/${slug}.mdx`);

    // ✅ MDX default export is directly usable
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

  const blog = blogData.find((b) => b.slug === slug);
  if (!blog) return {};

  const title = blog.metaTitle || blog.title;
  const description = blog.metaDescription || blog.excerpt;
  const url = `https://embassyriverinevilla.in/blogs/${slug}`;
  const imageUrl = typeof blog.image === "string" ? blog.image : "";

  return {
    title,
    description,
    keywords: blog.keywords ?? [],

    alternates: {
      canonical: blog.canonical || url,
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
      url: blog.canonical || url,
      title,
      description,
      siteName: "Embassy Riverine",
      locale: "en_IN",
      images: imageUrl
        ? [
          {
            url: imageUrl,
            alt: blog.title,
          },
        ]
        : [],
      publishedTime: blog.date,
      modifiedTime: blog.updatedAt,
      authors: blog.author ? [blog.author] : [],
      tags: blog.keywords ?? [],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },

    authors: blog.author ? [{ name: blog.author }] : [],
    category: blog.category,
  };
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default async function BlogDetail({ params }: { params: Params }) {
  const { slug } = await params;

  const blog = blogData.find((b) => b.slug === slug);
  if (!blog) return notFound();

  const BlogContent = await getBlogContent(slug);
  if (!BlogContent) return notFound();

  const pageUrl = `https://embassyriverinevilla.in/blogs/${slug}`;
  const imageUrl = typeof blog.image === "string" ? blog.image : "";

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
        name: "Blog",
        item: "https://embassyriverinevilla.in/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: pageUrl,
      },
    ],
  };

  /* ── Article Schema ── */
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.metaDescription || blog.excerpt,
    image: imageUrl || undefined,
    datePublished: blog.date,
    dateModified: blog.updatedAt || blog.date,
    author: blog.author
      ? { "@type": "Person", name: blog.author }
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
    keywords: (blog.keywords ?? []).join(", "),
  };

  return (
    <>
      {/* JSON-LD */}
      {blog.schemaMarkup && (
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blog.schemaMarkup),
          }}
        />
      )}
      {blog?.faqSchema && (
        <Script
          id="schema-faq"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blog.faqSchema),
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
        {/* HERO */}
        <div className="relative w-full h-[480px] md:h-[560px]">
          <Image
            src={blog.image}
            alt={blog.altText || blog.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          <div className="absolute bottom-0 px-6 md:px-16 py-10 max-w-5xl">
            <span className="text-xs text-white/80 border px-3 py-1 rounded-full">
              {blog.category}
            </span>

            {/* <h1 className="text-3xl md:text-5xl text-white mt-3">
              {blog.title}
            </h1> */}

            <p className="text-sm text-white/70 mt-3">
              {new Date(blog.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}{" "}
              {/* • {blog.readTime} */}
            </p>
          </div>
        </div>

        {/* BODY */}
        {/* minmax(0, …) tracks: tables and long words in the article scroll or
            wrap inside their column instead of widening the page on phones */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] gap-12">
          {/* ✅ FIXED: No components prop */}
          <div className="prose prose-lg max-w-none min-w-0 wrap-break-word">
            <BlogContent />
          </div>

          {/* SIDEBAR */}
          <aside className="lg:sticky lg:top-8">


            <BlogContactForm />

            <RelatedPosts currentSlug={slug} />

          </aside>
        </div>
      </article>
    </>
  );
}

/* ─────────────────────────────────────────────
   STATIC PATHS
───────────────────────────────────────────── */
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    slug: blog.slug,
  }));
}