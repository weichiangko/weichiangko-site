'use client';

import { Mail, Linkedin, ExternalLink } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 border-t border-border">
      <div className="max-w-[720px] mx-auto">
        {/* Section Header */}
        <h2 className="mb-6">
          Get in touch
        </h2>
        <p className="text-fg-muted mb-12">
          Interested in working together or want to discuss a project? Reach out via email or connect on LinkedIn.
        </p>

        {/* Contact Links Row */}
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:contact@example.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground rounded-lg text-sm font-medium hover:opacity-90 transition-opacity duration-150"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-bg-elevated border border-border rounded-lg text-sm font-medium hover:border-accent transition-colors duration-150 group"
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
