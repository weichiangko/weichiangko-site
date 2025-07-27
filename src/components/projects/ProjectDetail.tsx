import { ArrowLeft, Award, Calendar, User, Tag, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetail as ProjectDetailType, PROJECT_DETAILS } from "@/lib/projects";
import PageFooter from "@/components/layout/PageFooter";
import CTASection from "@/components/home/CTASection";
import ProjectCard from "@/components/projects/ProjectCard";
import { AnimatedButton } from "@/components/ui/animated-button";
import { readFileSync } from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import ProjectImage from '@/components/projects/ProjectImage';

interface ProjectDetailProps {
  project: ProjectDetailType;
}

// MDX components for styling
const components = {
  ProjectImage,
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
      {children}
    </h2>
  ),
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-gray-700 leading-relaxed">
      {children}
    </p>
  ),
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="space-y-3">
      {children}
    </ul>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="flex items-start gap-3">
      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
      <span className="text-gray-700">{children}</span>
    </li>
  ),
};

async function getMDXContent(contentFile: string) {
  try {
    const fullPath = path.join(process.cwd(), 'src', contentFile);
    const source = readFileSync(fullPath, 'utf8');
    return source;
  } catch (error) {
    console.error('Error reading MDX file:', error);
    return '';
  }
}

export default async function ProjectDetail({ project }: ProjectDetailProps) {
  // Get other projects for the "Other Projects" section
  const otherProjects = Object.values(PROJECT_DETAILS)
    .filter(p => p.id !== project.id)
    .slice(0, 2);

  // Get MDX content
  const mdxSource = await getMDXContent(project.contentFile);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-6">
          {/* Hero Section */}
          <section className="py-8">
            {/* Back to Projects */}
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            {/* Project Title */}
            <h1 className="text-5xl font-bold text-gray-900 mb-12">
              {project.title}
            </h1>

            {/* Hero Image */}
            <div className="rounded-xl overflow-hidden mb-8 bg-white shadow-sm">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={675}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Project Details Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-6">
                <div className="flex items-start gap-3 flex-1 basis-full md:basis-1/2 lg:basis-1/3 min-w-0">
                  <Calendar className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Timeline</h3>
                    <p className="text-gray-600">{project.timeline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 flex-1 basis-full md:basis-1/2 lg:basis-1/3 min-w-0">
                  <Building2 className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Company</h3>
                    <p className="text-gray-600">{project.company}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 flex-1 basis-full md:basis-1/2 lg:basis-1/3 min-w-0">
                  <User className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Role</h3>
                    <p className="text-gray-600">{project.role}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 flex-1 basis-full md:basis-1/2 lg:basis-1/3 min-w-0">
                  <Tag className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Category</h3>
                    <p className="text-gray-600">{project.category}</p>
                  </div>
                </div>

                {project.award && (
                  <div className="flex items-start gap-3 flex-1 basis-full md:basis-1/2 lg:basis-1/3 min-w-0">
                    <Award className="w-5 h-5 text-gray-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Award</h3>
                      <p className="text-gray-600">{project.award}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Project Content */}
          <section className="py-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="space-y-12">
                <MDXRemote source={mdxSource} components={components} />
              </div>
            </div>
          </section>

          {/* Other Projects Section */}
          <section className="py-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Other Projects</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {otherProjects.map((otherProject) => (
                <ProjectCard
                  key={otherProject.id}
                  project={otherProject}
                  variant="simple"
                />
              ))}
            </div>

            <div className="text-right">
              <AnimatedButton>
                <Link href="/projects">
                  View All Projects
                </Link>
              </AnimatedButton>
            </div>
          </section>

          <CTASection />
        </div>
      </div>

      <PageFooter />
    </div>
  );
}