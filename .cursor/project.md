# Ben Ko's Portfolio Website

## Project Overview
Modern portfolio website built with Next.js 15, showcasing UX/UI design work with frontend development expertise. Features interactive 3D animations and modern web technologies.

### Personal Information
- **Name**: Ben Ko
- **Title**: UX/UI Designer with frontend development expertise
- **Email**: designerko1215@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/weichiangko/
- **Bio**: "Dedicated to bringing design ideas to life through development capabilities"

## Technical Architecture

### Core Technologies
- **Framework**: Next.js 15.3.4 with App Router
- **Language**: TypeScript with strict mode
- **Runtime**: React 19
- **Styling**: Tailwind CSS v4 with shadcn/ui ("new-york" preset)
- **3D Graphics**: Three.js v0.178.0
- **Animation**: Framer Motion v12.23.3 + GSAP v3.13.0
- **Email**: EmailJS v4.4.1
- **Icons**: Lucide React
- **Fonts**: Geist Sans and Geist Mono

### Project Structure
```
src/
├── app/ (Next.js App Router)
│   ├── layout.tsx, page.tsx, globals.css
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── projects/
│       ├── page.tsx
│       └── [slug]/page.tsx
├── components/
│   ├── ui/ (Timeline, buttons, select, tabs, TechStack)
│   ├── layout/ (Footer, PageFooter, Sidebar, ResponsiveSidebar)
│   ├── home/ (AboutPreview, CTASection, HeroSection, ProjectsPreview)
│   ├── projects/ (ProjectCard, ProjectDetail, ProjectImage, ProjectVideo)
│   ├── contact/ (ContactForm)
│   ├── animations/ (PointSphere, RotatingText)
│   └── common/ (BackToTop)
├── lib/
│   ├── projects.ts, constants.ts, emailjs.ts, utils.ts
├── content/projects/ (MDX files)
└── public/
    ├── images/ (avatar, logos, projects)
    ├── icons/ (tech icons)
    └── videos/ (project demos)
```

### Site Architecture
```
/ (Home) - Hero + About preview + Projects + CTA
├── /about - Education, experience, certifications
├── /projects - Filterable project grid
│   └── /[slug] - Individual project details
└── /contact - Contact form + info
```

## Key Features & Requirements

### 1. 3D Hero Animation
- Three.js point sphere (ref: https://codepen.io/LadyHolz/pen/eYPNOBa)
- Responsive particle count
- Performance optimized for mobile

### 2. Project System
- **Categories**: UX/UI Design, Web Development, Side Project
- **Projects**: Mionext, VisionMax, EdgeAI System, Travel Planning Platform
- Segmented controller filtering
- Dynamic routing with [slug]

### 3. Responsive Design
- Mobile-first (320px+, 768px+, 1024px+)
- Touch-friendly interactions
- Optimized navigation per screen size

### 4. Performance & Accessibility
- WCAG 2.1 AA compliance
- Code splitting for Three.js
- Lazy loading animations
- Modern browser support (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

### 5. Content & Data
**Mock Education**: University of the Arts London (MA), Parsons (MS), SCAD (BFA)
**Mock Experience**: Google (UX Designer), Adobe (Web Designer), HubSpot (SEO), Spotify (Intern)
**Mock Certifications**: CUA-HFI, NNG UX Certification, Adobe Certified

## Development Commands
- `npm run dev` - Development server (localhost:3000)
- `npm run build` - Production build
- `npm run start` - Production server
- `npm run lint` - ESLint check

## Environment Variables
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## SEO Configuration
```typescript
export const metadata = {
  title: "Ben Ko - UX/UI Designer & Frontend Developer",
  description: "Passionate designer bridging creativity and development to solve real problems with user-first thinking.",
  keywords: ["UX Designer", "UI Designer", "Frontend Developer", "Portfolio"],
  openGraph: {
    title: "Ben Ko - Portfolio",
    description: "UX/UI Designer with frontend development expertise",
    images: ["/og-image.jpg"],
  }
}
```

## Critical Design Requirements
1. **Strictly follow reference images** - All UI elements, spacing, colors must match exactly
2. **Performance first** - Three.js animations must not impact loading speed
3. **Accessibility** - Ensure usability for all users
4. **Mobile optimization** - Prioritize mobile experience
5. **Maintainable code** - Modular, extensible architecture
