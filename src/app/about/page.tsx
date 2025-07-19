import { Metadata } from "next";
import PageFooter from "@/components/layout/PageFooter";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About - Ben Ko",
  description: "Learn about Ben Ko's background, education, experience, and certifications in UX/UI design and web development.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">About Me</h1>
          </div>

          {/* Main About Section - Home Section Style */}
          <section className="py-12">
            <div className="mb-16">
              {/* Description - Full Width */}
              <p className="text-gray-900 leading-relaxed text-lg mb-12">
                Ben Ko is a Software Designer at Google with 3+ years of experience in UX design, 
                winner of Red Dot Award 2024.
              </p>
              
              {/* Stats Flex - Horizontal Layout */}
              <div className="flex flex-col md:flex-row md:gap-16 gap-8">
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">3+ Years</h3>
                  <p className="text-gray-600 text-lg">of Experience</p>
                </div>
                <div>
                  <h3 className="text-4xl font-bold text-gray-900 mb-2">15+</h3>
                  <p className="text-gray-600 text-lg">Projects Delivered</p>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Information Section */}
          <section className="py-12">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Detailed Background</h2>
            </div>
            
            {/* Main Grid - 2x2 Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Academic Education */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Academic Education</h2>
              </div>
              <ul className="space-y-6">
                <li>
                  <p className="text-gray-900 font-medium mb-2">
                    University of the Arts London - London College of Communication - 
                    Master of Arts (MA) in User Experience Design
                  </p>
                  <p className="text-gray-500 text-sm">2020 - 2022</p>
                </li>
                <li>
                  <p className="text-gray-900 font-medium mb-2">
                    Parsons School of Design - Master of Science (MS) in Strategic 
                    Design an Management
                  </p>
                  <p className="text-gray-500 text-sm">2018 - 2020</p>
                </li>
                <li>
                  <p className="text-gray-900 font-medium mb-2">
                    Savannah College of Art and Design [SCAD] - Bachelor of Fine Arts 
                    (BFA) in Interactive Design and Game Development
                  </p>
                  <p className="text-gray-500 text-sm">2015 - 2017</p>
                </li>
              </ul>
            </div>

            {/* Non-Formal Education */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Non-Formal Education</h2>
              </div>
              <ul className="space-y-6">
                <li>
                  <p className="text-gray-900 font-medium mb-2">
                    Nielsen Norman Group [NNG] - UX Certification Program
                  </p>
                  <p className="text-gray-500 text-sm">March - June 2023</p>
                </li>
                <li>
                  <p className="text-gray-900 font-medium mb-2">
                    General Assembly - User Experience Design Immersive
                  </p>
                  <p className="text-gray-500 text-sm">October 2022 - January 2023</p>
                </li>
                <li>
                  <p className="text-gray-900 font-medium mb-2">
                    Interaction Design Foundation [IDF] - UX Design Specialization 
                    Course
                  </p>
                  <p className="text-gray-500 text-sm">January - June 2022</p>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
              </div>
              <ul className="space-y-6">
                <li>
                  <p className="text-gray-900 font-medium mb-2">Google - UX Designer</p>
                  <p className="text-gray-500 text-sm">January 2022 - Present</p>
                </li>
                <li>
                  <p className="text-gray-900 font-medium mb-2">Adobe - Web Designer</p>
                  <p className="text-gray-500 text-sm">June 2019 - December 2021</p>
                </li>
                <li>
                  <p className="text-gray-900 font-medium mb-2">HubSpot - SEO Specialist</p>
                  <p className="text-gray-500 text-sm">July 2017 - May 2019</p>
                </li>
                <li>
                  <p className="text-gray-900 font-medium mb-2">Spotify - UI/UX Designer Intern</p>
                  <p className="text-gray-500 text-sm">January 2017 - June 2017</p>
                </li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">Certifications</h2>
              </div>
              <ul className="space-y-6">
                <li>
                  <p className="text-gray-900 font-medium mb-2">
                    Certified Usability Analyst (CUA) - Issued by Human Factors 
                    International (HFI)
                  </p>
                  <p className="text-gray-500 text-sm">2023</p>
                </li>
                <li>
                  <p className="text-gray-900 font-medium mb-2">
                    NNG UX Certification - Issued by Nielsen Norman Group (NNG)
                  </p>
                  <p className="text-gray-500 text-sm">2022</p>
                </li>
                <li>
                  <p className="text-gray-900 font-medium mb-2">
                    Adobe Certified UX Design Specialist - Issued by Adobe
                  </p>
                  <p className="text-gray-500 text-sm">2021</p>
                </li>
                <li>
                  <p className="text-gray-900 font-medium mb-2">
                    Professional Diploma in UX Design - Issued by the UX Design 
                    Institute
                  </p>
                  <p className="text-gray-500 text-sm">2021</p>
                </li>
              </ul>
            </div>
            </div>
          </section>

          {/* Tech Stack Section */}
          <section className="py-12">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-gray-900">Tech Stack</h2>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm mb-16">
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