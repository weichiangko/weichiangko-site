'use client';

import { useSiteStore } from '@/lib/siteStore';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { caseStudies } from '@/data/caseStudies';
import { profileData } from '@/data/profileData';

export default function PresentModeView() {
  const { mode, presentStep, setPresentStep, nextStep, prevStep, setMode } = useSiteStore();

  if (mode !== 'present') return null;

  const steps = ['overview', 'case:mionext', 'case:visionmax', 'case:edge-ai-surveillance', 'webmcp', 'close'];
  const currentIndex = steps.indexOf(presentStep);
  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < steps.length - 1;

  const renderStepContent = () => {
    if (presentStep === 'overview') {
      return (
        <div className="text-center max-w-4xl mx-auto animate-[fadeIn_250ms_ease-out]">
          <h1 className="mb-8">
            {profileData.name}
          </h1>
          <div className="flex items-center justify-center gap-3 mb-10 text-xl md:text-2xl">
            <span className="font-medium">
              {profileData.roles[0]}
            </span>
            <span className="text-fg-muted">·</span>
            <span className="text-fg-muted">
              {profileData.roles[1]}
            </span>
          </div>
          <p className="text-xl md:text-2xl text-fg-muted mb-12 leading-relaxed">
            {profileData.oneLiner}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {profileData.credentials.map((cred, i) => (
              <span key={i} className="px-4 py-2 bg-accent-soft border border-border rounded-full text-base">
                {cred}
              </span>
            ))}
          </div>
        </div>
      );
    }

    if (presentStep.startsWith('case:')) {
      const slug = presentStep.replace('case:', '');
      const caseStudy = caseStudies.find(cs => cs.slug === slug);
      if (!caseStudy) return null;

      return (
        <div className="max-w-[800px] mx-auto animate-[fadeIn_250ms_ease-out]">
          <h1 className="mb-12 text-center">
            {caseStudy.problemStatement}
          </h1>
          
          <div className="space-y-12">
            <div className="border-l-2 border-accent pl-6">
              <h2 className="mb-4">What I owned</h2>
              <p className="text-lg text-fg-muted leading-relaxed">{caseStudy.whatIOwned}</p>
            </div>

            {caseStudy.artifacts[0] && (
              <div className="aspect-[16/9] bg-accent-soft border border-border rounded-lg" />
            )}

            <div className="border-l-2 border-border pl-6">
              <h3 className="text-lg font-semibold mb-3">Key trade-off</h3>
              <p className="text-fg-muted leading-relaxed">
                {caseStudy.tradeoffs.split('.')[0]}.
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (presentStep === 'webmcp') {
      return (
        <div className="text-center max-w-4xl mx-auto animate-[fadeIn_250ms_ease-out]">
          <h1 className="mb-8">
            WebMCP Tools
          </h1>
          <p className="text-xl text-fg-muted mb-12 leading-relaxed">
            This portfolio implements WebMCP tools that AI agents can call directly.
          </p>
          <div className="bg-bg-elevated border border-border rounded-lg p-8 text-left">
            <p className="text-sm font-mono text-fg-muted mb-6">
              7 tools available: get_profile · list_case_studies · get_case_study · filter_work · contact_intent · set_site_mode · set_present_deck
            </p>
            <button
              onClick={() => {
                setMode('public');
                window.location.hash = 'webmcp';
              }}
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg text-base font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
            >
              Try the playground
            </button>
          </div>
        </div>
      );
    }

    if (presentStep === 'close') {
      return (
        <div className="text-center max-w-3xl mx-auto animate-[fadeIn_250ms_ease-out]">
          <h1 className="mb-8">
            Thank you
          </h1>
          <p className="text-xl text-fg-muted mb-12">
            Questions? Open the playground and ask via WebMCP tools, or reach out directly.
          </p>
          <button
            onClick={() => setMode('public')}
            className="px-6 py-3 bg-accent text-accent-foreground rounded-lg text-base font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
          >
            Exit presentation
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col">
      {/* Close Button */}
      <button
        onClick={() => setMode('public')}
        className="absolute top-6 right-6 p-2 hover:bg-accent-soft rounded-lg transition-colors duration-150"
        aria-label="Exit present mode"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20 overflow-y-auto">
        <div key={presentStep} className="w-full">
          {renderStepContent()}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="border-t border-border bg-background px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={!canGoPrev}
            className="flex items-center gap-2 px-4 py-2 bg-bg-elevated border border-border text-sm font-medium rounded-lg hover:border-accent transition-colors duration-150 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-border"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          {/* Progress */}
          <div className="flex items-center gap-2">
            {steps.map((step, index) => (
              <button
                key={step}
                onClick={() => setPresentStep(step as 'overview' | 'case:mionext' | 'case:visionmax' | 'case:edge-ai-surveillance' | 'webmcp' | 'close')}
                className={`h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-accent w-8' : 'bg-border w-2 hover:bg-fg-muted'
                }`}
                aria-label={`Go to ${step}`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={!canGoNext}
            className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:opacity-90 transition-opacity duration-150 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Step Info */}
        <div className="text-center mt-3 text-sm text-fg-muted">
          {currentIndex + 1} / {steps.length}
        </div>
      </div>
    </div>
  );
}
