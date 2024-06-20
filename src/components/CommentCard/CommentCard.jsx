import { useContext } from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import { UserContext } from "../../Context/UserContext";
import {hasTemporaryId } from "../Utils/component-utils"

const CommentCard = ({ comment, comments, setComments }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <p>{comment.body}</p>
      <h3>{comment.author}</h3>
      {user.username === comment.author && !hasTemporaryId(comment) ? (
         <DeleteButton
          comment={comment}
          comments={comments}
          setComments={setComments}
        />
      ) : <h5>Uploading your comment...</h5>}
      <p>comment votes: {comment.votes}</p>
    </>
  );
};

export default CommentCard;


function isTemporaryId(comment) {
  return String(comment.comment_id).startsWith('tempId');
}

