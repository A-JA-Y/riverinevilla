import { blogData } from "./blogData";
import { guideData } from "./guideData";
import NewsData from "./newsData";

/**
 * One card in an article listing — a blog post, a guide or a news story —
 * with the URL it lives at: blog posts under /blogs, news under /news and the
 * guides at the site root.
 */
export type ArticleCard = {
  slug: string;
  href: string;
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  category: string;
  readTime?: string;
  /** ISO date, YYYY-MM-DD. */
  date: string;
};

/** ISO dates sort as strings; ties keep their order in the source lists. */
export const newestFirst = (a: ArticleCard, b: ArticleCard) => b.date.localeCompare(a.date);

const guideCards: ArticleCard[] = guideData.map((g) => ({
  slug: g.slug,
  href: g.href,
  title: g.title,
  excerpt: g.excerpt,
  image: g.cardImage,
  alt: g.hero.alt,
  category: g.category,
  readTime: g.readTime,
  date: g.published,
}));

const blogCards: ArticleCard[] = blogData.map((b) => ({
  slug: b.slug,
  href: `/blogs/${b.slug}`,
  title: b.title,
  excerpt: b.excerpt,
  image: b.image,
  alt: b.altText || b.title,
  category: b.category,
  readTime: b.readTime,
  date: b.date,
}));

/** The guides and the blog posts, newest first: what /blogs and the home page list. */
export const guidesAndBlogs: ArticleCard[] = [...guideCards, ...blogCards].sort(newestFirst);

/** The news stories, as cards. */
export const newsCards: ArticleCard[] = NewsData.map((n) => ({
  slug: n.slug,
  href: `/news/${n.slug}`,
  title: n.title,
  excerpt: n.excerpt,
  image: n.image,
  alt: n.altText || n.title,
  category: n.category,
  readTime: n.readTime,
  date: n.date,
}));
