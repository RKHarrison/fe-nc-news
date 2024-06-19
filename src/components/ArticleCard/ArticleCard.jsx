import "./ArticleCard.css";

import VoteButton from "../VoteButton/VoteButton";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const ArticleCard = ({ article, setArticle }) => {
  const {user} = useContext(UserContext)

  return (
    <article>
      <img src={article.article_img_url} />
      <h2> {article.title}</h2>
      <h3>
        Created by {article.author} on {article.created_at.slice(0, 10)}
      </h3>
      <p>Topic: {article.topic}</p>
      <p>{article.body}</p>
      <section className="article-votes-section">
        <h5>Votes: {article.votes} </h5>
        {user.username ? <VoteButton setArticle={setArticle} /> : <h6>Please sign in to vote</h6>}
      </section>
    </article>
  );
};

export default ArticleCard;
