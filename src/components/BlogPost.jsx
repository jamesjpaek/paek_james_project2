import CommentSection from "./CommentSection";
import { Link } from "react-router-dom";

function BlogPost({ post }) {
  return (
    <main className="blog-container">

      <h2>
        <Link to={`/post/${post.id}`}>
          {post.title}
        </Link>
      </h2>

      <p>{post.content}</p>

      <p>
        <strong>Author:</strong> {post.author}
      </p>

      <p>
        <strong>Date:</strong> {post.date}
      </p>

      <CommentSection />

    </main>
  );
}

export default BlogPost;