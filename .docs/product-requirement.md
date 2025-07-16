# Product Requirement

This file provides comprehensive guidance to Claude Code for building Ben Ko's portfolio website based on the provided Figma designs.

## Project Overview

Build a modern, responsive portfolio website for Ben Ko, a UX/UI Designer with frontend development expertise. The site showcases his ability to bridge design and development, featuring interactive animations and a professional presentation of his work. All design elements must strictly follow the provided reference images.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **Fonts**: Geist Sans and Geist Mono
- **UI Components**: shadcn/ui with "new-york" style preset
- **Icons**: Lucide React
- **3D Graphics**: Three.js for hero section animation
- **Animation**: Framer Motion for page transitions and interactions
- **Email Service**: EmailJS for contact form functionality
- **Mock Images**: Unsplash API for project placeholders

## Site Structure and Content

### Personal Information
- **Name**: Ben Ko
- **Title**: UX/UI Designer (with frontend development expertise)
- **Bio**: "Dedicated to bringing design ideas to life through development capabilities"
- **Email**: designerko1215@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/weichiangko/

### Navigation Structure
```
/ (Home)
├── /about
├── /projects
│   └── /[slug] (Project Detail)
└── /contact
```

### Content Sections

#### 1. Home Page (`/`)
- **Hero Section**: 
  - 3D animated point sphere background (Three.js implementation)
  - "Hey👋, I'm Ben!" greeting
  - Professional introduction text
  - "Available for Projects" status indicator
- **About Me Preview**: Summary of education, experience, certifications
- **Projects Preview**: Featured project cards
- **Skills Stack**: Technology icons grid
- **CTA**: Contact section

#### 2. About Page (`/about`)
- **Academic Education** (Mock Data):
  - University of the Arts London - Master of Arts (MA) in User Experience Design (2020-2022)
  - Parsons School of Design - Master of Science (MS) in Strategic Design an Management (2018-2020)
  - Savannah College of Art and Design [SCAD] - Bachelor of Fine Arts (BFA) in Interactive Design and Game Development (2015-2017)

- **Non-Formal Education** (Mock Data):
  - Nielsen Norman Group [NNG] - UX Certification Program (March-June 2023)
  - General Assembly - User Experience Design Immersive (October 2022-January 2023)
  - Interaction Design Foundation [IDF] - UX Design Specialization Course (January-June 2022)

- **Experience** (Mock Data):
  - Google - UX Designer (January 2022-Present)
  - Adobe - Web Designer (June 2019-December 2021)
  - HubSpot - SEO Specialist (July 2017-May 2019)
  - Spotify - UI/UX Designer Intern (January 2017-June 2017)

- **Certifications** (Mock Data):
  - Certified Usability Analyst (CUA) - Human Factors International [HFI] (2023)
  - NNG UX Certification - Nielsen Norman Group [NNG] (2022)
  - Adobe Certified UX Design Specialist - Adobe (2021)
  - Professional Diploma in UX Design - UX Design Institute (2021)
  - **iF Design Award Winner** (reserve space for displaying two awards)

- **Skills Stack**: HTML5, CSS3, Figma, Framer, Hotjar, Notion

#### 3. Projects Page (`/projects`)
- **Segmented Controller**: Filter projects by category
  - UX/UI Design
  - Web Development  
  - Side Project
- **Project Grid**: Responsive card layout
- **Mock Projects** (using Unsplash images):
  - Omnifood: Revolutionizing Personalized Meal Delivery (Web Development)
  - Natours: Elevating Adventure Travel Through Innovative Web Solutions (UX/UI Design)
  - Nexter: Redefining Real Estate with Cutting-Edge Web Design (UX/UI Design)
  - Travel Planning Platform (Side Project)

#### 4. Project Detail Page (`/projects/[slug]`)
- **Project Hero**: Large project image and title
- **Project Overview**: Category, client, completion date
- **Detailed Description**: My Approach, Vision and Innovation, Identifying Unique Challenges, etc.
- **Project Images**: Additional screenshots and visuals
- **Navigation**: Previous/Next project links
- **Other Projects**: Related project suggestions
- **CTA**: Contact section for project inquiries

#### 5. Contact Page (`/contact`)
- **Contact Methods**:
  - Email: designerko1215@gmail.com
  - LinkedIn: https://www.linkedin.com/in/weichiangko/
  - Resume download
  - Book a Call option
- **Contact Form**: Name, Email, Message fields with EmailJS integration
- **Privacy Policy**: Checkbox agreement

## File Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home page
│   ├── about/
│   │   └── page.tsx           # About page
│   ├── projects/
│   │   ├── page.tsx           # Projects listing
│   │   └── [slug]/
│   │       └── page.tsx       # Individual project pages
│   ├── contact/
│   │   └── page.tsx           # Contact page
│   └── globals.css            # Global styles
├── components/
│   ├── ui/                    # shadcn/ui components
│   ├── layout/
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Site footer
│   │   └── Sidebar.tsx        # Mobile sidebar
│   ├── home/
│   │   ├── HeroSection.tsx    # 3D animated hero
│   │   ├── AboutPreview.tsx   # About summary
│   │   ├── ProjectsPreview.tsx # Featured projects
│   │   └── SkillsStack.tsx    # Technology grid
│   ├── projects/
│   │   ├── ProjectCard.tsx    # Project card component
│   │   ├── ProjectFilter.tsx  # Segmented controller
│   │   └── ProjectGrid.tsx    # Projects grid layout
│   ├── contact/
│   │   └── ContactForm.tsx    # Email form with validation
│   └── animations/
│       ├── PointSphere.tsx    # Three.js sphere component
│       └── PageTransition.tsx # Framer Motion transitions
├── lib/
│   ├── utils.ts               # Utility functions
│   ├── emailjs.ts             # EmailJS configuration
│   └── constants.ts           # Site constants
└── public/
    ├── images/
    │   ├── projects/          # Project screenshots
    │   ├── avatar.jpg         # Profile image
    │   └── resume.pdf         # Downloadable resume
    └── icons/                 # Skill/tech icons
```

## Key Implementation Requirements

### 1. Strictly Follow Reference Images
- All UI elements, spacing, colors, and font sizes must match the provided reference images exactly
- Implement precise layout positioning and component arrangements as shown
- Maintain visual consistency across all breakpoints

### 2. 3D Hero Animation
- Implement Three.js point sphere animation similar to: https://codepen.io/LadyHolz/pen/eYPNOBa
- Responsive particle count based on device capabilities
- Smooth rotation and interaction effects
- Performance optimization for mobile devices

### 3. Responsive Design
- Mobile-first approach following the attached design images
- Breakpoints: mobile (320px+), tablet (768px+), desktop (1024px+)
- Touch-friendly interactions for mobile
- Optimized navigation for different screen sizes

### 4. Animation System
- Framer Motion for page transitions
- Smooth enter/exit animations between routes
- Staggered animations for content loading
- Hover effects for interactive elements

### 5. Project Filtering
- Implement segmented controller component
- Smooth transitions between filter states
- URL-based filtering for shareable links
- Proper focus management for accessibility

### 6. Contact Form Integration
- EmailJS setup for form submissions
- Client-side validation with TypeScript
- Success/error state handling
- Privacy policy compliance

### 7. Image Management
- Unsplash integration for mock project images
- Optimized image loading with Next.js Image component
- Proper alt texts and lazy loading
- WebP format support with fallbacks

### 8. Performance Optimization
- Code splitting for Three.js components
- Lazy loading for non-critical animations
- Image optimization and CDN usage
- Bundle analysis and optimization

## Design System

### Color Palette
- Follow the attached design images exactly
- Support for light/dark mode themes
- Consistent use of CSS custom properties
- Accessibility-compliant contrast ratios

### Typography
- Geist Sans for headings and body text
- Geist Mono for code and technical content
- Consistent font scale across all breakpoints
- Proper line heights and spacing

### Component Styling
- shadcn/ui component customization
- Tailwind CSS utility classes
- Custom CSS for complex animations
- Consistent spacing and layout patterns

## SEO and Meta Data

### Page Meta Data
```typescript
// Example meta data structure
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

### Structured Data
- Person schema for professional information
- Portfolio/CreativeWork schema for projects
- Organization schema for work experience

## Deployment Considerations

### Build Optimization
- Static generation where possible
- Image optimization enabled
- Bundle analysis configuration
- Performance monitoring setup

### Platform Flexibility
- Vercel-ready configuration
- Netlify compatibility
- Docker support for custom deployments
- Environment-specific configurations

## Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader optimization
- Focus management for SPAs
- Alternative text for all images
- Color contrast validation

## Browser Support

- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
- Progressive enhancement for older browsers
- Three.js fallbacks for unsupported devices
- Mobile browser optimization

## Testing Strategy

- Component unit tests with Jest
- E2E testing with Playwright
- Visual regression testing
- Performance testing with Lighthouse
- Cross-browser compatibility testing

## Content Management

### Mock Data Strategy
- Centralized data files for easy updates
- TypeScript interfaces for type safety
- Separation of content and presentation
- Easy migration path for CMS integration

### Future Scalability
- CMS-ready architecture
- Multi-language support preparation
- Blog section preparation
- Admin panel considerations

## Important Notes

1. **Strictly follow the attached design images**: All UI elements, spacing, colors, and font sizes must match the attached design images exactly
2. **Responsive design**: Ensure excellent user experience across all devices
3. **Performance optimization**: Three.js animations must not impact page loading speed
4. **Accessibility**: Ensure the website is usable by all users
5. **SEO optimization**: Implement proper search engine optimization
6. **Modular development**: Create maintainable and extensible code structure