export interface RestaurantInfo {
  name: string;
  tagline: string;
  concept: string;
  road: string;
  city: string;
  country: string;
  fullAddress: string;
  landmark: string;
  locationCode: string;
  phone: string;
  phoneRaw: string;
  whatsAppNumber: string;
  rating: number;
  reviewCount: number;
  currentHoursNote: string;
  defaultWhatsAppMessage: string;
  pizzaWhatsAppMessage: string;
  pastaWhatsAppMessage: string;
  menuWhatsAppMessage: string;
}

export const RESTAURANT_INFO: RestaurantInfo = {
  name: "18 Hours Pizza & Cafe",
  tagline: "Good Food, Late-Night Cravings",
  concept: "Pizza • Pasta • Cafe • Cravings • Comfort Food",
  road: "Jamia Annatia Road",
  city: "Khanewal",
  country: "Pakistan",
  fullAddress: "Jamia Annatia Road, Khanewal, Pakistan",
  landmark: "Located in: Haier Store (City Electronics)",
  locationCode: "7WXC+64 Khanewal, Pakistan",
  phone: "+92 327 4414466",
  phoneRaw: "+923274414466",
  whatsAppNumber: "923274414466",
  rating: 4.6,
  reviewCount: 85,
  currentHoursNote: "Open · Currently listed until 3 AM",
  defaultWhatsAppMessage: "Hello 18 Hours Pizza & Cafe, I would like to place an order / ask about the menu.",
  pizzaWhatsAppMessage: "Hello 18 Hours Pizza & Cafe, I would like to know today's pizza options and prices.",
  pastaWhatsAppMessage: "Hello 18 Hours Pizza & Cafe, I would like to ask about your pasta options and prices.",
  menuWhatsAppMessage: "Hello 18 Hours Pizza & Cafe, I would like to ask about today's menu and current prices.",
};

export function getWhatsAppUrl(message: string = RESTAURANT_INFO.defaultWhatsAppMessage): string {
  return `https://wa.me/${RESTAURANT_INFO.whatsAppNumber}?text=${encodeURIComponent(message)}`;
}

export const IMAGES = {
  heroPizza: "/src/assets/images/hero_pizza_khanewal_1791473702357.jpg",
  specialSlice: "/src/assets/images/special_pizza_slice_1791473717015.jpg",
  creamyPasta: "/src/assets/images/creamy_special_pasta_1791473732224.jpg",
  cafeAmbience: "/src/assets/images/cafe_dining_ambience_1791473747315.jpg",
  takeawayBox: "/src/assets/images/takeaway_pizza_box_1791473760994.jpg",
};

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  highlight: string;
  source: string;
  sentiment: "positive" | "mixed";
  notes: string[];
}

export const REVIEWS: ReviewItem[] = [
  {
    id: "ajoo-khan",
    author: "Ajoo Khan",
    rating: 5,
    highlight: "Praising super quality, delivery time, and economical pricing.",
    source: "Google Review",
    sentiment: "positive",
    notes: [
      "Noted super quality of the food",
      "Commended delivery time and takeaway readiness",
      "Found pricing economical and value-friendly",
      "Highlighted the special pizza and pasta",
    ],
  },
  {
    id: "usman-rashid",
    author: "Usman Rashid",
    rating: 5,
    highlight: "Complimented special pasta & pizza, transparent kitchen, and helpful staff.",
    source: "Google Review",
    sentiment: "positive",
    notes: [
      "Praised the special pasta and special pizza",
      "Helpful and attentive restaurant staff",
      "Takeaway order was freshly prepared and ready upon arrival",
      "Mentioned kitchen tour demonstrating transparency and cleanliness",
    ],
  },
  {
    id: "mubashir-hassan",
    author: "Mubashir Hassan",
    rating: 2,
    highlight: "Third-party Foodpanda delivery delay and below-average pizza experience.",
    source: "Google Review",
    sentiment: "mixed",
    notes: [
      "Reported that Foodpanda delivery took 70 minutes",
      "Felt pizza quality was below average during that specific delivery order",
      "Reflects the importance of ordering direct or picking up fresh hot takeaway",
    ],
  },
];

export const REVIEW_THEMES = [
  "Special Pizza",
  "Pasta",
  "Flavor & Freshness",
  "Staff Helpfulness",
  "Takeaway Readiness",
  "Delivery Experience",
  "Value Perception",
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: "faq-location",
    question: "Where is 18 Hours Pizza & Cafe located in Khanewal?",
    answer: "We are located on Jamia Annatia Road in Khanewal, Pakistan. You can find us inside the Haier Store (City Electronics building). The plus code location reference is 7WXC+64 Khanewal.",
  },
  {
    id: "faq-hours",
    question: "What time does 18 Hours Pizza & Cafe close?",
    answer: "Our business listing currently shows operating hours until 3 AM (Open · Closes 3 AM). Because operating schedules may occasionally vary on holidays or special dates, we always recommend messaging us on WhatsApp or calling ahead if you are visiting very late.",
  },
  {
    id: "faq-pizza",
    question: "Do you serve freshly baked pizza?",
    answer: "Yes! Pizza is our primary specialty. We bake hot pizzas with savory toppings, rich tomato sauces, and melted cheese crusts crafted for late-night cravings.",
  },
  {
    id: "faq-special-pizza",
    question: "Do you have the 'Special Pizza' mentioned by customers?",
    answer: "Yes, our Special Pizza is specifically praised across customer feedback for its super flavor and generous toppings. Inquire through WhatsApp for today's special pizza options.",
  },
  {
    id: "faq-pasta",
    question: "Do you serve pasta?",
    answer: "Yes, pasta is one of our most popular and comforting culinary categories, specifically praised by local customers including our Special Pasta.",
  },
  {
    id: "faq-whatsapp",
    question: "Can I place an order or inquire via WhatsApp?",
    answer: "Absolutely. You can reach us directly on WhatsApp at +92 327 4414466. Message us to ask about today's fresh availability, prices, and takeaway pickup times.",
  },
  {
    id: "faq-prices",
    question: "What are the current menu prices?",
    answer: "Because our ingredients and kitchen specials are prepared fresh daily, please message us on WhatsApp or call +92 327 4414466 for the latest up-to-date pricing list.",
  },
  {
    id: "faq-delivery",
    question: "Do you offer delivery or takeaway?",
    answer: "Takeaway orders can be called in advance so your order is hot and ready when you arrive. Customer reviews also reference delivery experiences; please contact the restaurant directly on WhatsApp to confirm current delivery coverage and timing in your area.",
  },
];

export interface GalleryImage {
  id: string;
  title: string;
  category: "pizza" | "pasta" | "cafe" | "food";
  src: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryImage[] = [
  {
    id: "gal-1",
    title: "Fresh Artisan Pizza",
    category: "pizza",
    src: IMAGES.heroPizza,
    caption: "Hot, blistered crust with melted mozzarella and fresh herbs.",
  },
  {
    id: "gal-2",
    title: "The Special Pizza Slice",
    category: "pizza",
    src: IMAGES.specialSlice,
    caption: "Mouth-watering cheese pull from our customer-favorite special pizza.",
  },
  {
    id: "gal-3",
    title: "Rich Creamy Special Pasta",
    category: "pasta",
    src: IMAGES.creamyPasta,
    caption: "Comforting pasta prepared hot with rich sauce and fresh herbs.",
  },
  {
    id: "gal-4",
    title: "Cozy Evening Cafe Moments",
    category: "cafe",
    src: IMAGES.cafeAmbience,
    caption: "Casual dining and late-night food gatherings with friends.",
  },
  {
    id: "gal-5",
    title: "Fresh Takeaway Order",
    category: "food",
    src: IMAGES.takeawayBox,
    caption: "Piping hot takeaway packaged for quick pickup and late-night convenience.",
  },
];
