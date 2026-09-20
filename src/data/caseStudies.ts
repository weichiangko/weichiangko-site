export interface CaseStudy {
  slug: string;
  title: string;
  problemStatement: string;
  role: string;
  chips: string[];
  problem: string;
  constraints: string;
  whatIOwned: string;
  tradeoffs: string;
  outcome: string;
  artifacts: Array<{
    type: 'image' | 'video' | 'link';
    url: string;
    alt?: string;
    caption?: string;
  }>;
  heroImage?: string;
  thumbnail?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'mionext',
    title: 'MioNext',
    problemStatement: 'What if a dashcam had to prove what happened—not just record it?',
    role: 'Mobile UI · design–dev bridge',
    chips: ['Mobile UI', 'design–dev bridge', 'iF 2024 team'],
    problem: 'Traditional dashcams record everything but make it nearly impossible to find the critical moments when you need proof for insurance claims or incident analysis. Users struggle with hours of footage, unclear timestamps, and no way to quickly establish causality or context.',
    constraints: 'Limited mobile screen space for complex video timelines; need to work across iOS and Android with consistent UX; must handle real-time GPS and sensor data streams; incident detection algorithms run on-device with limited compute; compliance requirements for insurance evidence.',
    whatIOwned: 'Mobile interface design for iOS and Android apps; design–development handoff documentation and component specifications; collaborated with embedded systems team on sensor data visualization; worked with backend team to define video clip export formats; maintained design system for cross-platform consistency.',
    tradeoffs: 'Chose timeline scrubbing over traditional folder navigation (better for incident review, steeper learning curve); prioritized automatic incident tagging over manual bookmark features (reduced cognitive load but required better detection accuracy); simplified export flow to 3 taps (faster workflow but less customization); used native platform patterns over custom UI (lower visual differentiation but better usability).',
    outcome: 'iF Design Award 2024 (team award for product innovation); shipped to production with MiTAC hardware integration; design system adopted across 3 product lines; reduced average incident review time based on user testing feedback; contributed mobile UI framework that informed subsequent vehicle telematics products.',
    artifacts: [
      {
        type: 'image',
        url: '/images/projects/mionext-interface.jpg',
        alt: 'MioNext mobile interface showing incident timeline',
        caption: 'Incident detection and timeline interface'
      },
      {
        type: 'image',
        url: '/images/projects/mionext-system.jpg',
        alt: 'MioNext design system components',
        caption: 'Cross-platform design system'
      }
    ],
    heroImage: '/images/projects/mionext-hero.jpg',
    thumbnail: '/images/projects/mionext-card.jpg'
  },
  {
    slug: 'visionmax',
    title: 'VisionMax',
    problemStatement: 'What if design and engineering shared one language?',
    role: 'Vue web UI · design system',
    chips: ['Vue web UI', 'design system'],
    problem: 'Fleet management systems require operators to monitor dozens of vehicles in real-time, but existing interfaces scattered critical information across multiple screens and tools. Operators lost context when switching views, design handoffs created implementation drift, and the UI couldn\'t scale to enterprise fleet sizes without performance degradation.',
    constraints: 'Legacy backend API with limited flexibility; 60fps requirement for live video streams and map updates; design token system had to map to existing Vue component library; engineers needed production-ready code, not just Figma files; system had to support white-label customization for different vehicle types.',
    whatIOwned: 'Designed and built the Vue-based web interface; created and maintained the design system with design tokens, component library, and usage guidelines; collaborated with backend team on GraphQL schema design; wrote Vue component implementations that engineers could use directly; established design–dev workflow and documentation standards.',
    tradeoffs: 'Built atomic component system instead of page templates (enabled flexibility but required more assembly work); used design tokens for theming over hardcoded values (added abstraction layer but enabled white-label scaling); chose composition API over options API in Vue (cleaner code but steeper learning curve for some engineers); prioritized keyboard navigation over mouse-only interaction (accessibility win but more complex state management).',
    outcome: 'Design system adopted as company-wide standard for B2B products; engineering team used Vue components directly from design handoff with minimal modification; reduced design-to-production time; established shared vocabulary between design and engineering teams; system scaled to support fleets of 500+ vehicles without UI performance issues.',
    artifacts: [
      {
        type: 'image',
        url: '/images/projects/visionmax-dashboard.jpg',
        alt: 'VisionMax fleet dashboard interface',
        caption: 'Real-time fleet monitoring dashboard'
      },
      {
        type: 'image',
        url: '/images/projects/visionmax-components.jpg',
        alt: 'VisionMax design system',
        caption: 'Design system and component library'
      }
    ],
    heroImage: '/images/projects/visionmax-hero.jpg',
    thumbnail: '/images/projects/visionmax-card.jpg'
  },
  {
    slug: 'edge-ai-surveillance',
    title: 'Edge AI Surveillance System',
    problemStatement: 'What if operators had to catch events in hours of footage—without drowning in it?',
    role: 'Web UI · React · design system',
    chips: ['Web UI', 'React', 'design system', 'Design+Development'],
    problem: 'Security operators monitoring edge AI camera systems face overwhelming amounts of footage with no efficient way to identify critical events. Manual review of hours of video is impractical, and false positive alerts from AI detection create alert fatigue. The system needed to surface relevant events while giving operators confidence in AI-assisted decisions.',
    constraints: 'Edge devices have limited compute for AI inference; network bandwidth restricts continuous high-resolution streaming; operators work in high-stress, time-sensitive environments; system must handle 50+ camera feeds simultaneously; privacy regulations limit what can be stored and for how long; UI must work in 24/7 control room conditions with varied lighting.',
    whatIOwned: 'Designed and developed the React-based web interface for monitoring and event review; built the design system covering event visualization, timeline controls, and multi-camera layouts; implemented AI confidence scoring visualization to help operators assess detection quality; collaborated with ML team on event metadata schema; created operator workflow for event triage, annotation, and escalation.',
    tradeoffs: 'Prioritized event-based navigation over continuous timeline (reduced cognitive load but operators lost some temporal context); showed AI confidence scores prominently (transparency improved trust but required user education); used thumbnail grids instead of full video walls (better overview but delayed detailed inspection); implemented smart notifications with ML filtering (reduced alert fatigue but risked missing edge cases).',
    outcome: 'System deployed for industrial and commercial surveillance applications; qualitative feedback from operators indicated improved workflow efficiency and reduced alert fatigue; design patterns influenced subsequent edge AI product interfaces; React component library reused across multiple surveillance product lines; established UX patterns for human-AI collaboration in high-stakes monitoring contexts.',
    artifacts: [
      {
        type: 'image',
        url: '/images/projects/edge-ai-interface.jpg',
        alt: 'Edge AI surveillance event monitoring interface',
        caption: 'Multi-camera event monitoring and triage'
      },
      {
        type: 'link',
        url: 'https://www.behance.net/gallery/your-project-url',
        alt: 'Behance: Smart AI Camera System',
        caption: 'Full case study on Behance'
      }
    ],
    heroImage: '/images/projects/edge-ai-hero.jpg',
    thumbnail: '/images/projects/i40bs-card.jpg'
  }
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find(cs => cs.slug === slug);
}

export function filterWorkByTags(tags: string[]): CaseStudy[] {
  if (tags.length === 0) return caseStudies;
  
  return caseStudies.filter(cs => 
    tags.some(tag => 
      cs.chips.some(chip => 
        chip.toLowerCase().includes(tag.toLowerCase())
      )
    )
  );
}
