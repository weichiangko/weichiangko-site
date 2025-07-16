"use client";

import { useState } from "react";
import { Mail, User, MessageSquare, ExternalLink } from "lucide-react";
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
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-4xl font-bold text-gray-900">Let's Connect!</h1>
          <div className="flex items-center gap-2 text-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600">Available for Projects</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl">
          {PERSONAL_INFO.bio}
        </p>
      </div>

      {/* Contact Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Email */}
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-gray-900 font-medium">{PERSONAL_INFO.email}</span>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </a>

        {/* Resume */}
        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-gray-900 font-medium">Resume</span>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </a>

        {/* Book a Call */}
        <a
          href="#"
          className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-gray-600" />
            </div>
            <span className="text-gray-900 font-medium">Book a Call</span>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </a>

        {/* LinkedIn */}
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          className="flex items-center justify-between p-6 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <span className="text-gray-900 font-medium">LinkedIn</span>
          </div>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
        </a>
      </div>

      {/* Contact Form */}
      <div className="bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Jane Smith"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="jane@framer.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Type something here..."
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              required
            />
          </div>

          {/* Privacy Policy */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="policy"
              name="agreedToPolicy"
              checked={formData.agreedToPolicy}
              onChange={handleInputChange}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required
            />
            <label htmlFor="policy" className="text-sm text-gray-600">
              I Agree with{" "}
              <a href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/cookies" className="text-blue-600 hover:underline">
                Cookie Policy
              </a>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.agreedToPolicy || isSubmitting}
            className="w-full bg-black text-white py-4 px-6 rounded-lg font-medium hover:bg-gray-900 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}