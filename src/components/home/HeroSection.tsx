"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

// Dynamically import PointSphere to avoid SSR issues
const PointSphere = dynamic(() => import("@/components/animations/PointSphere"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gray-50" />,
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Top Right Contact Button */}
      <div className="absolute top-6 right-6 z-20 flex items-center gap-4">
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
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-full h-full max-w-[700px] max-h-[700px] relative">
          <Suspense fallback={<div className="w-full h-full" />}>
            <PointSphere />
          </Suspense>
        </div>
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-2xl mx-auto px-6">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Hey, I&apos;m Ben!
          </h1>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
            I&apos;m Ben Ko, a passionate Creative Designer with multiple hats as you will see below. I focus on creating intuitive, 
            user-friendly, and visually engaging digital experiences that solve real problems and deliver measurable results.
          </p>
        </div>
      </div>
    </section>
  );
}