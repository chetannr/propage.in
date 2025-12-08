export interface PortfolioItem {
  title: string
  description: string
  challenge: string
  solution: string
  results: string[]
  image?: string
  url?: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Law Park Educational Trust',
    description: 'NGO website showcasing 10 years of educational impact',
    challenge: 'Create a compelling website to showcase 10 years of educational work, including timeline, impact stories, and gallery.',
    solution: 'Built a minimal, elegant website with interactive timeline, image gallery, and impact statistics. Focused on storytelling and emotional connection.',
    results: [
      'Lighthouse Performance: 95+',
      'Lighthouse Accessibility: 95+',
      'Lighthouse SEO: 95+',
      'Fast loading, optimized images',
      'Mobile-responsive design',
    ],
  },
  {
    title: 'Sarala Yoga',
    description: 'Yoga studio website with calming, zen-like aesthetic',
    challenge: 'Create a spa-like, calming website that reflects the yoga studio\'s peaceful atmosphere while being functional and conversion-focused.',
    solution: 'Designed with soft colors, elegant typography, and generous white space. Implemented gallery, services, and contact sections with smooth interactions.',
    results: [
      'Lighthouse Performance: 92+',
      'Lighthouse Accessibility: 94+',
      'Lighthouse SEO: 93+',
      'Calming, professional aesthetic',
      'Mobile-optimized experience',
    ],
  },
]

