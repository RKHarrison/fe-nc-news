import "./NewCommentForm.css";
import { useState } from "react";

// PATCH REQ needs artice_id from useParams
// PATCH REQ needs BODY needs comment 'body' and 'username'
// USERNAME && !hasPOSTED && form

const NewCommentForm = () => {
  const [newComment, setNewComment] = useState({
    username: "tickle122",
    body: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault()

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        {" "}
        Post a comment about this article...
        <input value={newComment.body} name="input-body" required minLength={10} maxLength={60}/>
      </label>
      <button>Post comment!</button>
    </form>
  );
};

export default NewCommentForm;
