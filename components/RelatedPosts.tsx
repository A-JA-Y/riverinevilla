import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogData } from "@/data/blogData";
import NewsData from "@/data/newsData";

interface RelatedPostsProps {
  currentSlug: string;
}

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  // Combine and sort all content
  const allPosts = [
    ...blogData.map((b) => ({ ...b, type: "blogs" })),
    ...NewsData.map((n) => ({ ...n, type: "news" })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Filter out current and take top 5
  const related = allPosts
    .filter((p) => p.slug !== currentSlug)
    .slice(0, 5);

  if (related.length === 0) return null;

  return (
    <div className="mt-8 space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-[1px] flex-1 bg-gray-100"></div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
          Recent Stories
        </h3>
        <div className="h-[1px] flex-1 bg-gray-100"></div>
      </div>

      <div className="space-y-5">
        {related.map((post) => (
          <Link
            key={post.slug}
            href={`/${post.type}/${post.slug}`}
            className="group flex gap-4 items-start"
          >
            <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50 border border-gray-100">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 mb-1">
                {post.category}
              </p>
              <h4 className="text-[13px] font-medium text-gray-900 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-2">
                {post.title}
              </h4>
              <p className="text-[11px] text-gray-400 mt-1">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="pt-4">
        <Link
          href="/blogs"
          className="block w-full py-3 text-center text-xs font-semibold uppercase tracking-widest text-gray-500 border border-gray-200 rounded-xl hover:bg-gray-50 hover:text-gray-900 transition-all"
        >
          View All Updates
        </Link>
      </div>
    </div>
  );
}
