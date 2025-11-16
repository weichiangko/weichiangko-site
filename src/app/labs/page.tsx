import PageFooter from "@/components/layout/PageFooter";
import CTASection from "@/components/home/CTASection";
import ProjectCard from "@/components/projects/ProjectCard";
import { LAB_DETAILS } from "@/lib/labs";

const labs = [
  // Labs from LAB_DETAILS
  ...Object.values(LAB_DETAILS).map(lab => ({
    id: lab.id,
    title: lab.title,
    category: lab.category,
    image: lab.image,
    cardImage: lab.cardImage,
    completionDate: lab.completionDate,
    slug: lab.slug,
    video: lab.video,
    externalUrl: lab.externalUrl,
  }))
];

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-8 py-12">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-bold text-gray-900 my-8">Labs</h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
              This is where I experiment with new technologies and explore innovative ideas. 
              These side projects represent my ongoing learning journey and creative experiments 
              with cutting-edge tools and frameworks.
            </p>
          </div>

          {/* Labs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {labs.map((lab) => (
              <ProjectCard 
                key={lab.id} 
                project={lab}
                href={lab.externalUrl || undefined}
              />
            ))}
          </div>

          <CTASection />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

