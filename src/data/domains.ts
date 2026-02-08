import { Heart, Target, Users, Award, Leaf, BookOpen } from "lucide-react";

export interface Domain {
  id: string;
  icon: typeof Heart;
  title: string;
  desc: string;
  events: { name: string; description: string }[];
}

export const domains: Domain[] = [
  {
    id: "education",
    icon: BookOpen,
    title: "Education",
    desc: "Literacy campaigns, tutoring sessions, and educational awareness in communities.",
    events: [
      { name: "Aarambh Foundation Week", description: "Foundational week marking the beginning of NSS activities for the academic session." },
      { name: "National Youth Day", description: "Honoring the birth anniversary of Swami Vivekananda with youth-centric programs." },
    ],
  },
  {
    id: "health",
    icon: Heart,
    title: "Health",
    desc: "Health checkups, blood donation drives, and wellness awareness programs.",
    events: [
      { name: "Health Checkup", description: "Organizing free health checkup camps for underserved communities." },
      { name: "Yoga Day", description: "Promoting physical and mental well-being through organized yoga sessions on campus." },
    ],
  },
  {
    id: "innovation",
    icon: Target,
    title: "Innovation",
    desc: "Creative solutions and technology-driven initiatives for social impact.",
    events: [
      { name: "Drishtikon", description: "A perspective-building camp centered on social issues and critical thinking." },
      { name: "Happython", description: "A drive focused on spreading happiness through community engagement and social initiatives." },
    ],
  },
  {
    id: "society",
    icon: Users,
    title: "Society",
    desc: "Community outreach, legal awareness, and civic duty programs.",
    events: [
      { name: "House of Laws", description: "Awareness camp on legal rights, civic duties, and constitutional literacy." },
      { name: "PRERNA 16.0", description: "Flagship annual camp focused on holistic development and community immersion." },
    ],
  },
  {
    id: "environment",
    icon: Leaf,
    title: "Environment",
    desc: "Sustainability drives, plantation campaigns, and environmental awareness.",
    events: [
      { name: "Cleanliness Drive", description: "Organized campus and community cleaning initiatives promoting Swachh Bharat values." },
      { name: "Prayas", description: "An intensive social outreach camp focusing on rural development and community service." },
    ],
  },
  {
    id: "rural",
    icon: Award,
    title: "Rural Development",
    desc: "Village adoption, rural infrastructure support, and community building.",
    events: [
      { name: "Prayas", description: "An intensive social outreach camp focusing on rural development and community service." },
      { name: "Junoon", description: "A passion-driven camp combining creative expression with social awareness." },
    ],
  },
];
