import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex bg-slate-200 p-5 space-x-10'>
        <Link href='/'>Next.js</Link>
        <Link href='/users'>Users</Link>
        <Link href='/products'>Products</Link>
        <Link href='/admin'>Admin</Link>
        <Link href='/api/auth/signin'>Login</Link>
    </nav>
  )
}

export default NavBar