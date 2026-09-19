'use client';

import { processSteps } from '@/data/profileData';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 divider-glow">
      <div className="max-w-[720px] mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-[fadeInUp_320ms_ease-out]">
          <h2 className="mb-6">
            How I work
          </h2>
          <p className="text-fg-muted">
            My approach to turning ambiguous problems into production-ready solutions.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-12">
          {processSteps.map((step, index) => (
            <div 
              key={step.number} 
              className={`relative border-l-2 border-border pl-8 pb-4 animate-[fadeInUp_320ms_ease-out] stagger-${index + 1} transition-all duration-200 hover:border-accent group`}
            >
              {/* Step Number */}
              <div className="absolute -left-[17px] flex items-center justify-center w-8 h-8 bg-accent text-accent-foreground rounded-full text-sm font-semibold transition-transform duration-200 group-hover:scale-110">
                {step.number}
              </div>

              {/* Step Content */}
              <h3 className="mb-3">
                {step.title}
              </h3>
              <p className="text-fg-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
