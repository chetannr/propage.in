import Link from 'next/link'
import Card from './Card'

interface ApproachCardProps {
  title: string
  description: string
  href: string
}

export default function ApproachCard({ title, description, href }: ApproachCardProps) {
  return (
    <Card hover>
      <Link href={href} className="block">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </Link>
    </Card>
  )
}

