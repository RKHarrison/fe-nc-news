import "./VoteButton.css";
import { useParams } from "react-router-dom";
import { patchArticle } from "../../utils/api";
import { useState } from "react";
import { FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";

const VoteButton = ({ setArticle }) => {
  const [apiVoteError, setApiVoteError] = useState(false);

  const [storedButtonVote, setStoredButtonVote] = useState(0);
  const [newVote, setNewVote] = useState(0)
  const { article_id } = useParams();


  const handleVoteClick = (buttonVote) => {
    setApiVoteError(false);
    
    if (storedButtonVote === buttonVote) {
      setNewVote(0);
    } else {
      setNewVote(buttonVote);
    }
    setStoredButtonVote(newVote)


    setArticle((currentArticle) => ({
      ...currentArticle,
      votes: currentArticle.votes + (newVote-storedButtonVote),
    }));
    
    patchArticle(article_id, newVote-storedButtonVote).catch(() => {
      setApiVoteError(true);
      setStoredButtonVote((currentVote) => currentVote - buttonVote);
      setArticle((currentArticle) => ({
        ...currentArticle,
        votes: currentArticle.votes + (newVote-storedButtonVote),
      }));
    });
  };

  return (
    <>


      {storedButtonVote >= 0 &&  <FaArrowCircleDown onClick={() => handleVoteClick(-1)}/>}
      {storedButtonVote <= 0 &&  <FaArrowCircleUp onClick={() => handleVoteClick(1)}/>}
      
      {apiVoteError && (
        <section className="error-message">
          Could not register your vote, please try again!
        </section>
      )}
    </>
  );
};

export default VoteButton;
