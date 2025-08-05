import { ArrowLeft, Award, Calendar, User, Tag, Building2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetail as ProjectDetailType, PROJECT_DETAILS } from "@/lib/projects";
import PageFooter from "@/components/layout/PageFooter";
import CTASection from "@/components/home/CTASection";
import ProjectCard from "@/components/projects/ProjectCard";
import { AnimatedButton } from "@/components/ui/animated-button";
import { Badge } from "@/components/ui/badge";
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
  // Headings - 標題層次
  h1: ({ children }: { children: React.ReactNode }) => (
    <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-10">
      {children}
    </h1>
  ),
  h2: ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
      {children}
    </h2>
  ),
  h3: ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-10">
      {children}
    </h3>
  ),
  h4: ({ children }: { children: React.ReactNode }) => (
    <h4 className="text-lg font-medium text-gray-900 mb-2 mt-10">
      {children}
    </h4>
  ),
  h5: ({ children }: { children: React.ReactNode }) => (
    <h5 className="text-base font-medium text-gray-900 mb-2 mt-10">
      {children}
    </h5>
  ),
  h6: ({ children }: { children: React.ReactNode }) => (
    <h6 className="text-sm font-medium text-gray-900 mb-2 mt-10">
      {children}
    </h6>
  ),
  // Paragraphs and text
  p: ({ children }: { children: React.ReactNode }) => (
    <p className="text-gray-700 leading-relaxed mb-4">
      {children}
    </p>
  ),
  // Lists
  ul: ({ children }: { children: React.ReactNode }) => (
    <ul className="space-y-3 mb-4 list-disc list-outside pl-6">
      {children}
    </ul>
  ),
  ol: ({ children }: { children: React.ReactNode }) => (
    <ol className="space-y-3 mb-4 list-decimal list-outside pl-6">
      {children}
    </ol>
  ),
  li: ({ children }: { children: React.ReactNode }) => (
    <li className="text-gray-700 leading-relaxed">
      {children}
    </li>
  ),
  // Emphasis and strong
  em: ({ children }: { children: React.ReactNode }) => (
    <em className="italic text-gray-700">{children}</em>
  ),
  strong: ({ children }: { children: React.ReactNode }) => (
    <strong className="font-semibold text-gray-900">{children}</strong>
  ),
  // Code
  code: ({ children }: { children: React.ReactNode }) => (
    <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }: { children: React.ReactNode }) => (
    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
      <code className="text-sm font-mono text-gray-800">{children}</code>
    </pre>
  ),
  // Blockquotes
  blockquote: ({ children }: { children: React.ReactNode }) => (
    <blockquote className="border-l-4 border-gray-300 pl-4 py-2 mb-4 italic text-gray-600 bg-gray-50 rounded-r">
      {children}
    </blockquote>
  ),
  // Horizontal rule
  hr: () => <hr className="border-gray-200 my-8" />,
  // Links
  a: ({ children, href }: { children: React.ReactNode; href?: string }) => (
    <a 
      href={href} 
      className="text-blue-600 hover:text-blue-800 underline transition-colors"
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  ),
  // Tables
  table: ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border border-gray-200 rounded-lg">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }: { children: React.ReactNode }) => (
    <thead className="bg-gray-50">
      {children}
    </thead>
  ),
  tbody: ({ children }: { children: React.ReactNode }) => (
    <tbody className="divide-y divide-gray-200">
      {children}
    </tbody>
  ),
  tr: ({ children }: { children: React.ReactNode }) => (
    <tr>{children}</tr>
  ),
  th: ({ children }: { children: React.ReactNode }) => (
    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
      {children}
    </th>
  ),
  td: ({ children }: { children: React.ReactNode }) => (
    <td className="px-4 py-3 text-sm text-gray-700">
      {children}
    </td>
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
            {/* Navigation Header */}
            <div className="flex items-center justify-between mt-6 mb-8">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              
              <Badge variant="outline" className="gap-1.5 text-sm">
                <Tag className="w-3 h-3" />
                {project.category}
              </Badge>
            </div>

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