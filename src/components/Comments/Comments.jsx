import { useContext, useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../utils/api";
import "./Comments.css";
import CommentCard from "../CommentCard/CommentCard";
import NewCommentForm from "../NewCommentForm/NewCommentForm";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { useParams } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import { hasTemporaryId } from "../Utils/component-utils";

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
        comments.every((comment) => !hasTemporaryId(comment)) ? (
          <NewCommentForm comments={comments} setComments={setComments} />
        ) : (
          <p>Loading your comment...</p>
        )
      ) : (
        <h5>Please log in to post a comment...</h5>
      )}

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ol className="comment-list">
          {comments.length ? (
            comments.map((comment) => (
              <li key={comment.comment_id}>
                <CommentCard
                  className="comment"
                  comment={comment}
                  comments={comments}
                  setComments={setComments}
                />
              </li>
            ))
          ) : (
            <h5>No comments to display, be the first to post about this!</h5>
          )}
        </ol>
      )}
    </article>
  );
};
export default Comments;
