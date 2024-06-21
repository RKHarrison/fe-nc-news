import "./ArticleCard.css";

import VoteButton from "../VoteButton/VoteButton";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { capitaliseString, formatDateStamp } from "../Utils/component-utils";

const ArticleCard = ({ article, setArticle }) => {
  const { user } = useContext(UserContext);

  return (
    <article>
      <p>Topic: {capitaliseString(article.topic)}</p>
      <img
        src={article.article_img_url}
        alt={`stock picture representing a mock news article titled ${article.title}`}
      />
      <h2> {article.title}</h2>
      <h3>{formatDateStamp(article.created_at)}</h3>
      <h4>Created by {article.author}</h4>
      <p>{article.body}</p>
      <section className="article-votes-section">
        <h5>Votes: {article.votes} </h5>
        {user.username ? (
          <VoteButton setArticle={setArticle} />
        ) : (
          <h6>Please sign in to vote</h6>
        )}
      </section>
    </article>
  );
};

export default ArticleCard;
