export interface GuideItem {
  title: string
  description: string
  href: string
  category: 'migration' | 'setup' | 'troubleshooting' | 'configuration' | 'general'
}

export const guideItems: GuideItem[] = [
  {
    title: 'Domain Nameserver Migration: GoDaddy to Cloudflare',
    description: 'Complete step-by-step training document for migrating a domain\'s nameservers from GoDaddy to Cloudflare. Even someone with no technical background can follow these steps.',
    href: '/guides/nameserver-migration',
    category: 'migration',
  },
]
