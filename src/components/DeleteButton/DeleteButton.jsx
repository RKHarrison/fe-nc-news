import { MdDeleteForever } from "react-icons/md";
import { deleteCommentById } from "../../utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DeleteButton = ({ comment, comments, setComments }) => {
  const { article_id } = useParams();
  const [backupComments, setBackupComments] = useState({});

  const handleClick = (event) => {
    event.preventDefault();
    setBackupComments([...comments]);
    setComments((previousComments) => (
      previousComments.filter(
        (previousComment) => previousComment.comment_id !== comment.comment_id
      )
    ));
    deleteCommentById(comment.comment_id).catch((err) => {
      setComments(backupComments);
    });
  };

  return (
    <button onClick={handleClick} className="delete-button">
      Delete your comment...
      <MdDeleteForever className="delete-icon" />
    </button>
  );
};

export default DeleteButton;
