export interface Experience {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export const experiences: Experience[] = [
  {
    id: "jet",
    title: "Private Jet Circumnavigation",
    description:
      " circumnavigate the globe in a Falcon XRS with a dedicated cabin crew. Land at private airstrips and be whisked to pre-arranged luxury lodges in each city.",
    price: "from €285,000",
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&h=900&fit=crop&q=80",
  },
  {
    id: "yacht-week",
    title: "Mediterranean Yacht Week",
    description:
      "Seven days aboard a custom-built superyacht, sailing the Amalfi Coast, Greek Isles, and Turkish Riviera. Michelin dining, water toys, and a personal sommelier.",
    price: "from €95,000",
    image: "https://images.unsplash.com/photo-1605281317010-fe5ffe798168?w=1200&h=900&fit=crop&q=80",
  },
  {
    id: "michelin",
    title: "Michelin Star Trail",
    description:
      "A curated gastronomic journey through Europe's most awarded restaurants. Private kitchen access, chef collaborations, and cellars visited only by invitation.",
    price: "from €42,000",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=900&fit=crop&q=80",
  },
  {
    id: "desert",
    title: "Sahara Starlight Retreat",
    description:
      "A private dune camp in the heart of the Sahara. Glass-bottomed telescopes, Berber-inspired dining, and hot-air balloon sunrise over Merzouga.",
    price: "from €18,500",
    image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1200&h=900&fit=crop&q=80",
  },
  {
    id: "alpine",
    title: "Alpine Wellness Retreat",
    description:
      "A 10-day immersions in the Swiss and Austrian Alps. Private spas, heli-hikes, cold-plunge rituals, and sleep science with leading practitioners.",
    price: "from €35,000",
    image: "https://images.unsplash.com/photo-1502786129293-77103d8630f2?w=1200&h=900&fit=crop&q=80",
  },
];
