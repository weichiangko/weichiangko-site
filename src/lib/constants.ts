export const PERSONAL_INFO = {
  name: "Ben Ko",
  title: "Software Designer",
  subtitle: "Software Designer",
  email: "designerko1215@gmail.com",
  linkedin: "https://www.linkedin.com/in/weichiangko/",
  bio: "Whether it's brainstorming a new project, discussing design optimizations, or just sharing creative insights, I'm always excited to collaborate. Reach out to me and let's craft something exceptional — together!",
} as const;

export const NAVIGATION = [
  { name: "Home", href: "/", icon: "Home" },
  { name: "About", href: "/about", icon: "User" },
  { name: "Projects", href: "/projects", icon: "Briefcase" },
  { name: "Contact", href: "/contact", icon: "Mail" },
] as const;

export const PROJECTS = [
  {
    id: "mionext",
    title: "Mionext: Revolutionizing Personalized Meal Delivery",
    category: "Web Development",
    client: "Mionext",
    description: "A comprehensive meal delivery platform with AI-powered personalization",
    image: "/images/projects/mionext.jpg",
    slug: "mionext",
  },
  {
    id: "natours",
    title: "Natours: Elevating Adventure Travel Through Innovative Web Solutions",
    category: "UX/UI Design",
    client: "Natours",
    description: "Adventure travel booking platform with immersive user experience",
    image: "/images/projects/natours.jpg",
    slug: "natours",
  },
  {
    id: "nexter",
    title: "Nexter: Redefining Real Estate with Cutting-Edge Web Design",
    category: "UX/UI Design",
    client: "Nexter",
    description: "Modern real estate platform with advanced property search",
    image: "/images/projects/nexter.jpg",
    slug: "nexter",
  },
  {
    id: "travel-planning",
    title: "Travel Planning Platform",
    category: "Side Project",
    client: "Personal",
    description: "Collaborative travel planning tool for groups",
    image: "/images/projects/travel.jpg",
    slug: "travel-planning",
  },
] as const;

export const PROJECT_CATEGORIES = [
  "All",
  "UX/UI Design",
  "Web Development",
  "Side Project",
] as const;