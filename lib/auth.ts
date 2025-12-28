import { supabase } from './supabase'

const ALLOWED_EMAIL = 'propagetech@gmail.com'

export interface AuthError {
  message: string
}

export async function signIn(email: string, password: string) {
  if (!supabase) {
    throw new Error('Supabase is not configured')
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw error
  }

  // Verify email is allowed
  if (data.user?.email !== ALLOWED_EMAIL) {
    // Sign out if email doesn't match
    await supabase.auth.signOut()
    throw new Error('Access denied. Only authorized users can access this page.')
  }

  return data
}

export async function signOut() {
  if (!supabase) {
    return
  }

  const { error } = await supabase.auth.signOut()
  if (error) {
    throw error
  }
}

export async function getCurrentUser() {
  if (!supabase) {
    return null
  }

  const { data: { user }, error } = await supabase.auth.getUser()
  
  if (error || !user) {
    return null
  }

  // Verify email is allowed
  if (user.email !== ALLOWED_EMAIL) {
    return null
  }

  return user
}

export async function getSession() {
  if (!supabase) {
    return null
  }

  const { data: { session }, error } = await supabase.auth.getSession()
  
  if (error || !session) {
    return null
  }

  // Verify email is allowed
  if (session.user.email !== ALLOWED_EMAIL) {
    return null
  }

  return session
}

export function checkEmailAccess(email: string | null | undefined): boolean {
  return email === ALLOWED_EMAIL
}

export async function requireAuth() {
  const user = await getCurrentUser()
  if (!user) {
    return null
  }
  return user
}

