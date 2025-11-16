export interface LabDetail {
  id: string;
  title: string;
  category: string | string[];
  completionDate?: string;
  image: string;
  cardImage: string;
  slug: string;
  video?: string;         // Optional: hover preview video
  externalUrl?: string;   // Optional: external link (e.g., Behance, demo site)
}

// Placeholder labs - replace with actual lab projects
export const lab1: LabDetail = {
  id: "lab-1",
  title: "Immersive Speed Camera Alert Experiment",
  category: "Experimental",
  completionDate: "2025",
  image: "/images/labs/lab-1-hero.jpg",
  cardImage: "/images/labs/lab-1-card.jpg",
  slug: "lab-1",
  video: "/videos/labs/lab-1-preview.mp4",
  externalUrl: "https://speedguard-3d-demo.vercel.app/",
};

export const LAB_DETAILS: Record<string, LabDetail> = {
  "lab-1": lab1,
};

