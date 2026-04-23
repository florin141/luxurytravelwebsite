export interface Tier {
  id: string;
  name: string;
  price: string;
  description: string;
  perks: string[];
  highlighted: boolean;
  gradient: string;
}

export const tiers: Tier[] = [
  {
    id: "silver",
    name: "Silver",
    price: "€2,500",
    description: "Perfect for the discerning traveler seeking exclusive access.",
    perks: [
      "Priority booking for all destinations",
      "Complimentary airport transfers",
      "Curated seasonal travel journal",
      "24/7 dedicated travel advisor",
      "10% off experience add-ons",
    ],
    highlighted: false,
    gradient: "from-gray-400 to-gray-600",
  },
  {
    id: "black",
    name: "Black",
    price: "€8,000",
    description: "For those who expect the extraordinary, every time.",
    perks: [
      "Everything in Silver, plus:",
      "Private jet upgrade eligibility",
      "VIP lounge access worldwide",
      "Exclusive event invitations",
      "Personal concierge for every trip",
      "Complimentary suite upgrades",
    ],
    highlighted: true,
    gradient: "from-amber-400 to-amber-600",
  },
  {
    id: "obsidian",
    name: "Obsidian",
    price: "€25,000",
    description: "The pinnacle of luxury travel membership.",
    perks: [
      "Everything in Black, plus:",
      "Unlimited itinerary customizations",
      "Private island access",
      "Dedicated flight coordinator",
      "Surprise luxury upgrades",
      "Lifetime member events & retreats",
    ],
    highlighted: false,
    gradient: "from-purple-400 to-purple-600",
  },
];
