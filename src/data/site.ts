import type { NavLink } from "@/types";

export const siteConfig = {
  name: "DND Construction Technicals (FZE)",
  shortName: "DND",
  tagline: "Rain-to-Drain",
  description:
    "Specialist rain-to-drain infrastructure solutions. Engineering, supply and project delivery support for airports, ports, roads, utilities and major civil projects.",
  url: "https://dndcs.co.uk",
  logo: "/images/dnd-logo.webp",
  logoMark: "/images/dnd-logo-mark.png",
  contact: {
    phones: [
      { label: "UAE", number: "+971 54 749 0888" },
      { label: "UK", number: "+44 776 737 0479" },
    ],
    email: "dharmendra.nayee@dndcs.co.uk",
    address: "SRTIP, Block B-B53-154, Sharjah, UAE",
    hours: "Mon–Fri, 9:00 AM–6:00 PM",
  },
};

export const mainNav: NavLink[] = [
  { label: "Solutions", href: "#solutions" },
  { label: "Partners", href: "#partners" },
  { label: "About", href: "/about" },
  { label: "Technical Insights", href: "/technical-insights" },
  { label: "Contact", href: "#contact" },
];

export const footerNav: Record<"solutions" | "company", NavLink[]> = {
  solutions: [
    { label: "Frost Drainage", href: "/partners/frost-drainage" },
    { label: "EJ", href: "/partners/ej" },
    { label: "VIP Seal", href: "/partners/vip-seal" },
    { label: "Marsh", href: "/partners/marsh" },
    { label: "Wapro", href: "/partners/wapro" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Partners", href: "#partners" },
    { label: "Technical Insights", href: "/technical-insights" },
    { label: "Contact", href: "#contact" },
  ],
};
