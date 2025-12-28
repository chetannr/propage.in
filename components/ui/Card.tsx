import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const baseClasses = 'bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700'
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow' : ''
  
  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  )
}

