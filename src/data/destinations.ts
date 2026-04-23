export interface Destination {
  id: string;
  name: string;
  region: string;
  vibe: string;
  fromPrice: number;
  image: string;
  facts: string[];
  description: string;
}

export const destinations: Destination[] = [
  {
    id: "maldives",
    name: "Maldives Overwater Retreat",
    region: "Indian Ocean",
    vibe: "Untouched paradise with crystal lagoons and private atolls",
    fromPrice: 4500,
    image: "https://images.unsplash.com/photo-1514282401047-e711b0435575?w=1200&h=900&fit=crop&q=80",
    facts: ["Private villas", "24/7 butler", "Dive excursions"],
    description:
      "Escape to a pristine atoll where overwater villas perch above turquoise lagoons. Your personal butler curates everything from underwater dining to private yacht sunset cruises.",
  },
  {
    id: "tokyo",
    name: "Tokyo Midnight Skyline",
    region: "East Asia",
    vibe: "Neon-lit sophistication meets ancient tradition",
    fromPrice: 3200,
    image: "https://images.unsplash.com/photo-1540959783218-2650e0a80e64?w=1200&h=900&fit=crop&q=80",
    facts: ["Helicopter transfers", "Michelin dining", "Onsen retreats"],
    description:
      "Navigate Tokyo's glowing streets with a private guide. From exclusive sake cellars to a midnight hot-spring retreat in Hakone, this is Japan seen through a luxury lens.",
  },
  {
    id: "switzerland",
    name: "Swiss Alps Alpine Sanctuary",
    region: "Central Europe",
    vibe: "Snow-capped peaks and heli-ski serenity",
    fromPrice: 5800,
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&h=900&fit=crop&q=80",
    facts: ["Heli-skiing", "Chalet stay", "Private guide"],
    description:
      "A private chalet perched above Zermatt with unobstructed Matterhorn views. Heliski the north face, dine at the summit, and unwind in a geothermal spa.",
  },
  {
    id: "dubai",
    name: "Dubai Royal Experience",
    region: "Middle East",
    vibe: "Futuristic opulence and golden sands",
    fromPrice: 3900,
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&h=900&fit=crop&q=80",
    facts: ["Penthouse suite", "Desert safari", "Supercar collection"],
    description:
      "A penthouse at the Burj Al Arab, a superyacht anchored off the Palm, and a private desert camp with a Michelin chef. Dubai reimagined for the ultra-luxurious.",
  },
  {
    id: "safari",
    name: "Serengeti Starlight Lodge",
    region: "East Africa",
    vibe: "Wild luxury under the African sky",
    fromPrice: 6200,
    image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&h=900&fit=crop&q=80",
    facts: ["Private conservancy", "Big Five", "Star gazing"],
    description:
      "A luxury tented camp inside a private Serengeti conservancy. Witness the Great Migration from your terrace, followed by champagne under the Kilimanjaro sky.",
  },
  {
    id: "yacht",
    name: "Mediterranean Superyacht Voyage",
    region: "Southern Europe",
    vibe: "Sailing the azure coastline in total freedom",
    fromPrice: 12000,
    image: "https://images.unsplash.com/photo-1567811755211-88b7ac5b0238?w=1200&h=900&fit=crop&q=80",
    facts: ["7 crew members", "Custom itinerary", "Wine cellar"],
    description:
      "Charter a 60m superyacht with a dedicated crew. From Capri to Monte Carlo, your itinerary is written daily by your captain and concierge.",
  },
];
