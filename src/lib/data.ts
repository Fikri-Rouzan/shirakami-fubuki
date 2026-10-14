import type { ComponentType } from "svelte";
import { Cpu, Languages, Shield } from "lucide-svelte";

export interface NavLink {
  label: string;
  href: string;
  mobileLabel?: string;
}

export interface FeatureItem {
  icon: ComponentType;
  title: string;
  description: string;
  colorClass: string;
}

export interface CommandItem {
  name: string;
  description: string;
}

export interface DocumentSection {
  title: string;
  content: string;
  items?: string[];
  codeHighlight?: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Terms", href: "/terms", mobileLabel: "Terms of Service" },
  { label: "Privacy", href: "/privacy", mobileLabel: "Privacy Policy" },
];

export const FEATURES: FeatureItem[] = [
  {
    icon: Cpu,
    title: "Contextual Memory",
    description:
      "Remembers user preferences and conversation context naturally across interactions.",
    colorClass: "text-fubuki-blue",
  },
  {
    icon: Languages,
    title: "Multi-Language Support",
    description:
      "Delivers fully localized responses in English, Indonesian, and Japanese.",
    colorClass: "text-fubuki-gold",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Offers complete control over personal data with instant memory deletion commands.",
    colorClass: "text-fubuki-green",
  },
];

export const COMMANDS: CommandItem[] = [
  {
    name: "/chat [message]",
    description: "Start a conversation directly with Shirakami Fubuki AI.",
  },
  {
    name: "/language [code]",
    description: "Set your preferred response language (EN, ID, JP).",
  },
  {
    name: "/clear-memory",
    description: "Delete your stored conversation history instantly.",
  },
  {
    name: "/help",
    description: "View available bot commands and usage guide.",
  },
];

export const PRIVACY_SECTIONS: DocumentSection[] = [
  {
    title: "1. Information We Collect",
    content:
      "To facilitate contextual AI conversations and maintain user preferences, the bot stores:",
    items: [
      "Discord User ID and Display Name.",
      "Preferred language selection.",
      "Recent message history sent directly to or mentioning the bot.",
      "User preferences extracted during conversations.",
    ],
  },
  {
    title: "2. How Data is Used",
    content:
      "Collected data is strictly used to maintain ongoing conversation context and persona consistency. We do not sell, rent, or share user data with third parties for marketing or external purposes.",
  },
  {
    title: "3. Data Retention & Control",
    content:
      "Users retain full control over their stored data and can instantly erase their personal conversation memory at any time using the /clear-memory command.",
    codeHighlight: "/clear-memory",
  },
  {
    title: "4. Data Security",
    content:
      "Stored information is protected using industry-standard database security protocols and encrypted database connections.",
  },
];

export const TERMS_SECTIONS: DocumentSection[] = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By adding or interacting with Shirakami Fubuki Bot on Discord, you agree to comply with these Terms of Service. If you disagree with any part of these terms, please remove the bot from your server.",
  },
  {
    title: "2. Description of Service",
    content:
      'The bot provides automated conversational responses powered by artificial intelligence. Services are provided on an "as-is" and "as-available" basis without guarantees of uninterrupted uptime.',
  },
  {
    title: "3. User Obligations",
    content:
      "Users agree not to exploit, abuse, or attempt to reverse-engineer the bot's service, nor use the bot to generate harmful, illegal, or malicious content.",
  },
  {
    title: "4. Disclaimer",
    content:
      "This application is an independent fan-made project and is not officially affiliated with, endorsed by, or sponsored by Hololive, Cover Corp, or Discord Inc.",
  },
];
