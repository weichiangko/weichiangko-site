import HeroSection from "@/components/home/HeroSection";
import AboutPreview from "@/components/home/AboutPreview";
import ProjectsPreview from "@/components/home/ProjectsPreview";
import CTASection from "@/components/home/CTASection";
import PageFooter from "@/components/layout/PageFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-6">
          <HeroSection />
          <AboutPreview />
          <ProjectsPreview />
          <CTASection />
        </div>
      </div>
      <PageFooter />
    </div>
  );
}
