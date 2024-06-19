import { useContext, useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../utils/api";
import "./Comments.css";
import CommentCard from "../CommentCard/CommentCard";
import NewCommentForm from "../NewCommentForm/NewCommentForm";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";

const Comments = () => {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getCommentsByArticleId(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
      setIsLoading(false);
    });
  }, []);

  return (
    <article className="comments-section">
      <h2>Comments...</h2>
      {user.username ? (
        <NewCommentForm setComments={setComments} />
      ) : (
        <h5>Please log in to post a comment...</h5>
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ol className="comment-list">
          {comments.map((comment) => (
            <li key={comment.comment_id}>
              <CommentCard comment={comment} />
            </li>
          ))}
        </ol>
      )}
    </article>
  );
};

export default Comments;
