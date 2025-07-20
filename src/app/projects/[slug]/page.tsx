import { notFound } from "next/navigation";
import { PROJECT_DETAILS } from "@/lib/projects";
import ProjectDetail from "@/components/projects/ProjectDetail";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(PROJECT_DETAILS).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Ben Ko`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECT_DETAILS[slug];

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}