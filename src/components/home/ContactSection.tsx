'use client';

import { Mail, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get in touch
        </h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Interested in working together or want to discuss a project? Reach out via email or LinkedIn.
        </p>

        {/* Contact Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:contact@example.com"
            className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg text-base font-medium hover:bg-gray-900 transition-colors w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Email me
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 border-2 border-gray-300 rounded-lg text-base font-medium hover:bg-gray-50 transition-colors w-full sm:w-auto justify-center"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
