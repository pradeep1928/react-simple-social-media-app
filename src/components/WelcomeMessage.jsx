

export default function WelcomeMessage({getPostsOnClick}) {
  return (
    <center className="m-5"><h1>There is no Post.</h1>
    <button type="button" className="btn btn-primary mt-3" onClick={getPostsOnClick}>Click here to get dummy posts</button>
    </center>
  )
}
