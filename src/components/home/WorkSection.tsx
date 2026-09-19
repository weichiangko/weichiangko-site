'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';

export default function WorkSection() {
  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Three deep-dive case studies showing how I frame problems, design systems, and ship production-ready interfaces.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <Link
              key={caseStudy.slug}
              href={`/work/${caseStudy.slug}`}
              className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-200"
            >
              {/* Hero Image */}
              {caseStudy.heroImage && (
                <div className="aspect-[16/10] bg-gray-100 overflow-hidden relative">
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                {/* Problem Statement */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors leading-tight">
                  {caseStudy.problemStatement}
                </h3>

                {/* Chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {caseStudy.chips.map((chip, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-sm font-medium text-gray-900 group-hover:text-gray-600">
                  Read case
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
