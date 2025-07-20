import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageFooter from "@/components/layout/PageFooter";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Projects - Ben Ko",
  description: "Explore Ben Ko's portfolio of UX/UI design and web development projects showcasing innovative solutions.",
};

const projects = [
  {
    id: "omnifood",
    title: "Omnifood: Revolutionizing Personalized Meal Delivery",
    category: "Web Development",
    image: "/images/projects/omnifood.jpg",
    description: "A comprehensive meal delivery platform with AI-powered personalization"
  },
  {
    id: "natours", 
    title: "Elevating Adventure Travel Through Innovative Web Solutions",
    category: "UX/UI Design",
    image: "/images/projects/natours.jpg",
    description: "Adventure travel booking platform with immersive user experience"
  },
  {
    id: "nexter",
    title: "Nexter: Redefining Real Estate with Cutting-Edge Web Design", 
    category: "UX/UI Design",
    image: "/images/projects/nexter.jpg",
    description: "Modern real estate platform with advanced search and visualization"
  },
  {
    id: "travel-planning",
    title: "Simplifying Travel Planning with Smart, User-Focused Solutions",
    category: "Web Development", 
    image: "/images/projects/travel-planning.jpg",
    description: "Smart travel planning application with collaborative features"
  }
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Projects</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
              My projects reflect my commitment to solving complex challenges through design. Whether it&apos;s building a travel 
              platform or enhancing a real estate website, each project is a blend of innovation, strategy, and user-first design 
              principles.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {projects.map((project) => (
              <Link 
                key={project.id} 
                href={`/projects/${project.id}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-gray-500">
                    {project.category}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <CTASection />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}