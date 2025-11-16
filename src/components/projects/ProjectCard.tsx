"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  category: string | string[]; // Support both single and multiple categories
  image: string;
  cardImage?: string;
  slug?: string;
  completionDate?: string;
  video?: string; // Optional: hover preview video (保留但不使用)
}

interface ProjectCardProps {
  project: Project;
  href?: string; // Optional custom href for projects without slug
}

// 統一的媒體容器 - 所有卡片都使用相同的縮放動畫
function MediaContainer({ project }: { project: Project }) {
  return (
    <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
      <Image
        src={project.cardImage || project.image}
        alt={project.title}
        width={1200}
        height={900}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
    </div>
  );
}

export default function ProjectCard({ project, href }: ProjectCardProps) {
  // Determine the link URL
  const linkUrl = href || (project.slug ? `/projects/${project.slug}` : `/projects/${project.id}`);

  // Check if it's an external link
  const isExternal = href && (href.startsWith('http') || href.startsWith('https'));

  // External link component
  if (isExternal) {
    return (
      <a 
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      >
        <MediaContainer project={project} />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
            {project.title}
          </h3>
          
          {/* Show category badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            {Array.isArray(project.category) ? (
              project.category.map((cat, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {cat}
                </Badge>
              ))
            ) : (
              <Badge variant="secondary" className="text-xs">
                {project.category}
              </Badge>
            )}
          </div>
          
          {/* Always show completion date if available */}
          {project.completionDate && (
            <div className="text-xs text-gray-500">
              <span>{project.completionDate}</span>
            </div>
          )}
        </div>
      </a>
    );
  }

  // Internal link component
  return (
    <Link 
      href={linkUrl}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      <MediaContainer project={project} />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
          {project.title}
        </h3>
        
                  {/* Show category badges */}
          <div className="mb-4 flex flex-wrap gap-2">
            {Array.isArray(project.category) ? (
              project.category.map((cat, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {cat}
                </Badge>
              ))
            ) : (
              <Badge variant="secondary" className="text-xs">
                {project.category}
              </Badge>
            )}
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