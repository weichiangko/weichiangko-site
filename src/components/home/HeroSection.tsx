"use client";

import Link from "next/link";
import { ChevronDown, Sparkles } from "lucide-react";
import { profileData } from "@/data/profileData";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-32 vignette-hero overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Name - Hero display typography */}
        <h1 className="mb-6 animate-[fadeInUp_280ms_ease-out] stagger-1">
          {profileData.name}
        </h1>
        
        {/* Roles */}
        <div className="flex items-center justify-center gap-3 mb-8 text-xl md:text-2xl animate-[fadeInUp_280ms_ease-out] stagger-2">
          <span className="font-medium">
            {profileData.roles[0]}
          </span>
          <span className="text-fg-muted">·</span>
          <span className="text-fg-muted">
            {profileData.roles[1]}
          </span>
        </div>
        
        {/* One-liner */}
        <p className="text-lg md:text-[1.125rem] text-fg-muted leading-relaxed mb-10 max-w-2xl mx-auto animate-[fadeInUp_280ms_ease-out] stagger-3">
          {profileData.oneLiner}
        </p>
        
        {/* Credentials */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12 animate-[fadeInUp_280ms_ease-out] stagger-4">
          {profileData.credentials.map((credential, index) => (
            <span 
              key={index}
              className="px-4 py-1.5 bg-accent-soft border border-border rounded-full text-sm transition-all duration-200 hover:border-accent"
            >
              {credential}
            </span>
          ))}
        </div>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeInUp_280ms_ease-out] stagger-5">
          <Link 
            href="#work"
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg text-base font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-200 w-full sm:w-auto"
          >
            Explore work
          </Link>
          <Link 
            href="#webmcp"
            className="px-6 py-3 bg-bg-elevated border border-border rounded-lg text-base font-medium hover:border-accent transition-all duration-200 flex items-center justify-center gap-2 w-full sm:w-auto group"
          >
            <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
            Talk to this site
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 animate-[fadeIn_400ms_ease-out] stagger-6">
        <ChevronDown 
          className="w-6 h-6 text-fg-muted animate-bounce" 
          strokeWidth={1.5}
        />
      </div>
    </section>
  );
}