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
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            {profileData.name}
          </h1>
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-2xl md:text-3xl text-gray-700 font-medium">
              {profileData.roles[0]}
            </span>
            <span className="text-gray-400">·</span>
            <span className="text-2xl md:text-3xl text-gray-600">
              {profileData.roles[1]}
            </span>
          </div>
          <p className="text-2xl md:text-3xl text-gray-600 mb-10">
            {profileData.oneLiner}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {profileData.credentials.map((cred, i) => (
              <span key={i} className="px-5 py-3 bg-gray-100 text-gray-700 rounded-full text-lg font-medium">
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
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {caseStudy.problemStatement}
          </h2>
          
          <div className="space-y-8">
            <div className="border-l-4 border-black pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">What I owned</h3>
              <p className="text-xl text-gray-700 leading-relaxed">{caseStudy.whatIOwned}</p>
            </div>

            {caseStudy.artifacts[0] && (
              <div className="aspect-[16/9] bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl" />
            )}

            <div className="border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Key trade-off</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {caseStudy.tradeoffs.split(';')[0].trim()}
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (presentStep === 'webmcp') {
      return (
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            WebMCP Tools
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            This portfolio implements WebMCP tools that AI agents can call directly.
          </p>
          <div className="bg-gray-100 rounded-xl p-8">
            <p className="text-lg text-gray-700 mb-4 font-mono">
              7 tools available: get_profile, list_case_studies, get_case_study, filter_work, contact_intent, set_site_mode, set_present_deck
            </p>
            <a
              href="#webmcp"
              onClick={() => setMode('public')}
              className="inline-block px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors"
            >
              Try the playground
            </a>
          </div>
        </div>
      );
    }

    if (presentStep === 'close') {
      return (
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Thank you
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-10">
            Questions or want to dive deeper into any case?
          </p>
          <button
            onClick={() => setMode('public')}
            className="px-8 py-4 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-900 transition-colors"
          >
            Exit presentation mode
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col">
      {/* Close Button */}
      <button
        onClick={() => setMode('public')}
        className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        aria-label="Exit present mode"
      >
        <X className="w-6 h-6 text-gray-600" />
      </button>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-20 overflow-y-auto">
        {renderStepContent()}
      </div>

      {/* Navigation Controls */}
      <div className="border-t border-gray-200 bg-white px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={prevStep}
            disabled={!canGoPrev}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-900 rounded-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
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
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gray-900 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to ${step}`}
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            disabled={!canGoNext}
            className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Step Info */}
        <div className="text-center mt-2 text-sm text-gray-600">
          {currentIndex + 1} / {steps.length}
        </div>
      </div>
    </div>
  );
}
