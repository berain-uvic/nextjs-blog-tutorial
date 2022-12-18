import Link from 'next/link';


async function getPosts() {
  const response = await fetch('http://localhost:3000/api/posts');
  const data = await response.json();

  return data.posts;
}


export default async function Page() {
  const posts = await getPosts();
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <Link href='/posts'> Posts </Link>
      <br />
      {posts.map(({ id, title, date }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}> {title} </Link>
          <p> {date} </p>
        </li>
      ))}

    </div>
  )
}
