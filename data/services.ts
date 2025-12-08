export interface Service {
  title: string
  description: string
  features: string[]
}

export const mainService: Service = {
  title: 'Website Creation',
  description: 'Complete website development from design to deployment in 7 days.',
  features: [
    '7-day delivery',
    'Full-stack implementation',
    'SEO optimized',
    'Accessibility compliant',
    'Performance optimized',
    'Deployment included',
  ],
}

export const includedServices = [
  {
    title: 'Design',
    description: 'Minimal, elegant design following principles from design masters',
  },
  {
    title: 'Development',
    description: 'React + TypeScript, modern, maintainable code',
  },
  {
    title: 'SEO Implementation',
    description: 'Complete SEO setup: meta tags, structured data, sitemap',
  },
  {
    title: 'Accessibility',
    description: 'WCAG 2.1 AA compliance, keyboard navigation, screen reader support',
  },
  {
    title: 'Performance Optimization',
    description: 'Lighthouse 90+ scores, fast loading, optimized assets',
  },
  {
    title: 'Deployment',
    description: 'Deployed and live, ready for your users',
  },
]

