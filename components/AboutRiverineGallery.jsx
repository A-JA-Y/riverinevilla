import ImageSlider from "./ImageSlider";

import villa1 from "@/assets/villa-exterior-1.webp";
import villa2 from "@/assets/villa-exterior-2.webp";
import trees from "@/assets/township-trees.webp";
import living from "@/assets/villa-living-room.webp";

// The stream-corridor photograph already sits beside "The Stream Corridor"
// section of this page, so the intro gallery uses the tree cover instead.
const gallery = [
  { src: villa1, alt: "Embassy Riverine villa exterior at Embassy Origins, North Bangalore" },
  { src: trees, alt: "A tree-lined walking path through retained tree cover" },
  { src: villa2, alt: "Villa facade with a covered car porch and landscaped forecourt" },
  { src: living, alt: "Living volume inside an Embassy Riverine villa" },
];

/** Intro gallery for the About Embassy Riverine page. */
export default function AboutRiverineGallery() {
  return <ImageSlider images={gallery} />;
}
