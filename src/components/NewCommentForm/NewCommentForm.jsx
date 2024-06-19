import "./NewCommentForm.css";
import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { postCommentByArticleId } from "../../utils/api";

const NewCommentForm = ({ setComments }) => {
  const { user } = useContext(UserContext);
  const [apiCommentError, setApiCommentError] = useState(false);
  const [hasPosted, setHasPosted] = useState(false);
  const { article_id } = useParams();

  const defaultNewComment = {
    username: user.username,
    body: "",
  };

  const [newComment, setNewComment] = useState(defaultNewComment);

  const handleChange = (event) => {
    setNewComment((newComment) => ({
      ...newComment,
      [event.target.name]: event.target.value,
    }));
    apiCommentError && setApiCommentError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setHasPosted(true);
    setComments((comments) => [
      { ...newComment, comment_id: `newcomment${comments.length}` },
      ...comments,
    ]);
    setNewComment(defaultNewComment);

    postCommentByArticleId(article_id, newComment).catch(() => {
      setComments((comments) => comments.slice(1));
      setHasPosted(false);
      setApiCommentError(true);
      setNewComment(defaultNewComment);
    });
  };

  return (
    <>
      {!hasPosted && (
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
      )}
    </>
  );
};

export default NewCommentForm;