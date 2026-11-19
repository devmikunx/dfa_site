import type { Event } from "@/types";
import { UNSPLASH_IMAGES } from "@/constants";

export const EVENTS: Event[] = [
  {
    id: "growth-impact-conference",
    title: "Growth Impact Conference",
    theme: "ELEVATE",
    themeStatement: "Higher Minds. Bolder Leaders. Brighter Communities.",
    description:
      "The Growth Impact Conference is a transformative platform convened by De Future Audacious to equip, inspire and empower individuals with the knowledge, skills and mindset to thrive, lead and create sustainable impact in their communities and beyond.",
    focusPoints: ["Learn", "Connect", "Grow", "Create Impact"],
    date: "[Date to be announced — placeholder]",
    venue: "[Venue to be confirmed — placeholder]",
    status: "tba",
    image: UNSPLASH_IMAGES.conference,
    imageAlt: "Conference audience at a leadership development event",
  },
];
