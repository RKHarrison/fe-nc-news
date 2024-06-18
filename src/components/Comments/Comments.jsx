import { useEffect, useState } from "react";
import { getCommentsByArticleId } from "../../utils/api";
import "./Comments.css"

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
      <ol>
        {comments.map((comment) => (
          <li>
        
          </li>
        ))}
      </ol>
    </article>
  );
};

export default Comments;
