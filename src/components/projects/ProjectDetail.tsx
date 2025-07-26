import { ArrowLeft, Award, Calendar, User, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ProjectDetail as ProjectDetailType, PROJECT_DETAILS } from "@/lib/projects";
import PageFooter from "@/components/layout/PageFooter";
import CTASection from "@/components/home/CTASection";
import ProjectCard from "@/components/projects/ProjectCard";
import { AnimatedButton } from "@/components/ui/animated-button";

interface ProjectDetailProps {
  project: ProjectDetailType;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  // Get other projects for the "Other Projects" section
  const otherProjects = Object.values(PROJECT_DETAILS)
    .filter(p => p.id !== project.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-6">
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
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Project Details Card */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Timeline</h3>
                    <p className="text-gray-600">{project.timeline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <User className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Role</h3>
                    <p className="text-gray-600">{project.role}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Category</h3>
                    <p className="text-gray-600">{project.category}</p>
                  </div>
                </div>

                {project.award && (
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-gray-600 mt-1" />
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
                {/* My Approach */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    My Approach
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {project.overview.myApproach}
                  </p>
                </div>

                {/* Vision and Innovation */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Vision and Innovation
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {project.overview.visionAndInnovation}
                  </p>
                </div>

                {/* Identifying Unique Challenges */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Identifying Unique Challenges
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {project.overview.identifyingChallenges}
                  </p>
                </div>

                {/* Resolving Complex Problems */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Resolving Complex Problems
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {project.overview.resolvingComplexProblems}
                  </p>
                </div>

                {/* User-Centric Design */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    User-Centric Design
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {project.overview.userCentricDesign}
                  </p>
                </div>

                {/* Detailed Pages and Features */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Detailed Pages and Features
                  </h2>
                  <ul className="space-y-3">
                    {project.overview.detailedPagesAndFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accessibility and Optimization */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Accessibility and Optimization
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {project.overview.accessibilityAndOptimization}
                  </p>
                </div>

                {/* Conclusion */}
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Conclusion
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {project.overview.conclusion}
                  </p>
                </div>
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