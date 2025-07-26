import { Metadata } from "next";
import PageFooter from "@/components/layout/PageFooter";
import CTASection from "@/components/home/CTASection";
import Timeline from "@/components/ui/Timeline";

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
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-16">
              Ben Ko is a Software Designer at Google with 3+ years of experience in UX design, inner of Red Dot Award 2024.
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

          {/* Experience Section */}
          <section className="py-12">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Experience</h2>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <Timeline 
                items={[
                  {
                    title: "Google",
                    subtitle: "UX Designer",
                    date: "January 2022 - Present",
                    logo: <span className="text-sm text-gray-500">IMG</span>
                  },
                  {
                    title: "Adobe",
                    subtitle: "Web Designer",
                    date: "June 2019 - December 2021",
                    logo: <span className="text-sm text-gray-500">IMG</span>
                  },
                  {
                    title: "HubSpot",
                    subtitle: "SEO Specialist",
                    date: "July 2017 - May 2019",
                    logo: <span className="text-sm text-gray-500">IMG</span>
                  },
                  {
                    title: "Spotify",
                    subtitle: "UI/UX Designer Intern",
                    date: "January 2017 - June 2017",
                    logo: <span className="text-sm text-gray-500">IMG</span>
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
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="grid grid-cols-3 gap-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"/>
                  </svg>
                </div>
                <span className="text-xl font-medium text-gray-900">HTML5</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zm7.704 0c2.476 0 4.49 2.015 4.49 4.491s-2.014 4.49-4.49 4.49-4.49-2.015-4.49-4.491 2.014-4.49 4.49-4.49zm0 7.51c1.665 0 3.019-1.354 3.019-3.019s-1.355-3.019-3.019-3.019-3.019 1.355-3.019 3.019 1.354 3.019 3.019 3.019z"/>
                  </svg>
                </div>
                <span className="text-xl font-medium text-gray-900">Figma</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                  </svg>
                </div>
                <span className="text-xl font-medium text-gray-900">Framer</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <span className="text-xl font-medium text-gray-900">Hotjar</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-700">N</span>
                </div>
                <span className="text-xl font-medium text-gray-900">Notion</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
                  <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"/>
                  </svg>
                </div>
                <span className="text-xl font-medium text-gray-900">CSS3</span>
              </div>
            </div>
            </div>
          </section>

          <CTASection />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}