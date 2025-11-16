import PageFooter from "@/components/layout/PageFooter";
import CTASection from "@/components/home/CTASection";
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

          {/* Projects Grid */}
          {/* TODO: EdgeAI System & i4.0bs temp external links. Remove href when internal pages are ready */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project) => (
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