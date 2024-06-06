import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

/**
 * Client-Side Navigation
 */
export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1 style={{fontWeight: 'bold'}}>
        Hello { session && <span className='text-violet-600'>{session.user!.name}</span> }
      </h1>

      <Link href="/users">Users</Link>

      <ProductCard />
    </main>
  )
}
