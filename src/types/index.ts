import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: number;
  suffix?: string;
  label: string;
};

export type Pillar = {
  title: string;
  description: string;
};

export type Industry = {
  sector: string;
  title: string;
  description: string;
  icon: LucideIcon;
  isCore?: boolean;
};

export type Partner = {
  slug: string;
  name: string;
  stage: string;
  category: string;
  website: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  sector: string;
  summary: string;
  image: string;
  status: "Ongoing" | "Completed";
};

export type JourneyStage = {
  id: number;
  title: string;
  summary: string;
  challenge: string;
  solution: string;
  expertise: string;
  partner: {
    name: string;
    url: string;
    note: string;
  };
  components: string[];
};

export type SceneMarker = {
  stageId: number;
  // x/y are in the 1600x900 scene image coordinates
  x: number;
  y: number;
  partner: string;
  logo: string;
  card: { dx: number; dy: number; width: number };
};

export type TeamMember = {
  name: string;
  role: string;
  phones: string[];
  email: string;
};
