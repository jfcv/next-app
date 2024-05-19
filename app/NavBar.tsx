import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav className='flex bg-slate-200 p-5'>
        <Link href='/' className='mr-5'>Next.js</Link>
        <Link href='/users' className='mr-5'>Users</Link>
        <Link href='/products' className='mr-5'>Products</Link>
        <Link href='/admin' className='mr-5'>Admin</Link>
    </nav>
  )
}

export default NavBar