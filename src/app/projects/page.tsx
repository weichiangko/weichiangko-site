"use client";

import { useState } from "react";
import PageFooter from "@/components/layout/PageFooter";
import CTASection from "@/components/home/CTASection";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECT_DETAILS } from "@/lib/projects";

const projects = [
  // Detailed projects from PROJECT_DETAILS
  ...Object.values(PROJECT_DETAILS).map(project => ({
    id: project.id,
    title: project.title,
    category: project.category === "Web Development" ? "Development" : project.category,
    image: project.image,
    cardImage: project.cardImage,
    description: project.description
  })),
  // Additional showcase projects
  {
    id: "travel-planning",
    title: "Simplifying Travel Planning with Smart, User-Focused Solutions",
    category: "Development", 
    image: "/images/projects/travel-planning.jpg",
    description: "Smart travel planning application with collaborative features"
  },
  {
    id: "fintech-app",
    title: "FinTech Mobile App: Seamless Financial Management",
    category: "UX/UI Design",
    image: "/images/projects/fintech-app.jpg",
    description: "Intuitive mobile banking application with advanced security features"
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform: Next-Gen Shopping Experience",
    category: "Development",
    image: "/images/projects/ecommerce-platform.jpg",
    description: "Full-stack e-commerce solution with AI-powered recommendations"
  },
  {
    id: "google-ux",
    title: "Google Search Interface Enhancement",
    category: "Experience",
    image: "/images/projects/google-ux.jpg",
    description: "Led UX improvements for Google Search, focusing on accessibility and performance"
  },
  {
    id: "adobe-dashboard",
    title: "Adobe Creative Cloud Dashboard Redesign",
    category: "Experience",
    image: "/images/projects/adobe-dashboard.jpg",
    description: "Redesigned Creative Cloud dashboard for improved user workflow and efficiency"
  },
  {
    id: "hubspot-seo",
    title: "HubSpot SEO Tool Enhancement",
    category: "Experience",
    image: "/images/projects/hubspot-seo.jpg",
    description: "Enhanced SEO analysis tools with improved data visualization and insights"
  }
];


export default function ProjectsPage() {
  const categories = ["All", "Design", "Development", "Experience"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const getFilteredProjects = (category: string) => {
    if (category === "All") {
      return projects;
    }
    if (category === "Design") {
      return projects.filter(project => project.category === "UX/UI Design");
    }
    return projects.filter(project => project.category === category);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-8 py-12">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 my-8">Projects</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
              My projects reflect my commitment to solving complex challenges through design. Whether it&apos;s building a travel 
              platform or enhancing a real estate website, each project is a blend of innovation, strategy, and user-first design 
              principles.
            </p>
          </div>

          {/* Mobile Select (sm以下) */}
          <div className="block sm:hidden mb-12">
            <Select value={activeCategory} onValueChange={setActiveCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="選擇分類" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Desktop Tabs (sm以上) */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory} className="hidden sm:block mb-10">
            <TabsList className="inline-flex w-fit mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-sm font-medium px-6">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {getFilteredProjects(activeCategory).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <CTASection />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}