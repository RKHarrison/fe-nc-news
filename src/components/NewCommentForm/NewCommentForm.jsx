import "./NewCommentForm.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { postCommentByArticleId } from "../../utils/api";

// PATCH REQ needs artice_id from useParams
// PATCH REQ needs BODY needs comment 'body' and 'username'
// USERNAME && !hasPOSTED && form

const NewCommentForm = ({ setComments }) => {
  const [apiCommentError, setApiCommentError] = useState(false);
  const { article_id } = useParams();

  const defaultNewComment = {
    username: "tickle122",
    body: "",
  };
  const [newComment, setNewComment] = useState(defaultNewComment);

  const handleChange = (event) => {
    setNewComment((newComment) => ({
      ...newComment,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    setApiCommentError(false);
    event.preventDefault();

    setComments((comments) => [newComment, ...comments]);
    setNewComment(defaultNewComment);
    postCommentByArticleId(article_id, newComment).catch(() => {
      setApiCommentError(true);
      setNewComment(defaultNewComment);
    });
  };

  return (
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
          maxLength={60}
        />
      </label>
      <button>Post comment!</button>
      {apiCommentError && (
        <section className="error-message">
          Could not register your vote, please try again!
        </section>
      )}
    </form>
  );
};

export default NewCommentForm;
