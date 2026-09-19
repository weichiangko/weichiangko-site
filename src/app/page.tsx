import HeroSection from "@/components/home/HeroSection";
import WorkSection from "@/components/home/WorkSection";
import ProcessSection from "@/components/home/ProcessSection";
import WebMCPPlayground from "@/components/webmcp/WebMCPPlayground";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WorkSection />
      <ProcessSection />
      <WebMCPPlayground />
      <ContactSection />
    </div>
  );
}
