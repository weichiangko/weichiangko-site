import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  cardImage?: string;
  slug?: string;
  description?: string;
  completionDate?: string;
}

interface ProjectCardProps {
  project: Project;
  href?: string; // Optional custom href for projects without slug
}

function hasDetailedInfo(project: Project): boolean {
  return !!(project.description && project.completionDate);
}

export default function ProjectCard({ project, href }: ProjectCardProps) {
  // Determine the link URL
  const linkUrl = href || (project.slug ? `/projects/${project.slug}` : `/projects/${project.id}`);
  
  // Determine if we should show additional content
  const showDetails = hasDetailedInfo(project);

  return (
    <Link 
      href={linkUrl}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
        <Image
          src={project.cardImage || project.image}
          alt={project.title}
          width={1200}
          height={900}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
          {project.title}
        </h3>
        
        {/* Always show category as badge */}
        <div className="mb-4">
          <Badge variant="secondary" className="text-xs">
            {project.category}
          </Badge>
        </div>
        
        {showDetails && (
          <>
            <p className="text-gray-600 text-sm mb-4">
              {project.description}
            </p>
            <div className="text-xs text-gray-500">
              <span>{project.completionDate}</span>
            </div>
          </>
        )}
      </div>
    </Link>
  );
}