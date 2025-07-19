import Image from "next/image";
import Link from "next/link";

export default function ProjectsPreview() {
  const featuredProjects = [
    {
      id: "omnifood",
      title: "Omnifood: Revolutionizing Personalized Meal Delivery",
      image: "/images/projects/omnifood.jpg",
      href: "/projects/omnifood",
    },
    {
      id: "natours",
      title: "Natours: Elevating Adventure Travel Through Innovative Web Solutions",
      image: "/images/projects/natours.jpg", 
      href: "/projects/natours",
    },
  ];

  return (
    <section className="py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Selected Projects</h2>
      </div>
      
      {/* Projects Grid - EXACT SAME AS PROJECTS PAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {featuredProjects.map((project) => (
          <Link 
            key={project.id} 
            href={project.href}
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
            </div>
          </Link>
        ))}
      </div>

      {/* View All Projects Link */}
      <div className="text-right">
        <Link 
          href="/projects"
          className="text-gray-500 hover:text-gray-700 text-sm transition-colors"
        >
          View All Projects
        </Link>
      </div>
    </section>
  );
}