import "./VoteButton.css";
import { useParams } from "react-router-dom";
import { patchArticle } from "../../utils/api";
import { useEffect, useState } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

const VoteButton = ({ setArticle }) => {
  const [apiVoteError, setApiVoteError] = useState(false);
  const [storedVote, setStoredVote] = useState(0);
  const { article_id } = useParams();


  const handleVoteClick = (buttonVote) => {
    setApiVoteError(false);

    const vote = storedVote === buttonVote ? 0 : buttonVote;
    setStoredVote(vote);

    setArticle((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes + (vote - storedVote),
    }));

    patchArticle(article_id, vote - storedVote).catch(() => {
      setApiVoteError(true);
      setStoredVote((currentVote) => currentVote - buttonVote);
      setArticle((currentArticle) => ({
        ...currentArticle,
        votes: currentArticle.votes + (vote - storedVote),
      }));
    });
  };

  return (
    <>
      <FaArrowCircleDown
        className={storedVote === -1 ? "active-btn" : ""}
        onClick={() => handleVoteClick(-1)}
      />
      <FaArrowCircleUp
        className={storedVote === 1 ? "active-btn" : ""}
        onClick={() => handleVoteClick(1)}
      />

      {apiVoteError && (
        <section className="error-message">
          Could not register your vote, please try again!
        </section>
      )}
    </>
  );
};

export default VoteButton;
