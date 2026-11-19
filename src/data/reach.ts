import type { ReachPillar } from "@/types";
import { UNSPLASH_IMAGES } from "@/constants";

export const REACH_PILLARS: ReachPillar[] = [
  {
    number: "01",
    title: "Community Health Outreach & Engagement",
    subtitle: "Promoting Healthier Lives.",
    description:
      "REACH promotes health awareness and preventive education through community-focused engagement. Its health outreach focus centres on helping individuals and communities understand health issues, encourage healthier practices and access appropriate screening and referral opportunities.",
    focusAreas: [
      "Health Education",
      "Disease Prevention",
      "Screenings & Referrals",
      "Wellness Campaigns",
      "Community Engagement",
    ],
    image: UNSPLASH_IMAGES.healthOutreach,
    imageAlt: "Community health outreach workers in the field",
  },
  {
    number: "02",
    title: "Community Welfarism & Support",
    subtitle: "Supporting Individuals. Strengthening Families.",
    description:
      "REACH recognises the importance of community support and collective wellbeing. Through its welfare focus, it seeks to support individuals and families, encourage community care and promote access to resources that contribute to an improved quality of life.",
    focusAreas: [
      "Social Support",
      "Vulnerable Group Assistance",
      "Nutrition & Food Support",
      "Sanitation & Hygiene Advocacy",
      "Community Welfare Initiatives",
    ],
    image: UNSPLASH_IMAGES.communityWelfare,
    imageAlt: "Community welfare and support activities",
  },
  {
    number: "03",
    title: "Skills Development & Sustainable Community Impact",
    subtitle: "Empowering People for Sustainable Growth.",
    description:
      "REACH promotes skills development and empowerment as important parts of sustainable community development. Through vocational and digital skills, mentorship, coaching and entrepreneurship support, the initiative focuses on equipping individuals with opportunities to improve their capabilities.",
    focusAreas: [
      "Vocational & Digital Skills",
      "Mentorship & Coaching",
      "Entrepreneurship Support",
      "Youth & Women Empowerment",
      "Sustainable Community Initiatives",
    ],
    image: UNSPLASH_IMAGES.skillsDev,
    imageAlt: "Skills training and development session",
  },
];

export const REACH_IMPACT_ITEMS = [
  {
    title: "Healthier People",
    description: "Promoting health awareness, education and improved community wellbeing.",
  },
  {
    title: "Stronger Communities",
    description: "Encouraging support, engagement and collective responsibility.",
  },
  {
    title: "More Opportunities",
    description: "Equipping individuals with skills, knowledge and opportunities for growth.",
  },
  {
    title: "Lasting Impact",
    description: "Supporting sustainable initiatives that contribute to long-term community development.",
  },
];
