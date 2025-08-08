"use client";

import { useState } from "react";
// Icons available for future use
// import { Mail, User, MessageSquare, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  agreedToPolicy: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
    agreedToPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreedToPolicy) return;
    
    setIsSubmitting(true);
    
    try {
      const { sendEmail } = await import("@/lib/emailjs");
      const success = await sendEmail({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });
      
      if (success) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "", agreedToPolicy: false });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="max-w-5xl mx-auto px-8 py-12">
      {/* Header */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold text-gray-900 my-8">Let&apos;s Connect!</h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
          Whether it&apos;s brainstorming a new project, discussing design optimizations, or just sharing creative insights, I&apos;m always 
          excited to collaborate. Reach out to me and let&apos;s craft something exceptional — together!
        </p>
      </div>

      {/* Contact Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {/* Email */}
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
            {PERSONAL_INFO.email}
          </span>
          <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <span className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
            Resume
          </span>
          <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* Book a Call */}
        <a
          href="#"
          className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <span className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
            Book a Call
          </span>
          <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <span className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
            LinkedIn
          </span>
          <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>

        {/* GitHub */}
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all group"
        >
          <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
          </div>
          <span className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
            GitHub
          </span>
          <svg className="w-5 h-5 text-gray-400 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Contact Form */}
      <div className="bg-white rounded-xl p-12 shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Get in touch</h2>
        
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Jane Smith"
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="jane@framer.com"
                className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={6}
              placeholder="Type something here..."
              className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent transition-colors resize-none"
              required
            />
          </div>

          <div className="flex items-center gap-3 pt-4">
            <input
              type="checkbox"
              id="privacy"
              name="agreedToPolicy"
              checked={formData.agreedToPolicy}
              onChange={handleInputChange}
              className="w-5 h-5 text-black border-gray-300 rounded focus:ring-black"
              required
            />
            <label htmlFor="privacy" className="text-sm text-gray-600">
              I Agree with Privacy Policy and Cookie Policy
            </label>
          </div>

          <button
            type="submit"
            disabled={!formData.agreedToPolicy || isSubmitting}
            className="w-full bg-black text-white py-4 px-8 rounded-xl text-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}