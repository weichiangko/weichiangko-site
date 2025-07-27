"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import RotatingText from "@/components/animations/RotatingText";

// Dynamically import PointSphere to avoid SSR issues
const PointSphere = dynamic(() => import("@/components/animations/PointSphere"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gray-50" />,
});

export default function HeroSection() {
  const rotatingWords = ["designer", "developer", "creator", "shuttler", "gearhead"];
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Top Right Contact Button - Desktop */}
      <div className="absolute top-6 right-6 z-20 hidden md:flex items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Available for Projects
        </div>
        <Link 
          href="/contact"
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-900 transition-colors"
        >
          Contact Me
        </Link>
      </div>


      {/* 3D Sphere Background */}
      <div className="absolute inset-0 flex items-center justify-center z-0 md:translate-y-0 -translate-y-8">
        <div className="w-full h-full max-w-[800px] max-h-[800px] relative">
          <Suspense fallback={<div className="w-full h-full" />}>
            <PointSphere />
          </Suspense>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen md:translate-y-0 -translate-y-8">
        <div className="text-center max-w-2xl mx-auto px-6">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-600 mb-6">
            I&apos;m a{" "}
            <RotatingText 
              words={rotatingWords} 
              className="text-gray-900" 
            />
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
            Bridging pixels and logic to turn problems into products.
          </p>
        </div>
      </div>

      {/* Bouncing Arrow Down - Scroll Indicator */}
      <div className="absolute bottom-16 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown 
          className="w-6 h-6 md:w-7 md:h-7 animate-bounce text-gray-600" 
          strokeWidth={2}
        />
      </div>
    </section>
  );
}