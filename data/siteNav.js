/**
 * `label` is the full name used in the footer and the mobile drawer.
 * `short` is what the desktop header shows — the full labels do not fit
 * two rows plus the logo and the CTA at 1280px.
 */
export const siteNavLinks = [
  { label: "Home", href: "/" },
  { label: "About Embassy Riverine", short: "About Project", href: "/about-embassy-riverine" },
  { label: "Villas & Configurations", short: "Villas", href: "/villas-configurations" },
  { label: "Price", href: "/price" },
  { label: "Floor Plans", href: "/floor-plans" },
  { label: "Master Plan", href: "/master-plan" },
  { label: "Location & Connectivity", short: "Location", href: "/location-connectivity" },
  { label: "Amenities", href: "/amenities" },
  { label: "About Embassy Group", short: "Developer", href: "/about-embassy-group" },
  { label: "Contact Us", short: "Contact", href: "/contact-us" },
  { label: "Blogs", href: "/blogs" },
  { label: "News", href: "/news" },
  {
    label: "5 BHK — Only 32",
    short: "5 BHK · 32 Left",
    href: "/villas-configurations#5bhk",
    highlight: true,
  },
];

export const footerNavLinks = siteNavLinks.filter((l) => !l.highlight);
