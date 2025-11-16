export interface ProjectDetail {
  id: string;
  title: string;
  category: string | string[]; // Support both single and multiple categories
  client: string;
  completionDate?: string;
  image: string;
  cardImage: string;
  slug: string;
  timeline: string;
  role: string;
  company: string;
  award?: string;
  awardUrl?: string;
  links?: {
    name: string;
    url: string;
    type?: 'playStore' | 'appStore' | 'website' | 'demo' | 'github';
  }[];
  contentFile: string;
  video?: string;  // Optional: hover preview video
}

export const mionext: ProjectDetail = {
  id: "mionext",
  title: "MioNext: Revolutionizing Connected Dash Cam Solution",
  category: "UX/UI Design",
  client: "MioNext",
  completionDate: "2024",
  image: "/images/projects/mionext-hero.jpg",
  cardImage: "/images/projects/mionext-card.jpg",
  slug: "mionext",
  timeline: "6 months",
  role: "UX Strategy, UI Design, Prototyping",
  company: "MiTAC",
  award: "2024 iF Design Award - User Experience",
  awardUrl: "https://ifdesign.com/en/winner-ranking/project/empowereddriving-mionext-app-and-misentry-series/614971",
  links: [
    {
      name: "App Store",
      url: "https://apps.apple.com/tw/app/mionext/id6443811785",
      type: "appStore"
    },
    {
      name: "Play Store",
      url: "https://play.google.com/store/apps/details?id=com.mitac.mionext&hl=zh_TW",
      type: "playStore"
    }
  ],
  contentFile: "/content/projects/mionext.mdx"
};

export const visionmax: ProjectDetail = {
  id: "visionmax",
  title: "VisionMax: AI-Powered Video Telematics for Safer, Smarter Fleets",
  category: "UX/UI Design",
  client: "VisionMax",
  completionDate: "2024",
  image: "/images/projects/visionmax-hero.jpg",
  cardImage: "/images/projects/visionmax-card.jpg",
  slug: "visionmax",
  timeline: "8 months",
  role: "UX Strategy, UI Design, Functional Prototyping",
  company: "MiTAC",
  links: [
    {
      name: "Live Demo",
      url: "https://www.visionmaxfleet.com/login",
      type: "demo"
    },
    {
      name: "Product Website",
      url: "https://www.mitacmdt.com/tw/products/video-telematics/vt-solution/",
      type: "website"
    }
  ],
  contentFile: "/content/projects/visionmax.mdx"
};

export const edgeAISystem: ProjectDetail = {
  id: "edgeAISystem",
  title: "Edge AI Surveillance System: Next-Generation Smart Surveillance System",
  category: ["UX/UI Design", "Development"], // Multiple categories
  client: "EdgeAI System",
  completionDate: "2024",
  image: "/images/projects/edgeAISystem-hero.jpg",
  cardImage: "/images/projects/edgeAISystem-card.jpg",
  slug: "edgeAISystem",
  timeline: "6 months",
  role: "UX Strategy, UI Design, Prototyping",
  company: "MiTAC",
  award: "2024 Taiwan Excellence Award - Innovation",
  awardUrl: "https://www.taiwanexcellence.org/",
  links: [
    {
      name: "Live Demo",
      url: "https://edgeai-system-demo.netlify.app",
      type: "demo"
    },
    {
      name: "Product Website",
      url: "https://www.mitacmdt.com/tw/products/edge-ai/",
      type: "website"
    }
  ],
  contentFile: "/content/projects/edgeAISystem.mdx"
};

export const i40bs: ProjectDetail = {
  id: "i40bs",
  title: "Intelligent 4.0 Ballscrew",
  category: ["UX/UI Design", "Development"], // Multiple categories
  client: "i4.0bs",
  completionDate: "2024",
  image: "/images/projects/i40bs-hero.jpg",
  cardImage: "/images/projects/i40bs-card.jpg",
  slug: "i40bs",
  timeline: "6 months",
  role: "UX Strategy, UI Design, Prototyping",
  company: "MiTAC",
  links: [
    {
      name: "Behance Gallery",
      url: "https://www.behance.net/gallery/100527681/Smart-Module-System",
      type: "website"
    }
  ],
  contentFile: "/content/projects/i40bs.mdx"
};

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  mionext,
  visionmax,
  edgeAISystem,
  i40bs,
};