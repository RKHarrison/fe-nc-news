const CommentCard = ({ comment }) => {
  return (
    <>
      <p>{comment.body}</p>
      <h3>{comment.author}</h3>
      <p>comment votes: {comment.votes}</p>
    </>
  );
};

export default CommentCard;