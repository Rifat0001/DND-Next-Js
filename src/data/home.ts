import { Anchor, Factory, Plane, TrafficCone, Waves, Zap } from "lucide-react";

import type { Industry, Pillar, Project, Stat, TeamMember } from "@/types";

export const hero = {
  subtitle: "DND Construction Technicals (FZE)",
  title: { before: "Delivering ", highlight: "Rain-to-Drain", after: " Solutions." },
  description:
    "We bridge technical expertise, specialist manufacturers and infrastructure requirements — delivering complete rain-to-drain solutions across airports, ports, roads, utilities and major civil projects.",
  footnote: "35+ Years of Infrastructure Knowledge & Technical Support",
  image: "/images/hero-background.webp",
};

export const heroStats: Stat[] = [
  { value: 35, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Projects Delivered" },
  { value: 5, label: "Specialist Partners" },
];

export const intro = {
  subtitle: "Managing Water",
  title: "Managing water requires more than",
  highlight: "individual products.",
  paragraphs: [
    "Successful infrastructure projects depend on understanding the entire rain-to-drain process and selecting the right solutions at every stage — from surface collection through to safe discharge.",
    "DND coordinates across consultants, contractors, authorities, developers and specialist manufacturers to deliver practical, compliant solutions throughout that journey.",
  ],
};

export const whyDnd = {
  subtitle: "Why Clients Work With DND",
  title: "Knowledge. Solutions.",
  highlight: "Support.",
  paragraphs: [
    "Successful infrastructure water management is rarely solved by a single product. It requires experience, technical understanding, and access to the right solutions at the right stage of a project.",
    "DND brings these elements together to support better project outcomes — from early consultation through to delivery on site.",
  ],
};

export const pillars: Pillar[] = [
  {
    title: "Knowledge",
    description:
      "35+ years of infrastructure and water management expertise across the most demanding civil environments.",
  },
  {
    title: "Solutions",
    description:
      "Connecting the right products and partners for every project — specified, sourced and supplied as one package.",
  },
  {
    title: "Support",
    description:
      "From design stage through supply and project delivery, with engineering input on every drawing.",
  },
];

export const industriesIntro = {
  subtitle: "Industries Served",
  title: "Built for heavy infrastructure.",
  description:
    "Airports, ports and roads sit at the centre of what we do — projects where load, longevity and operational uptime are non-negotiable.",
};

export const industries: Industry[] = [
  {
    sector: "Aviation",
    title: "Airports & Aviation",
    description: "Runways, aprons and airside drainage",
    icon: Plane,
    isCore: true,
  },
  {
    sector: "Marine",
    title: "Ports & Marine",
    description: "Quayside, terminal & tidal outfalls",
    icon: Anchor,
    isCore: true,
  },
  {
    sector: "Highways",
    title: "Road Infrastructure",
    description: "Highways, interchanges & tunnels",
    icon: TrafficCone,
    isCore: true,
  },
  {
    sector: "Civil",
    title: "Stormwater Networks",
    description: "Urban flood mitigation & SUDS",
    icon: Waves,
  },
  {
    sector: "Industrial",
    title: "Industrial Facilities",
    description: "Process yards & hardstanding runoff",
    icon: Factory,
  },
  {
    sector: "Public",
    title: "Utilities & Authorities",
    description: "Government and civic infrastructure",
    icon: Zap,
  },
];

export const projectsIntro = {
  subtitle: "Featured Projects",
  title: "Real challenges.",
  highlight: "Practical solutions.",
  description:
    "Every infrastructure project presents unique water management challenges. Our solutions are built around performance, compliance, reliability and long-term project success.",
};

export const projects: Project[] = [
  {
    slug: "khazna-data-centre",
    title: "Khazna Data Centre",
    location: "Abu Dhabi, UAE",
    sector: "Data Centres",
    summary:
      "Hydrocarbon interception and sealed drainage connections: Marsh Oil & Water Separators with VIPSeal® connections for mission-critical data centre infrastructure.",
    image: "/images/project-khazna.webp",
    status: "Ongoing",
  },
  {
    slug: "ndayane-container-terminal",
    title: "Ndayane Container Terminal",
    location: "Senegal",
    sector: "Port Infrastructure",
    summary:
      "Heavy-duty apron drainage and access: EJ Swarm Aqua® F900 slot drainage, access covers and gully systems engineered for extreme terminal loads.",
    image: "/images/project-ndayane.webp",
    status: "Ongoing",
  },
  {
    slug: "batangas-container-terminal",
    title: "Batangas Container Terminal",
    location: "Philippines",
    sector: "Port Infrastructure",
    summary:
      "Heavy-duty terminal surface drainage: EJ Swarm Aqua® F900 linear slot drainage designed for intense tropical rainfall and heavy port equipment.",
    image: "/images/project-batangas.webp",
    status: "Ongoing",
  },
  {
    slug: "dubai-canal-infrastructure",
    title: "Dubai Canal Infrastructure",
    location: "Dubai, UAE",
    sector: "Urban Infrastructure",
    summary:
      "Run-off separation and sealed drainage along the canal corridor: Marsh Oil & Water Separators with VIPSeal® connections to protect the waterway.",
    image: "/images/project-dubai-canal.webp",
    status: "Ongoing",
  },
  {
    slug: "lattika-port",
    title: "Lattika Port",
    location: "Syria",
    sector: "Marine",
    summary:
      "Hydrocarbon interception for port run-off: Marsh Oil & Water Separators selected to capture oil before surface water reaches the harbour.",
    image: "/images/project-lattika.webp",
    status: "Ongoing",
  },
];

export const contactIntro = {
  subtitle: "Contact",
  title: "Have a project challenge?",
  highlight: "Let’s discuss the right solution.",
  description:
    "Every project is different. Speak directly with our team to discuss your requirements and identify the most suitable approach.",
};

export const team: TeamMember[] = [
  {
    name: "Dom Nayee",
    role: "Founder · Director",
    phones: ["+971 54 749 0888", "+44 776 737 0479"],
    email: "dharmendra.nayee@dndcs.co.uk",
  },
  {
    name: "Nitin Kumble",
    role: "Team · Technical Sales",
    phones: ["+971 50 995 1746"],
    email: "nitin.kumble@dndcs.co.uk",
  },
  {
    name: "Poornima Jacob",
    role: "Team · Operations",
    phones: ["+971 52 188 3061"],
    email: "poornima.jacob@dndcs.co.uk",
  },
];
