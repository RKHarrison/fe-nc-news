import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../utils/api";
import "./Comments.css"
import CommentCard from "../CommentCard/CommentCard";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (article_id) {
      getCommentsByArticleId(article_id).then((commentsFromApi) => {
        setComments(commentsFromApi);
      });
    }
  }, [article_id]);

  return (
    <article className="comments-section">
      <h2>Comments...</h2>
      <ol className="comment-list">
        {comments.map((comment) => (
          <li key={comment.comment_id}>
            <CommentCard comment={comment}/>
          </li>
        ))}
      </ol>
    </article>
  );
};

export default Comments;
