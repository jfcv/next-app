import Link from "next/link";

/**
 * Client-Side Navigation
 */
export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
    </main>
  )
}
