'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

export default function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-[960px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 max-w-[720px]">
          <h2 className="mb-6">
            Work
          </h2>
          <p className="text-fg-muted">
            Three deep-dive case studies showing how I frame problems, design systems, and ship production-ready interfaces.
          </p>
        </div>

        {/* Case Studies List */}
        <div className="space-y-0">
          {caseStudies.map((caseStudy, index) => (
            <Link
              key={caseStudy.slug}
              href={`/work/${caseStudy.slug}`}
              className="group block border-b border-border py-8 transition-colors duration-150 hover:border-accent relative"
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {/* Hover accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent scale-y-0 group-hover:scale-y-100 transition-transform duration-180 origin-top" />
              
              <div className="pl-6">
                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-tight">
                  {caseStudy.title}
                </h3>
                
                {/* Problem Statement */}
                <p className="text-base md:text-lg text-fg-muted mb-4 leading-relaxed">
                  {caseStudy.problemStatement}
                </p>

                {/* Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.chips.map((chip, chipIndex) => (
                    <span
                      key={chipIndex}
                      className="px-3 py-1 bg-accent-soft border border-border rounded-full text-sm"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-sm font-medium group-hover:underline underline-offset-4">
                  Read case study
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform duration-150" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
