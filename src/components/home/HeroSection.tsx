"use client";

import Link from "next/link";
import { ChevronDown, Sparkles } from "lucide-react";
import { profileData } from "@/data/profileData";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 py-20">
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
          {profileData.name}
        </h1>
        
        {/* Roles */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl md:text-2xl text-gray-700 font-medium">
            {profileData.roles[0]}
          </span>
          <span className="text-gray-400">·</span>
          <span className="text-xl md:text-2xl text-gray-600">
            {profileData.roles[1]}
          </span>
        </div>
        
        {/* One-liner */}
        <p className="text-lg md:text-2xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
          {profileData.oneLiner}
        </p>
        
        {/* Credentials Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {profileData.credentials.map((credential, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
            >
              {credential}
            </span>
          ))}
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="#work"
            className="px-6 py-3 bg-black text-white rounded-lg text-base font-medium hover:bg-gray-900 transition-colors w-full sm:w-auto"
          >
            Explore work
          </Link>
          <Link 
            href="#webmcp"
            className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Sparkles className="w-4 h-4" />
            Talk to this site
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <ChevronDown 
          className="w-6 h-6 md:w-7 md:h-7 animate-bounce text-gray-600" 
          strokeWidth={2}
        />
      </div>
    </section>
  );
}