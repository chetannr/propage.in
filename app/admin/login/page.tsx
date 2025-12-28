'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import LoginForm from '@/components/auth/LoginForm'
import { getCurrentUser } from '@/lib/auth'

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    async function checkIfLoggedIn() {
      const user = await getCurrentUser()
      if (user) {
        router.push('/admin')
      }
    }

    checkIfLoggedIn()
  }, [router])

  return <LoginForm />
}

