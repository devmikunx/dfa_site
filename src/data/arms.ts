import type { OrgStructure,  GicPillar, ReachPillar2 } from "@/types";

export const ORG_STRUCTURES: OrgStructure[] = [
  {
    id: "internal",
    classification: "A",
    label: "Internal Structure",
    description:
      "The Internal Structure forms the leadership, guidance and management backbone of De Future Audacious. These three arms provide the organisational framework through which DFA coordinates its direction, projects and operations.",
    arms: [
      {
        id: "de-4-pillars",
        number: "01",
        name: "De 4 Pillars",
        description:
          "De 4 Pillars represents the Board Trustee structure of De Future Audacious. As the foundational governance body, the trustees provide strategic oversight, organisational direction and accountability across all arms and activities of DFA.",
        focusAreas: [
          "Board governance",
          "Strategic oversight",
          "Organisational direction",
          "Accountability",
        ],
      },
      {
        id: "patrons-matrons",
        number: "02",
        name: "Patrons and Matrons",
        description:
          "Patrons and Matrons are leaders and community members drawn from different walks of life. They serve as guiding figures — the shoulders on which the managers and members of DFA stand — providing support, wisdom and guidance towards clarity, purposeful activities and impactful outcomes.",
        focusAreas: [
          "Leadership guidance",
          "Community representation",
          "Organisational support",
          "Purposeful direction",
        ],
      },
      {
        id: "de-managers",
        number: "03",
        name: "De Managers",
        description:
          "De Managers are the project and portfolio leads of De Future Audacious. They are responsible for leading and ensuring that the different arms and managerial roles of the organisation function as expected, coordinating activities and driving the organisation's day-to-day priorities.",
        focusAreas: [
          "Project leadership",
          "Portfolio coordination",
          "Operational oversight",
          "Cross-arm coordination",
        ],
      },
    ],
  },
  {
    id: "intermediary",
    classification: "B",
    label: "Intermediary Structure",
    description:
      "The Intermediary Structure bridges internal leadership with community-facing work. These three arms focus on education, research and enterprise — translating DFA's values into knowledge, scholarship and opportunity.",
    arms: [
      {
        id: "de-educationists",
        number: "04",
        name: "De Educationists",
        description:
          "De Educationists consists of exceptional educators with a shared goal of impacting excellent educational values and lessons on society at large. This arm is dedicated to educational development, knowledge sharing and promoting valuable learning experiences across communities.",
        focusAreas: [
          "Educational values",
          "Knowledge sharing",
          "Learning and development",
          "Educational impact",
        ],
      },
      {
        id: "de-scientias",
        number: "05",
        name: "De Scientias",
        description:
          "De Scientias consists of scholars transforming community impacts into scientific and community-relevant publications and reports. Its purpose is to support effective implementation and an overall shift in communities towards a better quality of life through research-informed understanding.",
        focusAreas: [
          "Research and scholarship",
          "Scientific publications",
          "Community-relevant reports",
          "Research-informed implementation",
        ],
      },
      {
        id: "de-ambassadors",
        number: "06",
        name: "De Ambassadors",
        description:
          "De Ambassadors consists of members of the organisation with enterprises, serving as a sales and marketing channel for products and services. They act as a powerhouse for DFA, connecting its products and services with the wider community and creating pathways for enterprise growth.",
        focusAreas: [
          "Enterprise development",
          "Sales and marketing",
          "Product and service promotion",
          "Community connection",
        ],
      },
    ],
  },
  {
    id: "impact",
    classification: "C",
    label: "Impact / Community-Based Structure",
    description:
      "The Impact / Community-Based Structure is DFA's public-facing arm — where its purpose meets people. REACH, GIC and RCG each address distinct dimensions of community development, personal growth and broader human flourishing.",
    arms: [
      {
        id: "reach",
        number: "07",
        name: "REACH",
        acronym: "REACH",
        tagline: "SHIFT",
        fullName: "Reaching and Empowering All through Community Health and Human Development",
        description:
          "REACH is DFA's community awareness, education, outreach and partnership engagement arm. Geared towards informing, educating and supporting communities through medical, welfare and educational awareness and orientation, REACH works towards healthier people, stronger communities and brighter futures.",
        focusAreas: [
          "Community health outreach",
          "Welfare support",
          "Health education and prevention",
          "Skills development",
          "Community engagement",
        ],
      },
      {
        id: "gic",
        number: "08",
        name: "GIC",
        acronym: "GIC",
        tagline: "ELEVATE",
        fullName: "Growth Impact Conference",
        description:
          "GIC is the self-discovery institute of De Future Audacious, establishing a holistic lifestyle for anyone who engages with its activities. Through its ELEVATE identity — Higher Minds, Bolder Leaders, Brighter Communities — GIC focuses on capacity building, mindset transformation and leadership development as pathways to purposeful living and sustainable impact.",
        focusAreas: [
          "Capacity building",
          "Mindset transformation",
          "Leadership development",
          "Personal growth",
          "Community impact",
        ],
      },
      {
        id: "rcg",
        number: "09",
        name: "RCG",
        acronym: "RCG",
        tagline: "PROCLAIMERS",
        fullName: "Revelation Cornerstone Globe",
        description:
          "RCG — Revelation Cornerstone Globe — is the Great Commission arm of De Future Audacious. Through its PROCLAIMERS identity, RCG carries forward a commitment to purpose, outreach and the broader calling that shapes DFA's engagement with communities and the world.",
        focusAreas: [
          "Great Commission",
          "Community outreach",
          "Purpose-driven engagement",
        ],
      },
    ],
  },
];

export const REACH_PILLARS: ReachPillar2[] = [
  {
    number: "01",
    title: "Community Health Outreach & Engagement",
    subtitle: "Promoting Healthier Lives.",
    description:
      "REACH promotes health awareness and preventive education through community-focused engagement. Its health outreach centres on helping individuals and communities understand health issues, encourage healthier practices and access appropriate screening and referral opportunities.",
    focusAreas: [
      "Health education",
      "Disease prevention",
      "Screenings and referrals",
      "Wellness campaigns",
      "Community engagement",
    ],
  },
  {
    number: "02",
    title: "Community Welfarism & Support",
    subtitle: "Supporting Individuals. Strengthening Families.",
    description:
      "REACH recognises the importance of community support and collective wellbeing. Through its welfare focus, it seeks to support individuals and families, encourage community care and promote access to resources that contribute to an improved quality of life.",
    focusAreas: [
      "Social support",
      "Vulnerable group assistance",
      "Nutrition and food support",
      "Sanitation and hygiene advocacy",
      "Community welfare initiatives",
    ],
  },
  {
    number: "03",
    title: "Skills Development & Sustainable Community Impact",
    subtitle: "Empowering People for Sustainable Growth.",
    description:
      "REACH promotes skills development and empowerment as essential parts of sustainable community development. Through vocational and digital skills, mentorship and entrepreneurship support, the initiative equips individuals with opportunities to improve their capabilities and contribute to their communities.",
    focusAreas: [
      "Vocational and digital skills",
      "Mentorship and coaching",
      "Entrepreneurship support",
      "Youth and women empowerment",
      "Sustainable community initiatives",
    ],
  },
];

export const GIC_PILLARS: GicPillar[] = [
  {
    number: "01",
    title: "Capacity Building & Development",
    focusAreas: [
      "Professional development",
      "Entrepreneurship",
      "Digital skills",
      "Innovation",
      "Career advancement",
    ],
  },
  {
    number: "02",
    title: "Mindset Transformation & Mentoring",
    focusAreas: [
      "Personal growth",
      "Confidence building",
      "Purpose discovery",
      "Mentorship",
      "Character development",
    ],
  },
  {
    number: "03",
    title: "Leadership Development",
    focusAreas: [
      "Leadership skills",
      "Team building",
      "Strategic thinking",
      "Community impact",
      "Social responsibility",
    ],
  },
];
