import "./CommentCard.css"
import { useContext } from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import { UserContext } from "../../Context/UserContext";
import { hasTemporaryId } from "../Utils/component-utils";

const CommentCard = ({ comment, comments, setComments }) => {
  const { user } = useContext(UserContext);
  return (
    <section className="comment-card">
      <p>"{comment.body}"</p>
      <h6>by {comment.author}</h6>
      <h6>comment votes: {comment.votes}</h6>
      {user.username === comment.author && !hasTemporaryId(comment) && (
        <DeleteButton
          comment={comment}
          comments={comments}
          setComments={setComments}
        />
      )}
    </section>
  );
};

export default CommentCard;
