export default function Post({ params, searchParams }) {
  console.log(`Params: ${JSON.stringify(params)}`);

  console.log(`Search Params: ${JSON.stringify(searchParams)}`);


  return (
    <>
      <h1> Blog Post Page </h1>
      <h1> Params: {params.id}</h1>
      <h1> Search params (?search=): {searchParams.search}</h1>
      <h1> Search params key: {Object.keys(searchParams)}</h1>

      <h1> Search params value: {Object.values(searchParams)}</h1>
    </>
  )

}