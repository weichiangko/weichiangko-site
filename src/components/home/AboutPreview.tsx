import Link from "next/link";
import Image from "next/image";
import { AnimatedButton } from "@/components/ui/animated-button";

export default function AboutPreview() {
  return (
    <section className="py-12">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
      </div>

      {/* Main About Section - New Design */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Left Column - Description & Stats Card */}
        <div className="bg-white rounded-xl p-8 shadow-sm">
          <p className="text-gray-900 leading-relaxed text-lg mb-8">
            Currently a Sr. UI Engineer at MiTAC with 10+ years of UX/UI design, Web and App Development. also winner of iF Award 2024.
          </p>
          
          {/* Stats Grid */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600 text-lg">Years of Experience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600 text-lg">Projects Delivered</p>
            </div>
          </div>
        </div>

        {/* Right Column - Current Work & Award Cards */}
        <div className="space-y-8">
          {/* Current Work Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Current Work</h3>
            <div className="flex items-center gap-4">
              {/* Company Logo */}
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image src="/images/logos/mitac.png" alt="MiTAC" width={32} height={32} className="object-contain" />
              </div>
              
              {/* Company Info */}
              <div>
                <p className="text-gray-900 font-medium mb-1">MiTAC International Corp.</p>
                <p className="text-gray-500 text-sm">March 2021 – Present</p>
              </div>
            </div>
          </div>

          {/* Award Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Current Achievement</h3>
            <div className="flex items-center gap-4">
              {/* Award Logo */}
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image src="/images/logos/if-design-award.png" alt="IF Design Award" width={32} height={32} className="object-contain" />
              </div>
              
              {/* Award Info */}
              <div>
                <p className="text-gray-900 font-medium mb-1">IF Design Award</p>
                <p className="text-gray-500 text-sm">2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View Full Experience Button */}
      <div className="text-right">
        <AnimatedButton>
          <Link href="/about">
            View Full Experience
          </Link>
        </AnimatedButton>
      </div>
    </section>
  );
}