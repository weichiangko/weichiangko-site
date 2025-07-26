import Image from "next/image";
import Link from "next/link";

interface BaseProject {
  id: string;
  title: string;
  category: string;
  image: string;
}

type SimpleProject = BaseProject;

interface DetailedProject extends BaseProject {
  // For Other Projects section
  slug: string;
  description: string;
  completionDate: string;
}

interface ProjectCardProps {
  project: SimpleProject | DetailedProject;
  variant?: "simple" | "detailed";
  href?: string; // Optional custom href for simple projects
}

function isDetailedProject(project: SimpleProject | DetailedProject): project is DetailedProject {
  return 'slug' in project && 'description' in project && 'completionDate' in project;
}

export default function ProjectCard({ project, variant = "simple", href }: ProjectCardProps) {
  // Determine the link URL
  const linkUrl = href || (isDetailedProject(project) ? `/projects/${project.slug}` : `/projects/${project.id}`);
  
  // Determine if we should show additional content
  const showDetails = variant === "detailed" && isDetailedProject(project);

  return (
    <Link 
      href={linkUrl}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={675}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
          {project.title}
        </h3>
        
        {showDetails && isDetailedProject(project) && (
          <>
            <p className="text-gray-600 text-sm mb-4">
              {project.description}
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="px-2 py-1 bg-gray-100 rounded-full">
                {project.category}
              </span>
              <span>{project.completionDate}</span>
            </div>
          </>
        )}
        
        {!showDetails && (
          <p className="text-sm font-medium text-gray-500">
            {project.category}
          </p>
        )}
      </div>
    </Link>
  );
}