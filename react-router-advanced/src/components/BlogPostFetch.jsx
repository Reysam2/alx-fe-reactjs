import { useEffect, useState } from "react";
import axios from "axios";
function BlogPostFetch({id}) { 
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      setPost(res.data);
      return res.data;
    }
    if(id) fetchPost();
  }, [id]);

  return (
    <>
      {post && (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
}

export default BlogPostFetch;
