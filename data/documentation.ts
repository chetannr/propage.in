export interface DocumentationItem {
  title: string
  description: string
  href: string
  category: 'rulebook' | 'design' | 'technical' | 'implementation'
}

export const documentationItems: DocumentationItem[] = [
  {
    title: 'Website Creation Rulebook',
    description: 'Complete checklist and workflow for creating websites. 7-day process, quality gates, and best practices.',
    href: '/documentation/rulebook',
    category: 'rulebook',
  },
  {
    title: 'Design Principles',
    description: 'Minimal elegance principles inspired by Adam Wathan, Steve Schoger, Jony Ive, Marc Newson, and Elon Musk.',
    href: '/documentation/design-principles',
    category: 'design',
  },
  {
    title: 'Technical Stack Standards',
    description: 'Standardized technology choices: Next.js, TypeScript, Tailwind CSS, and deployment strategies.',
    href: '/documentation/technical-stack',
    category: 'technical',
  },
  {
    title: 'SEO Checklist',
    description: 'Complete SEO implementation guide: meta tags, structured data, sitemaps, and optimization techniques.',
    href: '/documentation/seo-checklist',
    category: 'implementation',
  },
  {
    title: 'Accessibility Standards',
    description: 'WCAG 2.1 AA compliance guide: semantic HTML, ARIA, keyboard navigation, and screen reader support.',
    href: '/documentation/accessibility-standards',
    category: 'implementation',
  },
  {
    title: 'Performance Standards',
    description: 'Performance optimization targets and techniques: Lighthouse 90+, Core Web Vitals, and optimization strategies.',
    href: '/documentation/performance-standards',
    category: 'implementation',
  },
  {
    title: 'Deployment Standards',
    description: 'Deployment procedures and best practices: GitHub Pages, static exports, and CI/CD workflows.',
    href: '/documentation/deployment-standards',
    category: 'technical',
  },
]

