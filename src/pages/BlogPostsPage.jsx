import BlogPost from "../components/BlogPost";
import blogData from "../data/blogData";

function BlogPostsPage() {
  return (
    <>
      {blogData.map(post => (
        <BlogPost
          key={post.id}
          post={post}
        />
      ))}
    </>
  );
}

export default BlogPostsPage;