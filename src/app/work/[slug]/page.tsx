'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getCaseStudy } from '@/data/caseStudies';
import { use } from 'react';

export default function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params);
  const caseStudy = getCaseStudy(resolvedParams.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <Link
            href="/#work"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to work
          </Link>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            {caseStudy.problemStatement}
          </h1>
          
          {/* Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {caseStudy.chips.map((chip, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {chip}
              </span>
            ))}
          </div>

          {/* Hero Image Placeholder */}
          {caseStudy.heroImage && (
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl mb-12" />
          )}
        </div>

        {/* Six-column template */}
        <div className="space-y-12">
          {/* Problem */}
          <div className="border-l-4 border-black pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Problem</h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.problem}</p>
          </div>

          {/* Constraints */}
          <div className="border-l-4 border-gray-300 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Constraints</h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.constraints}</p>
          </div>

          {/* What I owned */}
          <div className="border-l-4 border-black pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">What I owned</h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.whatIOwned}</p>
          </div>

          {/* Trade-offs */}
          <div className="border-l-4 border-gray-300 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Trade-offs</h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.tradeoffs}</p>
          </div>

          {/* Outcome */}
          <div className="border-l-4 border-black pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Outcome</h2>
            <p className="text-gray-700 leading-relaxed">{caseStudy.outcome}</p>
          </div>

          {/* Artifacts */}
          <div className="border-l-4 border-gray-300 pl-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Artifacts</h2>
            <div className="space-y-6">
              {caseStudy.artifacts.map((artifact, index) => (
                <div key={index}>
                  {artifact.type === 'image' && (
                    <div>
                      <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg mb-2" />
                      {artifact.caption && (
                        <p className="text-sm text-gray-600 italic">{artifact.caption}</p>
                      )}
                    </div>
                  )}
                  {artifact.type === 'link' && (
                    <a
                      href={artifact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {artifact.caption || artifact.alt}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Next Case CTA */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <Link
            href="/#work"
            className="inline-flex items-center text-gray-900 hover:text-gray-600 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            View all work
          </Link>
        </div>
      </div>
    </div>
  );
}
