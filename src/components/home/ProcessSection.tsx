'use client';

import { processSteps } from '@/data/profileData';

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How I work
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            My approach to turning ambiguous problems into production-ready solutions.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-8 md:grid-cols-3">
          {processSteps.map((step) => (
            <div key={step.number} className="relative">
              {/* Step Number */}
              <div className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full text-xl font-bold mb-4">
                {step.number}
              </div>

              {/* Step Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
