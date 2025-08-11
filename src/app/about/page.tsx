import { Metadata } from "next";
import Image from "next/image";
import PageFooter from "@/components/layout/PageFooter";
import CTASection from "@/components/home/CTASection";
import Timeline from "@/components/ui/Timeline";
import TechStack from "@/components/ui/TechStack";

export const metadata: Metadata = {
  title: "About - Ben Ko",
  description: "Learn about Ben Ko's background, education, experience, and certifications in UX/UI design and web development.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-8 py-12">
          {/* Header */}
          <div className="my-8">
            <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
          </div>

          {/* Main About Section - Home Section Style */}
          <section className="pb-16">
            {/* Description - Full Width */}
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-6">
              Currently working as a Senior UI Engineer at <a href="https://www.mitac.com/" target="_blank" rel="noopener noreferrer" className="underline text-primary hover:text-primary/80 transition-colors">MiTAC</a> and an award-winning designer, I specialize in <strong>UX/UI design</strong> and <strong>frontend development</strong>, turning concepts into market-ready products through effective cross-departmental collaboration.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-16">
              With over <strong>10 years</strong> of hands-on experience across healthcare, machine-tool, consumer-electronics, automotive-electronics and AI-startup sectors, I’m adept at accurately assessing challenges, crafting practical solutions and ensuring seamless handoffs between design and development to drive continuous innovation and optimization.
            </p>
            
            {/* Stats Flex - Horizontal Layout */}
            <div className="flex flex-col md:flex-row md:gap-16 gap-8">
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">10+</h3>
                <p className="text-gray-600 text-lg">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">15+</h3>
                <p className="text-gray-600 text-lg">Projects Delivered</p>
              </div>
            </div>
          </section>
          
          {/* Experience Section */}
          <section className="py-12">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <Timeline 
                items={[
                  {
                    title: "MiTAC International Corp.",
                    subtitle: "Senior UI Engineer",
                    date: "March 2021 - Present",
                    logo: <Image src="/images/logos/mitac.png" alt="MiTAC" width={32} height={32} className="object-contain" />
                  },
                  {
                    title: "AndroVideo Inc.",
                    subtitle: "Senior Web Designer",
                    date: "August 2019 - March 2021",
                    logo: <Image src="/images/logos/androvideo.png" alt="AndroVideo" width={32} height={32} className="object-contain" />
                  },
                  {
                    title: "HTC Corporation",
                    subtitle: "Interaction Designer",
                    date: "May 2019 - August 2019",
                    logo: <Image src="/images/logos/htc.png" alt="HTC" width={32} height={32} className="object-contain" />
                  },
                  {
                    title: "HIWIN Technologies Corp.",
                    subtitle: "UI/UX Designer",
                    date: "July 2017 - February 2019",
                    logo: <Image src="/images/logos/hiwin.png" alt="HIWIN" width={32} height={32} className="object-contain" />
                  }
                ]}
              />
            </div>
          </section>

          {/* Education Section */}
          <section className="py-12">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Education</h2>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <Timeline 
                items={[
                  {
                    title: "Chang Gung University",
                    subtitle: "Department of Industrial Design",
                    date: "2012 – 2014"
                  },
                  {
                    title: "Chung Shan Medical University",
                    subtitle: "Department of Optometry",
                    date: "2008 – 2012"
                  }
                ]}
              />
            </div>
          </section>

          {/* Achievements Section */}
          <section className="py-12">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Achievements</h2>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <Timeline 
                items={[
                  {
                    title: "2024 IF Design Award",
                    subtitle: "MioNext App and MiSentry Series",
                    date: "2024",
                    logo: <Image src="/images/logos/if-design-award.png" alt="IF Design Award" width={32} height={32} className="object-contain" />
                  },
                  {
                    title: "2023 IF Design Award",
                    subtitle: "E-mirror MiVue R850 series",
                    date: "2023",
                    logo: <Image src="/images/logos/if-design-award.png" alt="IF Design Award" width={32} height={32} className="object-contain" />
                  }
                ]}
              />
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="py-12">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Tech Stack</h2>
            </div>
            
            <TechStack 
              categories={[
                {
                  title: "Frontend",
                  items: [
                    { name: "React.js", iconSlug: "React" },
                    { name: "React Native", iconSlug: "React" },
                    { name: "JavaScript", iconSlug: "Javascript" },
                    { name: "Next.js", iconSlug: "Nextdotjs" },
                    { name: "Vue.js", iconSlug: "Vuedotjs" },
                    { name: "Bootstrap", iconSlug: "Bootstrap" },
                    { name: "Tailwind CSS", iconSlug: "Tailwindcss" },
                    { name: "Electron", iconSlug: "Electron" }
                  ]
                },
                {
                  title: "Tools",
                  items: [
                    { name: "Visual Studio Code", customIconKey: "vscode", iconSize: 24 },
                    { name: "Cursor", customIconKey: "cursor", iconSize: 24 },
                    { name: "Claude Code", customIconKey: "claudeCode", iconSize: 24 },
                    { name: "Git", iconSlug: "Git" },
                    { name: "Figma", customIconKey: "figma", iconSize: 24 }
                  ]
                },
                {
                  title: "AI Integration",
                  items: [
                    { name: "Gemini API", customIconKey: "gemini", iconSize: 24 },
                    { name: "Claude API", customIconKey: "claude", iconSize: 24 }
                  ]
                }
              ]}
            />
          </section>

          <CTASection />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}