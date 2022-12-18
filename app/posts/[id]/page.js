export async function generateStaticParams() {
  const response = await fetch('http://localhost:3000/api/posts');
  const data = await response.json();

  const ids = data.posts.map((post) => ({
    id: post.id
  }));

  return ids;
}


async function getPost(id) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`);
  return response.json();
}

export default async function Post({ params, searchParams }) {
  const { id } = params;
  const post = await getPost(id);

  console.log(`Params: ${JSON.stringify(params)}`);

  console.log(`Search Params: ${JSON.stringify(searchParams)}`);

  console.log(`Fetch: ${JSON.stringify(post)}`);

  return (
    <>
      <h1> Blog Post Page </h1>
      ========================================================
      <h1> Params: {params.id} </h1>
      <h1> Search Params: {searchParams.search} </h1>
      ========================================================
      <h1> Id: {post.id} </h1>
      <h1> Title: {post.title} </h1>
      <h1> Date: {post.date} </h1>
    </>
  );
}
