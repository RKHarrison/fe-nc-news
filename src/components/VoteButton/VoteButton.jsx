import "./VoteButton.css";
import { useParams } from "react-router-dom";
import { patchArticle } from "../../utils/api";
import { useState } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

const VoteButton = ({ setArticle }) => {
  const [apiVoteError, setApiVoteError] = useState(false);

  const [vote, setVote] = useState(0);
  const { article_id } = useParams();



  const handleVoteClick = (voteButton) => {
    setApiVoteError(false);

    setVote((currentVote) => currentVote + voteButton);
    setArticle((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes + voteButton,
    }));
    
    patchArticle(article_id, voteButton).catch(() => {
      setApiVoteError(true);
      setVote((currentVote) => currentVote - voteButton);
      setArticle((currentArticle) => ({
        ...currentArticle,
        votes: currentArticle.votes - voteButton,
      }));
    });
  };

  return (
    <>


      {vote >= 0 &&  <FaArrowCircleDown onClick={() => handleVoteClick(-1)}/>}
      {vote <= 0 &&  <FaArrowCircleUp onClick={() => handleVoteClick(1)}/>}
      
      {apiVoteError && (
        <section className="error-message">
          Could not register your vote, please try again!
        </section>
      )}
    </>
  );
};

export default VoteButton;
