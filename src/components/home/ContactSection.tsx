'use client';

import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 md:py-32 px-6 border-t border-border divider-glow vignette-hero">
      <div className="max-w-[720px] mx-auto relative z-10">
        {/* Section Header */}
        <h2 className="mb-6 animate-[fadeInUp_320ms_ease-out]">
          Get in touch
        </h2>
        <p className="text-fg-muted mb-12 animate-[fadeInUp_320ms_ease-out] stagger-2">
          Interested in working together or want to discuss a project? Reach out via email or connect on LinkedIn.
        </p>

        {/* Contact Links Row */}
        <div className="flex flex-wrap gap-4 animate-[fadeInUp_320ms_ease-out] stagger-3">
          <a
            href="mailto:designerko1215@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 hover:scale-[1.02] transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/weichiangko/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg-elevated border border-border rounded-lg text-sm font-medium hover:border-accent hover:scale-[1.02] transition-all duration-200 group"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
            <ExternalLink className="w-3 h-3 text-fg-muted group-hover:text-foreground transition-colors" />
          </a>
        </div>
      </div>
    </section>
  );
}
