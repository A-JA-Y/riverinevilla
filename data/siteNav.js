/**
 * Primary navigation, grouped into the three header dropdowns.
 * The desktop header renders each group as a dropdown; the mobile drawer
 * renders the same groups as collapsible sections.
 */
export const navGroups = [
  {
    id: "project",
    label: "The Project",
    items: [
      { label: "Villas & Configurations", href: "/villas-configurations" },
      { label: "Price", href: "/price" },
      { label: "Floor Plans", href: "/floor-plans" },
      { label: "Master Plan", href: "/master-plan" },
      { label: "Amenities", href: "/amenities" },
      { label: "Location & Connectivity", href: "/location-connectivity" },
    ],
  },
  {
    id: "insights",
    label: "Insights",
    items: [
      { label: "Blogs", href: "/blogs" },
      { label: "News", href: "/news" },
    ],
  },
  {
    id: "about",
    label: "About",
    items: [
      { label: "About Embassy Riverine", href: "/about-embassy-riverine" },
      { label: "About Embassy Group", href: "/about-embassy-group" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
];

/**
 * Scarcity pill shown beside the dropdowns. `short` is the desktop label,
 * `label` the mobile drawer one.
 */
export const navHighlight = {
  label: "5 BHK — Only 32",
  short: "5 BHK · 32 Left",
  href: "/villas-configurations#5bhk",
};

export const footerNavLinks = [
  { label: "Home", href: "/" },
  ...navGroups.flatMap((group) => group.items),
];
