import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../utils/api";
import "./Comments.css"
import CommentCard from "../CommentCard/CommentCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    article_id && 
      setIsLoading(true)
      getCommentsByArticleId(article_id).then((commentsFromApi) => {
        setComments(commentsFromApi);
        setIsLoading(false)
      });
  }, [article_id]);

  return (
    <article className="comments-section">
      <h2>Comments...</h2>
      {isLoading? ( <LoadingSpinner/>) : (
      <ol className="comment-list">
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <CommentCard comment={comment}/>
          </li>
        ))}
      </ol>)}
    </article>
  );
};

export default Comments;
