import type { LucideIcon } from "lucide-react";
import { Coffee, Handshake, Instagram, MapPin, MessageCircle } from "lucide-react";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface StoryPrinciple {
  label: string;
  title: string;
  description: string;
}

export interface MenuItem {
  name: string;
  tone: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: string;
}

export interface FranchiseMetric {
  value: string;
  label: string;
}

export const siteConfig = {
  name: "JALANI KOPI",
  tagline: "Kopi dan minuman favorit untuk nemenin hari kamu.",
  whatsappUrl: "https://wa.me/6282310306504",
  franchiseUrl: "https://wa.me/6282310306504?text=Halo%20JALANI%20KOPI%2C%20saya%20tertarik%20dengan%20informasi%20franchise.",
  instagramUrl: "https://www.instagram.com/jalani_coffee/",
  locationUrl: "https://www.google.com/maps/search/?api=1&query=Condet%2C%20Jakarta%20Timur",
};

export const navigationItems: NavigationItem[] = [
  { label: "Tentang", href: "#story" },
  { label: "Menu", href: "#menu" },
  { label: "Franchise", href: "#franchise" },
];

export const storyPrinciples: StoryPrinciple[] = [
  {
    label: "01",
    title: "Kopi",
    description: "Dari americano sampai kopi susu, tersedia untuk kamu yang suka rasa kopi yang ringan maupun kuat.",
  },
  {
    label: "02",
    title: "Non-Kopi",
    description: "Matcha, dark chocolate, dan pilihan segar untuk kamu yang sedang tidak ingin minum kopi.",
  },
  {
    label: "03",
    title: "Pesan Mudah",
    description: "Lihat menu, pilih minuman, lalu pesan langsung melalui WhatsApp tanpa proses yang panjang.",
  },
];

export const featuredMenu: MenuItem[] = [
  {
    name: "Kopi Susu Gula Aren",
    tone: "Kopi susu",
    description: "Perpaduan espresso, susu, dan gula aren dengan rasa manis yang pas.",
    image: "/images/menu/kopi-susu-gula-aren.webp",
    imageAlt: "Es kopi susu gula aren Jalani Coffee",
    accent: "from-coffee-cream via-primary to-coffee-brown",
  },
  {
    name: "Americano",
    tone: "Kopi hitam",
    description: "Espresso dan air dengan rasa kopi yang bersih dan kuat.",
    image: "/images/menu/americano.webp",
    imageAlt: "Es americano Jalani Coffee",
    accent: "from-zinc-200 via-zinc-600 to-coffee-charcoal",
  },
  {
    name: "Matcha",
    tone: "Non-kopi",
    description: "Matcha dan susu dengan rasa lembut, creamy, dan tidak terlalu manis.",
    image: "/images/menu/matcha.webp",
    imageAlt: "Es matcha latte Jalani Coffee",
    accent: "from-lime-100 via-[#81985a] to-[#24301d]",
  },
  {
    name: "Dark Chocolate",
    tone: "Cokelat",
    description: "Minuman cokelat dengan rasa pekat dan tekstur yang creamy.",
    image: "/images/menu/dark-chocolate.webp",
    imageAlt: "Es dark chocolate Jalani Coffee",
    accent: "from-[#ead2b2] via-[#6b3a24] to-[#160907]",
  },
  {
    name: "Hazelnut Latte",
    tone: "Kopi susu",
    description: "Latte creamy dengan aroma hazelnut dan rasa manis yang ringan.",
    image: "/images/menu/hazelnut-latte.webp",
    imageAlt: "Es hazelnut latte Jalani Coffee",
    accent: "from-[#f0cf9c] via-[#a86630] to-[#3a1c0e]",
  },
  {
    name: "Lemon Tea",
    tone: "Teh",
    description: "Teh dengan rasa lemon yang segar dan ringan untuk diminum kapan saja.",
    image: "/images/menu/lemon-tea.webp",
    imageAlt: "Es lemon tea Jalani Coffee",
    accent: "from-[#fff1a8] via-[#d99b31] to-[#47310d]",
  },
  {
    name: "Caramel Latte",
    tone: "Kopi susu",
    description: "Latte lembut dengan rasa karamel manis dan aroma kopi yang seimbang.",
    image: "/images/menu/caramel-latte.webp",
    imageAlt: "Es caramel latte Jalani Coffee",
    accent: "from-[#ffe0a8] via-[#c77a27] to-[#4b240c]",
  },
  {
    name: "Canolemonia",
    tone: "Kopi segar",
    description: "Perpaduan kopi dan lemon dengan rasa segar yang berbeda dari kopi susu.",
    image: "/images/menu/canolemonia.webp",
    imageAlt: "Es canolemonia Jalani Coffee",
    accent: "from-[#ffe36c] via-[#ef7b18] to-[#541d0b]",
  },
];

export const franchiseMetrics: FranchiseMetric[] = [
  { value: "Konsep", label: "gerai dan identitas" },
  { value: "Menu", label: "kopi dan non-kopi" },
  { value: "Kontak", label: "langsung via WhatsApp" },
];

export const footerLinks: FooterLink[] = [
  { label: "WhatsApp", href: siteConfig.whatsappUrl, icon: MessageCircle },
  { label: "Instagram", href: siteConfig.instagramUrl, icon: Instagram },
  { label: "Condet", href: siteConfig.locationUrl, icon: MapPin },
  { label: "Franchise", href: siteConfig.franchiseUrl, icon: Handshake },
  { label: "Menu", href: "#menu", icon: Coffee },
];
