'use client'

import Link from "next/link";
import ProductCard from "./components/ProductCard";
// import { getServerSession } from "next-auth";
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import HeavyComponent from "./components/HeavyComponent"; // -> page.js bundle size 112kb
import { useState } from "react";
import dynamic from "next/dynamic";
import Loader from "./components/Loader";
// Lazy loading
const HeavyComponent = dynamic(
  () => import('./components/HeavyComponent'), // -> page.js bundle size 116kb
  {
    ssr: false,
    loading: () => <Loader />
  }
);

/**
 * Client-Side Navigation
 */
export default function Home() {
  //const session = await getServerSession(authOptions);
  const [isVisible, setVisible] = useState(false);

  return (
    <main>
      <h1 style={{fontWeight: 'bold'}}>
        Hello
        {/* Hello { session && <span className='text-violet-600'>{session.user!.name}</span> } */}
      </h1>

      <Link href="/users">Users</Link>

      <ProductCard />

      <button className="btn mt-5" onClick={() => setVisible(true)}>Show</button>

      <br />

      {isVisible && <HeavyComponent />}
    </main>
  )
}
