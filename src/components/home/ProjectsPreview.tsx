import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECT_DETAILS } from "@/lib/projects";

export default function ProjectsPreview() {
  const featuredProjects = [
    {
      id: PROJECT_DETAILS.mionext.id,
      title: PROJECT_DETAILS.mionext.title,
      category: PROJECT_DETAILS.mionext.category,
      image: PROJECT_DETAILS.mionext.image,
      cardImage: PROJECT_DETAILS.mionext.cardImage,
      href: `/projects/${PROJECT_DETAILS.mionext.slug}`,
      completionDate: PROJECT_DETAILS.mionext.completionDate,
    },
    {
      id: PROJECT_DETAILS.visionmax.id,
      title: PROJECT_DETAILS.visionmax.title,
      category: PROJECT_DETAILS.visionmax.category,
      image: PROJECT_DETAILS.visionmax.image,
      cardImage: PROJECT_DETAILS.visionmax.cardImage, 
      href: `/projects/${PROJECT_DETAILS.visionmax.slug}`,
      completionDate: PROJECT_DETAILS.visionmax.completionDate,
    },
  ];

  return (
    <section className="py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Selected Projects</h2>
      </div>
      
      {/* Projects Grid - Using ProjectCard component */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {featuredProjects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project}
            href={project.href}
          />
        ))}
      </div>

      {/* View All Projects Button */}
      <div className="text-right">
        <AnimatedButton>
          <Link href="/projects">
            View All Projects
          </Link>
        </AnimatedButton>
      </div>
    </section>
  );
}