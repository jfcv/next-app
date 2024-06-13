'use client'

import { useSession } from 'next-auth/react';
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <nav className='flex bg-slate-200 p-5 space-x-10'>

        <Link href='/'>Next.js</Link>
        
        <Link href='/users'>Users</Link>
        
        <Link href='/products'>Products</Link>

        <Link href='/admin'>Admin</Link>

        <Link href='/images'>Images</Link>

        { status === 'loading' && <span className="loading loading-dots loading-md"></span> }

        { status === 'authenticated' 
            && 
            <>
              <Link 
                  href='https://github.com/jfcv' 
                  className='text-violet-600 underline' 
                  target='_blank'>
                    {session.user?.name || session.user?.email}
              </Link>

              <Link 
              href='/api/auth/signout'
              className='text-rose-600 underline'>
                Sign out
              </Link>
            </>
        }      

        { status === 'unauthenticated' 
            && 
            <Link 
                href='/api/auth/signin'
                className='text-violet-600 underline'>
                  Login
            </Link>
        }
    </nav>
  )
}

export default NavBar