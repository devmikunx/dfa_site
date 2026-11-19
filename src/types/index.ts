export interface NavItem {
  label: string;
  href: string;
}

export type Event = {
  id: string;
  title: string;
  theme: string;
  themeStatement: string;
  description: string;
  focusPoints: string[];
  date: string;
  venue: string;
  status: "upcoming" | "past" | "tba";
  image: string;
  imageAlt: string;
};

export interface OrgArm {
  id: string;
  number: string;
  name: string;
  acronym?: string;
  tagline?: string;
  fullName?: string;
  description: string;
  focusAreas?: string[];
}

export interface OrgStructure {
  id: string;
  classification: string;
  label: string;
  description: string;
  arms: OrgArm[];
}

export interface GicPillar {
  number: string;
  title: string;
  focusAreas: string[];
}

export interface ReachPillar {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  image: string;
  imageAlt: string;
}

export interface ReachPillar2 {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
}

export type Pillar = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  image: string;
  imageAlt: string;
};
