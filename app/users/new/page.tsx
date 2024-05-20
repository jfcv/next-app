'use client'; // <-- client component!
import { useRouter } from 'next/navigation';
import React from 'react'

/**
 * programmatic navigation
 */
const NewUserPage = () => {
  const router = useRouter();

  return (
    <button 
      className='btn btn-primary'
      onClick={() => router.push('/users')}
      >
      Create
    </button>
  )
}

export default NewUserPage