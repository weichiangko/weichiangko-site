import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPreview() {
  const featuredProjects = [
    {
      id: "omnifood",
      title: "Omnifood: Revolutionizing Personalized Meal Delivery",
      category: "Web Development",
      image: "/images/projects/omnifood.jpg",
      href: "/projects/omnifood",
    },
    {
      id: "natours",
      title: "Natours: Elevating Adventure Travel Through Innovative Web Solutions",
      category: "UX/UI Design",
      image: "/images/projects/natours.jpg", 
      href: "/projects/natours",
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
            variant="simple"
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