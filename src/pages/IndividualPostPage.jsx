import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import CommentSection from "../components/CommentSection";

function IndividualPostPage() {
  const { id } = useParams();

  const post = blogData.find(post => post.id === Number(id));

  if (!post) {
    return <h2>Post not found.</h2>;
  }

  return (
    <main className="blog-container">

      <h2>{post.title}</h2>

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

export default IndividualPostPage;