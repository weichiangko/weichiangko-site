export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
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

export const nexter: ProjectDetail = {
  id: "nexter",
  title: "Nexter: Redefining Real Estate with Cutting-Edge Web Design",
  category: "UX/UI Design",
  client: "Nexter",
  completionDate: "2024",
  image: "/images/projects/nexter-hero.jpg",
  cardImage: "/images/projects/nexter-card.jpg",
  slug: "nexter",
  timeline: "5 months",
  role: "UX/UI Designer & Frontend Developer",
  company: "HubSpot",
  award: "Awwwards - Honorable Mention",
  awardUrl: "https://www.awwwards.com/",
  links: [
    {
      name: "Visit Website",
      url: "https://nexter-realestate.netlify.app",
      type: "website"
    },
    {
      name: "GitHub",
      url: "https://github.com/username/nexter-project",
      type: "github"
    }
  ],
  contentFile: "/content/projects/nexter.mdx"
};

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  mionext,
  visionmax,
  nexter,
};