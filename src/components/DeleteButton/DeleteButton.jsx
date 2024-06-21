import { MdDeleteForever } from "react-icons/md";
import { deleteCommentById } from "../../utils/api";
import { useState } from "react";
import { useParams } from "react-router-dom";

const DeleteButton = ({ comment, comments, setComments }) => {


  const handleClick = (event) => {
    event.preventDefault();
    const backupComments = [...comments];
    setComments((previousComments) => (
      previousComments.filter(
        (previousComment) => previousComment.comment_id !== comment.comment_id
      )
    ));
    deleteCommentById(comment.comment_id).catch((err) => {
      alert("could not delete comment");
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
