import { useContext } from "react";
import DeleteButton from "../DeleteButton/DeleteButton";
import { UserContext } from "../../Context/UserContext";

const CommentCard = ({ comment, comments, setComments }) => {
  const { user } = useContext(UserContext);
  return (
    <>
      <p>{comment.body}</p>
      <h3>{comment.author}</h3>
      {user.username === comment.author && !String(comment.comment_id).startsWith('tempId') ? (
         <DeleteButton
          comment={comment}
          comments={comments}
          setComments={setComments}
        />
      ) : <></>}
      <p>comment votes: {comment.votes}</p>
    </>
  );
};

export default CommentCard;
