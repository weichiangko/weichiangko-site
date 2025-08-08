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
    category: Array.isArray(project.category) ? project.category :
              project.category === "Web Development" ? "Development" : project.category,
    image: project.image,
    cardImage: project.cardImage,
    completionDate: project.completionDate
  }))
];


export default function ProjectsPage() {
  const categories = ["All", "Design", "Development", "Experience"];
  const [activeCategory, setActiveCategory] = useState("All");
  
  const getFilteredProjects = (category: string) => {
    if (category === "All") {
      return projects;
    }
    
    const targetCategory = category === "Design" ? "UX/UI Design" : category;
    
    return projects.filter(project => {
      if (Array.isArray(project.category)) {
        return project.category.includes(targetCategory);
      }
      return project.category === targetCategory;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-8 py-12">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 my-8">Projects</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
              My projects showcase innovative solutions across diverse industries, from AI-powered fleet management systems to 
              award-winning connected vehicle applications. Each project demonstrates my expertise in transforming complex 
              technical challenges into intuitive, user-centered experiences that drive real business impact.
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
          {/* TODO: EdgeAI System & i4.0bs temp external links. Remove href when internal pages are ready */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {getFilteredProjects(activeCategory).map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                href={
                  project.id === 'edgeAISystem' ? 'https://www.behance.net/gallery/110448371/Smart-AI-Camera-System' :
                  project.id === 'i40bs' ? 'https://www.behance.net/gallery/100527681/Smart-Module-System' :
                  undefined
                }
              />
            ))}
          </div>

          <CTASection />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}