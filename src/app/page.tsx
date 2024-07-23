'use client'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../lib/firebase'
import Listings from '../components/Listings'
import Navbar from '../components/NavBar'
import Link from 'next/link'

const HomePage = () => {
  const [user, loading, error] = useAuthState(auth)

  if (loading) {
    return <p>Loading</p>
  }

  if (error || !user) {
    return (
      <p>
        Please <Link href="/auth/login">Login</Link> or{' '}
        <Link href="/auth/signup">Signup</Link> to view listings
      </p>
    )
  }

  return (
    <div>
      <Navbar />
      <Listings />
    </div>
  )
}

export default HomePage
