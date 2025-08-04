export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  client: string;
  completionDate?: string;
  description?: string;
  image: string;
  cardImage: string;
  slug: string;
  timeline: string;
  role: string;
  company: string;
  award?: string;
  contentFile: string;
}

export const mionext: ProjectDetail = {
  id: "mionext",
  title: "MioNext: Revolutionizing Connected Dash Cam Solution",
  category: "UX/UI Design",
  client: "MioNext",
  completionDate: "2024",
  description: "A comprehensive meal delivery platform with AI-powered personalization",
  image: "/images/projects/mionext-hero.jpg",
  cardImage: "/images/projects/mionext-card.jpg",
  slug: "mionext",
  timeline: "6 months",
  role: "UX Strategy, UI Design, Prototyping",
  company: "MiTAC",
  award: "2024 iF Design Award - User Experience",
  contentFile: "/content/projects/mionext.mdx"
};

export const natours: ProjectDetail = {
  id: "natours",
  title: "Natours: Elevating Adventure Travel Through Innovative Web Solutions",
  category: "UX/UI Design",
  client: "Natours",
  completionDate: "2024",
  description: "Adventure travel booking platform with immersive user experience",
  image: "/images/projects/natours-hero.jpg",
  cardImage: "/images/projects/natours-card.jpg",
  slug: "natours",
  timeline: "4 months",
  role: "UX/UI Designer",
  company: "Adobe",
  contentFile: "/content/projects/natours.mdx"
};

export const nexter: ProjectDetail = {
  id: "nexter",
  title: "Nexter: Redefining Real Estate with Cutting-Edge Web Design",
  category: "UX/UI Design",
  client: "Nexter",
  completionDate: "2024",
  description: "Modern real estate platform with advanced property search",
  image: "/images/projects/nexter-hero.jpg",
  cardImage: "/images/projects/nexter-card.jpg",
  slug: "nexter",
  timeline: "5 months",
  role: "UX/UI Designer & Frontend Developer",
  company: "HubSpot",
  award: "Awwwards - Honorable Mention",
  contentFile: "/content/projects/nexter.mdx"
};

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  mionext,
  natours,
  nexter,
};