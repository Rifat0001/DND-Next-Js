import type { Partner } from "@/types";

export const partnersIntro = {
  subtitle: "Our Partners",
  title: "Trusted International Partners.",
  description:
    "DND works with leading international manufacturers to provide proven solutions for infrastructure water management challenges. Each partner is positioned within the rain-to-drain ecosystem — specified at the right stage of every project.",
};

export const partners: Partner[] = [
  {
    slug: "frost-drainage",
    name: "Frost Drainage",
    stage: "Stage 01 · Attenuation",
    category: "Building Drainage",
    website: "https://www.frostdrainage.com",
  },
  {
    slug: "ej",
    name: "EJ",
    stage: "Stage 02 · Collection",
    category: "Drainage & Access Solutions",
    website: "https://www.ejco.com",
  },
  {
    slug: "vip-seal",
    name: "VIP Seal",
    stage: "Stage 03 · Drainage",
    category: "Flexible Couplings & Adaptors",
    website: "https://www.vipseal.co.uk/en",
  },
  {
    slug: "marsh",
    name: "Marsh",
    stage: "Stage 04 · Separation",
    category: "Off Mains Drainage",
    website: "https://marshindustries.co.uk",
  },
  {
    slug: "wapro",
    name: "Wapro",
    stage: "Stage 05 · Control",
    category: "Holding Back The Flood",
    website: "https://wapro.com/en",
  },
];
