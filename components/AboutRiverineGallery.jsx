import ImageSlider from "./ImageSlider";

import villa1 from "@/assets/villa-exterior-1.webp";
import villa2 from "@/assets/villa-exterior-2.webp";
import corridor from "@/assets/riparian-corridor.webp";
import living from "@/assets/villa-living-room.webp";

const gallery = [
  { src: villa1, alt: "Embassy Riverine villa exterior at Embassy Origins, North Bangalore" },
  { src: corridor, alt: "A natural stream with tree cover retained on both banks" },
  { src: villa2, alt: "Embassy Riverine villa with private deck and pool" },
  { src: living, alt: "Living volume inside an Embassy Riverine villa" },
];

/** Intro gallery for the About Embassy Riverine page. */
export default function AboutRiverineGallery() {
  return <ImageSlider images={gallery} />;
}
