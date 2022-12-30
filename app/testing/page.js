import Link from 'next/link';


async function getPosts() {
  const resp = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + '/api/posts', { cache: 'no-store' });
  const data = await resp.json();

  return data;
}


export default async function Page() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <div>
      <h1>Testing API Routes</h1>
      <h1> Posts </h1>
      <br />
      {posts.posts.map(({ id, title, date }) => (
        <li key={id}>
          <Link href={`/posts/${id}`}> {title} </Link>
          <p> {date} </p>
        </li>
      ))}

    </div>
  );
}
