import Link from "next/link";
// Save as app/posts/[id]/page.jsx
async function getPostData(id) {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/" + "posts/" + id
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch post #" + id);
  }
  return res.json();
}
// Uses params prop to get value of [id] from path segment
export default async function Post({ params }) {
  // so for /posts/3/, params will be { id:3 }
  const post = await getPostData(params.id);
  const nextPostID = Number(params.id) + 1;

  let prevPostID = Number(params.id) - 1;
  if (prevPostID < 1){
    prevPostID = 1;
  }

  return (
    <>
      <div className="post">
        {post ? (
          <>
            <h3>
              Post #{post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
            <Link href={`/posts/${prevPostID}`}>previous</Link>
            <Link href={`/posts/${nextPostID}`}>next</Link>
          </>
        ) : (
          "Loading ..."
        )}
      </div>
      <Link href="/posts">All Posts</Link>
    </>
  );
} // ++ Try adding Next Post and Previous Post links