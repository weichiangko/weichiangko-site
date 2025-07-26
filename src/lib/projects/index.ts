import { omnifood } from "./omnifood";
import { natours } from "./natours";
import { nexter } from "./nexter";

export interface ProjectDetail {
  id: string;
  title: string;
  category: string;
  client: string;
  completionDate: string;
  description: string;
  image: string;
  slug: string;
  timeline: string;
  role: string;
  award?: string;
  overview: {
    myApproach: string;
    visionAndInnovation: string;
    identifyingChallenges: string;
    resolvingComplexProblems: string;
    userCentricDesign: string;
    detailedPagesAndFeatures: string[];
    accessibilityAndOptimization: string;
    conclusion: string;
  };
  images: string[];
}

export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  omnifood,
  natours,
  nexter,
};