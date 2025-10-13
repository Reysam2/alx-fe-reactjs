import { useParams } from "react-router-dom";
import BlogPostFetch from "./BlogPostFetch";

function BlogPost() {
  const { id } = useParams();

  return (
    <>
      <h1>This is the Blog Page for user</h1>

      <BlogPostFetch id={id} />
    </>
  );
}

export default BlogPost;
