import "./NewCommentForm.css";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { postCommentByArticleId } from "../../utils/api";

const NewCommentForm = ({ comments, setComments }) => {
  const { user } = useContext(UserContext);
  const [apiCommentError, setApiCommentError] = useState(false);
  const { article_id } = useParams();
  const [hasPosted, setHasPosted] = useState(false);
  const blankNewComment = {
    author: user.username,
    body: "",
  };

  const [newComment, setNewComment] = useState(blankNewComment);

  const handleChange = (event) => {
    setNewComment((newComment) => ({
      ...newComment,
      [event.target.name]: event.target.value,
    }));
    apiCommentError && setApiCommentError(false);
    setHasPosted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasPosted(true);
    setComments((comments) => [
      { ...newComment, comment_id: `tempId${Date.now()}` },
      ...comments,
    ]);
    setNewComment(blankNewComment);

    postCommentByArticleId(article_id, newComment)
      .then(({ comment_id }) => {
        setComments((comments) => {
          return comments.map((comment) =>
            String(comment.comment_id).startsWith("temp")
              ? { ...comment, comment_id: comment_id }
              : comment
          );
        });
      })
      .catch(() => {
        setComments((comments) => comments.slice(1));
        setHasPosted(false);
        setApiCommentError(true);
        setNewComment(blankNewComment);
      });
  };

  return (
    <>
      {hasPosted && <h5>Thanks for your comment!</h5>}
      <form onSubmit={handleSubmit}>
        <label>
          Post a comment about this article...
          <input
            value={newComment.body}
            onChange={handleChange}
            name="body"
            type="text"
            required
            minLength={10}
            maxLength={600}
          />
        </label>
        <button>Post comment!</button>
        {apiCommentError && (
          <section className="error-message">
            Could not post your comment, please try again!
          </section>
        )}
      </form>
    </>
  );
};

export default NewCommentForm;
