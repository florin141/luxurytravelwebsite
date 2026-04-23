export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Alexandra Chen",
    role: "CEO, Vela Ventures",
    quote:
      "Aurora Luxe planned our 30th anniversary trip down to the smallest detail. The Maldives overwater villa was beyond anything we imagined. Truly world-class.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "2",
    name: "James Worthington",
    role: "Private Equity Partner",
    quote:
      "I've used every luxury travel service out there. None compare. The concierge team anticipated needs I didn't even know I had. The Black tier is worth every euro.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "3",
    name: "Sofia Martinez",
    role: "Creative Director, L'Oréal",
    quote:
      "The Michelin star trail was the highlight of our year. Private kitchen access in Paris, a secret sake cellar in Tokyo — these are moments we'll treasure forever.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&q=80",
  },
  {
    id: "4",
    name: "Raj & Priya Kapoor",
    role: "Philanthropists",
    quote:
      "Our Serengeti starlight experience was transformative. Waking up to elephants outside our tent, then champagne breakfast on the terrace — pure magic.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&q=80",
  },
];
