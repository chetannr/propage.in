import Link from 'next/link'
import Card from './Card'

interface DocumentationCardProps {
  title: string
  description: string
  href: string
}

export default function DocumentationCard({ title, description, href }: DocumentationCardProps) {
  return (
    <Card hover>
      <Link href={href} className="block">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-gray-700 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600">
          {description}
        </p>
      </Link>
    </Card>
  )
}

