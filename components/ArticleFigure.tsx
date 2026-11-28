import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";

/**
 * A photo or drawing inside an article (blog post or guide), with an optional
 * caption. Kept in its own module so the blog posts can use it without
 * pulling in the guide-only pieces (such as the video player).
 *
 * Captions follow the site's imagery note (privacy policy): photography is
 * representative, and floor plans and the master plan are schematic
 * illustrations, not the sanctioned drawings.
 */
export default function ArticleFigure({
  src,
  alt,
  caption,
  priority = false,
}: {
  /** A static import, so the build knows the image's width and height. */
  src: StaticImageData;
  alt: string;
  caption?: ReactNode;
  priority?: boolean;
}) {
  return (
    <figure className="my-9">
      <Image
        src={src}
        alt={alt}
        priority={priority}
        sizes="(max-width: 800px) 100vw, 768px"
        className="w-full h-auto rounded-lg border border-[#e5dcc5]"
      />
      {caption ? (
        <figcaption className="mt-2.5 text-[13px] leading-relaxed text-gray-500">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
