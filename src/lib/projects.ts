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
  omnifood: {
    id: "omnifood",
    title: "Omnifood: Revolutionizing Personalized Meal Delivery",
    category: "Web Development",
    client: "Omnifood",
    completionDate: "2024",
    description: "A comprehensive meal delivery platform with AI-powered personalization",
    image: "/images/projects/omnifood-hero.jpg",
    slug: "omnifood",
    timeline: "3 months",
    role: "Full Stack Developer & UX Designer",
    award: "CSS Design Awards - Site of the Day",
    overview: {
      myApproach: "In developing Omnifood, I adopted a user-centered design methodology, ensuring that every aspect of the platform caters to the needs and preferences of our diverse user base. By integrating advanced AI technology, we provide personalized meal plans that align with individual dietary requirements and taste preferences.",
      visionAndInnovation: "Our vision is to disrupt the meal delivery industry by offering a smart, AI-driven subscription service that delivers healthy, tailored meals daily. Our vision is to eliminate the hassle of meal planning and cooking, allowing users to enjoy nutritious meals effortlessly.",
      identifyingChallenges: "We recognized that many individuals struggle with maintaining a healthy diet due to time constraints, lack of culinary skills, or limited access to diverse recipes. Additionally, accommodating various dietary restrictions and preferences presents a significant challenge in meal planning.",
      resolvingComplexProblems: "To address these challenges, Omnifood utilizes AI to generate personalized weekly meal plans, ensuring nutritional balance and adherence to user preferences. Users can approve and modify their meal plans, swap ingredients, or add their own recipes, providing flexibility and control over their diet.",
      userCentricDesign: "Our platform is designed with simplicity and accessibility in mind. The intuitive interface allows users to easily navigate through meal options, customize their plans, and manage their orders. By focusing on user experience, we ensure that healthy eating becomes a seamless part of our users' daily lives.",
      detailedPagesAndFeatures: [
        "Hero Section: A compelling introduction highlighting the value and convenience of our service.",
        "Meal Options: A diverse selection of over 5,000 recipes catering to various diets, including vegetarian, vegan, pescatarian, gluten-free, and more.",
        "Testimonials: Real customer feedback showcasing the positive impact of Omnifood on their lives.",
        "Pricing: Transparent and flexible subscription plans that cater to different needs and budgets."
      ],
      accessibilityAndOptimization: "Omnifood is designed to provide a seamless experience across all devices, from desktops to smartphones. We have implemented best practices in web development to ensure fast loading times, intuitive navigation, and compliance with accessibility standards, making our platform usable for individuals with varying abilities.",
      conclusion: "Omnifood represents a significant advancement in the meal delivery industry, combining AI technology with user-centric design to offer a personalized, convenient, and healthy dining experience. By addressing common challenges in meal planning and delivery, we empower users to maintain a nutritious diet effortlessly."
    },
    images: [
      "/images/projects/omnifood-1.jpg",
      "/images/projects/omnifood-2.jpg",
      "/images/projects/omnifood-3.jpg",
    ]
  },
  natours: {
    id: "natours",
    title: "Natours: Elevating Adventure Travel Through Innovative Web Solutions",
    category: "UX/UI Design",
    client: "Natours",
    completionDate: "2024",
    description: "Adventure travel booking platform with immersive user experience",
    image: "/images/projects/natours-hero.jpg",
    slug: "natours",
    timeline: "4 months",
    role: "UX/UI Designer",
    overview: {
      myApproach: "For Natours, I focused on creating an immersive digital experience that captures the excitement and adventure of outdoor exploration. The design emphasizes visual storytelling through high-quality imagery and interactive elements.",
      visionAndInnovation: "To create a platform that inspires wanderlust and makes adventure travel booking as exciting as the journey itself.",
      identifyingChallenges: "Travel booking can be overwhelming with too many options and complex interfaces that don't convey the excitement of adventure travel.",
      resolvingComplexProblems: "Simplified booking flow with immersive visuals and clear information hierarchy to help users envision their adventure.",
      userCentricDesign: "Intuitive navigation with stunning visuals that tell a story and guide users through their journey planning process.",
      detailedPagesAndFeatures: [
        "Hero Section with immersive background imagery",
        "Tour discovery with filtering and search capabilities",
        "Detailed tour pages with galleries and itineraries",
        "Streamlined booking process"
      ],
      accessibilityAndOptimization: "Responsive design optimized for all devices with fast loading times and accessible navigation.",
      conclusion: "Natours successfully combines stunning visual design with functional booking capabilities to create an inspiring travel platform."
    },
    images: [
      "/images/projects/natours-1.jpg",
      "/images/projects/natours-2.jpg",
    ]
  },
  nexter: {
    id: "nexter",
    title: "Nexter: Redefining Real Estate with Cutting-Edge Web Design",
    category: "UX/UI Design",
    client: "Nexter",
    completionDate: "2024",
    description: "Modern real estate platform with advanced property search",
    image: "/images/projects/nexter-hero.jpg",
    slug: "nexter",
    timeline: "5 months",
    role: "UX/UI Designer & Frontend Developer",
    award: "Awwwards - Honorable Mention",
    overview: {
      myApproach: "Developed a sophisticated real estate platform that combines modern design with powerful search functionality to help users find their perfect home.",
      visionAndInnovation: "To revolutionize how people search for and discover real estate properties through intuitive design and advanced filtering.",
      identifyingChallenges: "Traditional real estate websites are often cluttered and difficult to navigate, making property search frustrating.",
      resolvingComplexProblems: "Clean, grid-based layout with powerful search filters and high-quality property imagery.",
      userCentricDesign: "Focus on visual hierarchy and easy-to-use search tools that help users quickly find relevant properties.",
      detailedPagesAndFeatures: [
        "Advanced property search and filtering",
        "Interactive property galleries",
        "Agent profiles and contact systems",
        "Neighborhood information and amenities"
      ],
      accessibilityAndOptimization: "Mobile-first responsive design with optimized performance for property image loading.",
      conclusion: "Nexter provides a premium real estate browsing experience that makes property discovery enjoyable and efficient."
    },
    images: [
      "/images/projects/nexter-1.jpg",
      "/images/projects/nexter-2.jpg",
    ]
  },
};