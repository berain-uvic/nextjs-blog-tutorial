import Link from 'next/link';

console.log("Hello from the servesr");

export default function Page() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href='/posts'> Posts </Link>
    </div>
  )
}
