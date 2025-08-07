# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` (starts Next.js dev server on localhost:3000)
- **Build**: `npm run build` (creates production build)
- **Production server**: `npm run start` (runs production build)
- **Lint**: `npm run lint` (runs ESLint with Next.js config)

## Project Overview

This is Ben Ko's portfolio website built with Next.js 15. The site showcases his UX/UI design work with frontend development expertise, featuring interactive 3D animations and modern web technologies.

### Personal Information
- **Name**: Ben Ko
- **Title**: UX/UI Designer with frontend development expertise
- **Email**: designerko1215@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/weichiangko/

## Tech Stack

- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript with strict mode
- **Runtime**: React 19
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **UI Components**: shadcn/ui with "new-york" style preset
- **Icons**: Lucide React
- **3D Graphics**: Three.js v0.178.0 for hero section animation
- **Animation**: Framer Motion v12.23.3 and GSAP v3.13.0
- **Email Service**: EmailJS v4.4.1 for contact form functionality
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Site Structure

```
/ (Home)
├── /about
├── /projects
│   └── /[slug] (Project Detail)
└── /contact
```

## Key Implementation Requirements

### 1. Design Compliance
- **Strictly follow reference images**: All UI elements, spacing, colors, and font sizes must match the provided reference images exactly
- Implement precise layout positioning and component arrangements as shown
- Maintain visual consistency across all breakpoints

### 2. 3D Hero Animation
- Three.js point sphere animation for hero section (reference: https://codepen.io/LadyHolz/pen/eYPNOBa)
- Responsive particle count based on device capabilities
- Performance optimization for mobile devices

### 3. Component Structure
```
src/
├── app/ (Next.js App Router pages)
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── projects/
│   │   ├── [slug]/page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ui/ (Timeline, animated-button, button, select, tabs)
│   ├── layout/ (Footer, PageFooter, ResponsiveSidebar, Sidebar)
│   ├── home/ (AboutPreview, CTASection, HeroSection, ProjectsPreview)
│   ├── projects/ (ProjectCard, ProjectDetail)
│   ├── contact/ (ContactForm)
│   ├── animations/ (PointSphere, RotatingText)
│   └── common/
├── lib/
│   ├── projects/ (visionmax.ts, nexter.ts, mionext.ts, index.ts)
│   ├── constants.ts
│   ├── emailjs.ts
│   └── utils.ts
└── public/
    ├── images/
    │   ├── avatar.jpg
    │   └── projects/
    └── icons/ (file.svg, globe.svg, next.svg, vercel.svg, window.svg)
```

### 4. Key Features
- **Project Filtering**: Segmented controller with categories (UX/UI Design, Web Development, Side Project)
- **Contact Form**: EmailJS v4.4.1 integration with validation
- **Responsive Design**: Mobile-first approach (320px+, 768px+, 1024px+)
- **Animations**: Framer Motion v12.23.3 page transitions and GSAP v3.13.0 animations
- **3D Graphics**: Three.js v0.178.0 point sphere animation with RotatingText component
- **Modern UI**: shadcn/ui components with Tailwind CSS v4

## Mock Data

### Projects
- Mionext: Revolutionizing Personalized Meal Delivery (Web Development)
- VisionMax: Elevating Adventure Travel Through Innovative Web Solutions (UX/UI Design)
- Nexter: Redefining Real Estate with Cutting-Edge Web Design (UX/UI Design)
- Travel Planning Platform (Side Project)

### Education & Experience
- Academic: University of the Arts London (MA), Parsons School of Design (MS), SCAD (BFA)
- Certifications: CUA-HFI, NNG UX Certification, Adobe Certified UX Design Specialist
- Experience: Google (UX Designer), Adobe (Web Designer), HubSpot (SEO Specialist), Spotify (Intern)

## Environment Variables

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Performance & Accessibility

- WCAG 2.1 AA compliance required
- Code splitting for Three.js components
- Lazy loading for non-critical animations
- Modern browser support (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Progressive enhancement for older browsers