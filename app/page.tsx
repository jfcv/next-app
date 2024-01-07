import Link from "next/link";
import ProductCard from "./components/ProductCard";

/**
 * Client-Side Navigation
 */
export default function Home() {
  return (
    <main>
      <h1 style={{fontWeight: 'bold'}}>Hello World</h1>

      <Link href="/users">Users</Link>

      <ProductCard />
    </main>
  )
}
