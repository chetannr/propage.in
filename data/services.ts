export interface Service {
  title: string
  description: string
  features: string[]
}

export const mainService: Service = {
  title: 'Static Website Creation',
  description: 'Complete static website development from design to deployment in 7 days. We specialize in static websites only—no payment gateway integration, but we can help you set up Razorpay payment links.',
  features: [
    '7-day delivery',
    'Static website only (no payment gateway integration)',
    'Razorpay payment link integration support',
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
    description: 'React + TypeScript, modern, maintainable code for static websites',
  },
  {
    title: 'Payment Links',
    description: 'Razorpay payment link integration—we help you onboard to Razorpay and add payment links to your static website',
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

