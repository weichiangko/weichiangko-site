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
  completionDate?: string;
}

interface ProjectCardProps {
  project: Project;
  href?: string; // Optional custom href for projects without slug
}

// Removed hasDetailedInfo function as we now show info independently

export default function ProjectCard({ project, href }: ProjectCardProps) {
  // Determine the link URL
  const linkUrl = href || (project.slug ? `/projects/${project.slug}` : `/projects/${project.id}`);
  
  // No longer need showDetails logic

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
        
        {/* Always show completion date if available */}
        {project.completionDate && (
          <div className="text-xs text-gray-500">
            <span>{project.completionDate}</span>
          </div>
        )}
      </div>
    </Link>
  );
}