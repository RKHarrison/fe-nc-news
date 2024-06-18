import "./VoteButton.css";
import { useParams } from "react-router-dom";
import { patchArticle } from "../../utils/api";
import { useState } from "react";

const VoteButton = ({ setArticle }) => {
  const [vote, setVote] = useState(0);
  const { article_id } = useParams();

  const handleVoteClick = (voteButton) => {
    setArticle((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes + voteButton,
    }));
    setVote((currentVote) => currentVote + voteButton);
    patchArticle(article_id, voteButton);
  };

  return (
    <>
      {vote <= 0 && <button onClick={() => handleVoteClick(1)}>+</button>}
      {vote >= 0 && <button onClick={() => handleVoteClick(-1)}>-</button>}
    </>
  );
};

export default VoteButton;
