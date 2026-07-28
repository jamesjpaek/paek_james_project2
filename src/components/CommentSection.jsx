import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function CommentSection() {

  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const { isLoggedIn, username } = useAuth();

  function handleSubmit() {

    if (comment.trim() === "") return;

    setComments([
      ...comments,
      {
        name: username,
        comment
      }
    ]);

    setComment("");

  }

  return (

    <div className="comments">

      <button
        className="like-btn"
        onClick={() => setLikes(likes + 1)}
      >
        ❤️ Like ({likes})
      </button>

      <h2>Comments</h2>

      {!isLoggedIn ? (

        <p className="login-message">
          Please log in to leave a comment.
        </p>

      ) : (

        <>

          <p className="comment-user">

            Commenting as <strong>{username}</strong>

          </p>

          <textarea
            placeholder="Write a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <button
            className="submit-btn"
            onClick={handleSubmit}
          >
            Submit
          </button>

        </>

      )}

      <h3>Comment List</h3>

      {comments.length === 0 ? (

        <p>No comments yet. Be the first to comment!</p>

      ) : (

        <ul>

          {comments.map((item, index) => (

            <li key={index}>

              <strong>{item.name}</strong>: {item.comment}

            </li>

          ))}

        </ul>

      )}

    </div>

  );

}

export default CommentSection;