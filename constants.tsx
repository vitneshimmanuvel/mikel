
import { Category, Photo, Testimonial } from './types';

export const CATEGORIES: Category[] = ['All', 'Wedding', 'Candid', 'Birthday', 'Ceremony'];

export const PHOTOS: Photo[] = [
  { id: 1, url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'The Silent Vow' },
  { id: 2, url: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200', category: 'Candid', title: 'Ephemeral Joy' },
  { id: 3, url: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1200', category: 'Birthday', title: 'Golden Years' },
  { id: 4, url: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1200', category: 'Ceremony', title: 'Ancestral Rhythms' },
  { id: 5, url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Twilight Bloom' },
  { id: 6, url: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1200', category: 'Candid', title: 'The Unseen Laugh' },
  { id: 7, url: 'https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1200', category: 'Birthday', title: 'Midnight Wish' },
  { id: 8, url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&q=80&w=1200', category: 'Ceremony', title: 'Sacred Light' },
  { id: 9, url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=1200', category: 'Wedding', title: 'Garden Elegance' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Eleanor & Julian",
    role: "The Paris Wedding",
    content: "Micheal doesn't just photograph; he captures the soul of the room. Our wedding photos feel like a high-fashion editorial.",
    avatar: "https://i.pravatar.cc/150?u=eleanor"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Architectural Digest",
    content: "A master of light and shadow. His candid shots from our exhibit were more profound than the art itself.",
    avatar: "https://i.pravatar.cc/150?u=marcus"
  },
  {
    id: 3,
    name: "Sienna Miller",
    role: "Vogue Creative",
    content: "In a world of filters, Micheal brings a raw, cult-classic authenticity that is impossible to replicate.",
    avatar: "https://i.pravatar.cc/150?u=sienna"
  }
];

export interface PackageTier {
    name: string;
    price: string;
    features: string[];
}

export interface ServiceIdea {
    title: string;
    description: string;
    designConcept: string;
    image: string;
    icon: string;
    tiers: PackageTier[];
}

export const SERVICES: ServiceIdea[] = [
  {
    title: "Cinematic Weddings",
    description: "Transcending traditional photography to create a cinematic narrative of your union.",
    designConcept: "Utilizing long-exposure motion blurs and dramatic lighting to evoke the feeling of a film still.",
    icon: "💍",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1400",
    tiers: [
      { name: "Minimalist", price: "₹1,20,000", features: ["6 Hours Coverage", "200 Edited Images", "Online Gallery"] },
      { name: "Editorial", price: "₹2,50,000", features: ["Full Day Coverage", "400 Edited Images", "Fine Art Album", "Engagement Session"] },
      { name: "Legacy", price: "₹4,80,000", features: ["2 Days Coverage", "Unlimited Images", "Luxury Heirloom Box", "Cinema Short Film"] }
    ]
  },
  {
    title: "The Candid Frame",
    description: "Capturing the whispers, the glances, and the unposed truth in a documentary style.",
    designConcept: "Natural ambient light and grainy textures to provide a sense of timeless authenticity.",
    icon: "📸",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1400",
    tiers: [
      { name: "Session", price: "₹45,000", features: ["2 Hours Shoot", "50 Edited Images", "Digital Delivery"] },
      { name: "Documentary", price: "₹95,000", features: ["4 Hours Shoot", "150 Edited Images", "Custom Photo Book"] }
    ]
  },
  {
    title: "Modern Celebrations",
    description: "From birthdays to galas, bringing an editorial edge to your events.",
    designConcept: "High-energy flash and wide-angle perspectives that capture the movement and energy of the room.",
    icon: "🎂",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&q=80&w=1400",
    tiers: [
      { name: "Soiree", price: "₹70,000", features: ["3 Hours Coverage", "Event Highlight Reel", "Social Media Previews"] },
      { name: "Gala", price: "₹1,80,000", features: ["Full Event Coverage", "Instant Print Station", "All Edited High-Res Files"] }
    ]
  },
  {
    title: "Dignified Rituals",
    description: "A respectful, aesthetic documentation of ceremonies and traditions.",
    designConcept: "Sacred geometry and symmetry to honor the balance and sanctity of the ritual.",
    icon: "🏛️",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&q=80&w=1400",
    tiers: [
      { name: "Ceremony", price: "₹85,000", features: ["Full Ritual Coverage", "Cultural Edit", "Presentation Box"] },
      { name: "Tradition", price: "₹1,65,000", features: ["Multi-day Coverage", "Family Portraits", "Handmade Leather Album"] }
    ]
  }
];

export const PROCESS_STEPS = [
  { step: "01", title: "Curation", desc: "We meet to discuss your aesthetic vision and the soul of your event." },
  { step: "02", title: "The Narrative", desc: "A bespoke shooting plan is crafted, focusing on your unique story." },
  { step: "03", title: "Capture", desc: "Micheal works with a minimalist presence, capturing moments as they naturally occur." },
  { step: "04", title: "Mastering", desc: "Each frame is meticulously hand-edited to ensure a cohesive, timeless aesthetic." }
];
