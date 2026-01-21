export interface BreadcrumbItem {
  name: string
  url: string
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Predefined breadcrumbs for each route
export const breadcrumbs = {
  '/': [{ name: 'Home', url: 'https://propage.in' }],
  '/about': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'About', url: 'https://propage.in/about' },
  ],
  '/services': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Services', url: 'https://propage.in/services' },
  ],
  '/portfolio': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Portfolio', url: 'https://propage.in/portfolio' },
  ],
  '/our-approach': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Our Approach', url: 'https://propage.in/our-approach' },
  ],
  '/our-approach/design-principles': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Our Approach', url: 'https://propage.in/our-approach' },
    { name: 'Design Principles', url: 'https://propage.in/our-approach/design-principles' },
  ],
  '/our-approach/process': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Our Approach', url: 'https://propage.in/our-approach' },
    { name: 'Process', url: 'https://propage.in/our-approach/process' },
  ],
  '/our-approach/quality-standards': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Our Approach', url: 'https://propage.in/our-approach' },
    { name: 'Quality Standards', url: 'https://propage.in/our-approach/quality-standards' },
  ],
  '/our-approach/technical-stack': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Our Approach', url: 'https://propage.in/our-approach' },
    { name: 'Technical Stack', url: 'https://propage.in/our-approach/technical-stack' },
  ],
  '/process': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Process', url: 'https://propage.in/process' },
  ],
  '/pricing': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Pricing', url: 'https://propage.in/pricing' },
  ],
  '/blog': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Blog', url: 'https://propage.in/blog' },
  ],
  '/contact': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Contact', url: 'https://propage.in/contact' },
  ],
  '/guides': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Guides', url: 'https://propage.in/guides' },
  ],
  '/guides/nameserver-migration': [
    { name: 'Home', url: 'https://propage.in' },
    { name: 'Guides', url: 'https://propage.in/guides' },
    { name: 'Nameserver Migration', url: 'https://propage.in/guides/nameserver-migration' },
  ],
}
