export interface DocumentationItem {
  title: string
  description: string
  href: string
  category: 'rulebook' | 'design' | 'technical' | 'implementation'
}

export const documentationItems: DocumentationItem[] = [
  {
    title: 'Design Principles',
    description: 'Our approach to minimal, elegant design. Inspired by masters of simplicity and purpose.',
    href: '/our-approach/design-principles',
    category: 'design',
  },
  {
    title: 'Our Process',
    description: 'How we create websites in 7 days. Our proven workflow from planning to deployment.',
    href: '/our-approach/process',
    category: 'rulebook',
  },
  {
    title: 'Quality Standards',
    description: 'Our commitment to SEO, accessibility, and performance. Every website meets these standards.',
    href: '/our-approach/quality-standards',
    category: 'implementation',
  },
  {
    title: 'Technical Stack',
    description: 'Modern technologies we use: Next.js, TypeScript, Tailwind CSS. Why these choices matter.',
    href: '/our-approach/technical-stack',
    category: 'technical',
  },
]

