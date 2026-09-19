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
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="border-b border-border bg-background/80 backdrop-blur-sm sticky top-16 z-30">
        <div className="max-w-[720px] mx-auto px-6 py-4">
          <Link
            href="/#work"
            className="inline-flex items-center text-fg-muted hover:text-foreground transition-colors duration-150 text-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to work
          </Link>
        </div>
      </div>

      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="mb-16 animate-[fadeInUp_280ms_ease-out]">
          <h1 className="mb-6">
            {caseStudy.problemStatement}
          </h1>
          
          {/* Chips */}
          <div className="flex flex-wrap gap-2">
            {caseStudy.chips.map((chip, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-accent-soft border border-border rounded-full text-sm"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* Six-column template */}
        <div className="space-y-16">
          {/* Problem */}
          <div className="border-l-2 border-accent pl-6 animate-[fadeInUp_280ms_ease-out]" style={{ animationDelay: '40ms' }}>
            <h2 className="mb-4">Problem</h2>
            <p className="text-fg-muted leading-relaxed">{caseStudy.problem}</p>
          </div>

          {/* Constraints */}
          <div className="border-l-2 border-border pl-6 animate-[fadeInUp_280ms_ease-out]" style={{ animationDelay: '80ms' }}>
            <h2 className="mb-4">Constraints</h2>
            <p className="text-fg-muted leading-relaxed">{caseStudy.constraints}</p>
          </div>

          {/* What I owned */}
          <div className="border-l-2 border-accent pl-6 animate-[fadeInUp_280ms_ease-out]" style={{ animationDelay: '120ms' }}>
            <h2 className="mb-4">What I owned</h2>
            <p className="text-fg-muted leading-relaxed">{caseStudy.whatIOwned}</p>
          </div>

          {/* Trade-offs */}
          <div className="border-l-2 border-border pl-6 animate-[fadeInUp_280ms_ease-out]" style={{ animationDelay: '160ms' }}>
            <h2 className="mb-4">Trade-offs</h2>
            <p className="text-fg-muted leading-relaxed">{caseStudy.tradeoffs}</p>
          </div>

          {/* Outcome */}
          <div className="border-l-2 border-accent pl-6 animate-[fadeInUp_280ms_ease-out]" style={{ animationDelay: '200ms' }}>
            <h2 className="mb-4">Outcome</h2>
            <p className="text-fg-muted leading-relaxed">{caseStudy.outcome}</p>
          </div>

          {/* Artifacts */}
          <div className="border-l-2 border-border pl-6 animate-[fadeInUp_280ms_ease-out]" style={{ animationDelay: '240ms' }}>
            <h2 className="mb-6">Artifacts</h2>
            <div className="space-y-6">
              {caseStudy.artifacts.map((artifact, index) => (
                <div key={index}>
                  {artifact.type === 'image' && (
                    <div>
                      <div className="aspect-[16/9] bg-accent-soft border border-border rounded-lg mb-2" />
                      {artifact.caption && (
                        <p className="text-sm text-fg-muted">{artifact.caption}</p>
                      )}
                    </div>
                  )}
                  {artifact.type === 'link' && (
                    <a
                      href={artifact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 hover:underline underline-offset-4 transition-colors duration-150 group"
                    >
                      {artifact.caption || artifact.alt}
                      <ExternalLink className="w-4 h-4 text-fg-muted group-hover:text-foreground transition-colors" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back to work CTA */}
        <div className="mt-24 pt-12 border-t border-border">
          <Link
            href="/#work"
            className="inline-flex items-center text-sm hover:underline underline-offset-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            View all work
          </Link>
        </div>
      </div>
    </div>
  );
}
