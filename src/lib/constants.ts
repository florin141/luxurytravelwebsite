export const BRAND = {
  name: "AURORA LUXE TRAVEL",
  tagline: "Beyond First Class",
  navItems: [
    { label: "Destinations", href: "#destinations" },
    { label: "Experiences", href: "#experiences" },
    { label: "Membership", href: "#membership" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Concierge", href: "#concierge" },
  ],
  socialLinks: [
    { name: "Instagram", icon: "instagram" as const },
    { name: "X", icon: "twitter" as const },
    { name: "LinkedIn", icon: "linkedin" as const },
    { name: "YouTube", icon: "youtube" as const },
  ],
};

export const SECTION_IDS = [
  "hero",
  "destinations",
  "experiences",
  "membership",
  "testimonials",
  "concierge",
] as const;
