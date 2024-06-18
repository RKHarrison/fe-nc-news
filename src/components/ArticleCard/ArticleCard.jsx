import "./ArticleCard.css";

import VoteButton from "../VoteButton/VoteButton";

const ArticleCard = ({ article, setArticle }) => {

  return (
    <article>
      <img src={article.article_img_url} />
      <h2> {article.title}</h2>
      <h3>
        Created by {article.author} on {article.created_at.slice(0, 10)}
      </h3>
      <p>Topic: {article.topic}</p>
      <p>{article.body}</p>
      <fieldset>
        Up or down Vote this article!
        <p>Votes: {article.votes}</p>
        <VoteButton setArticle={setArticle} />
      </fieldset>
    </article>
  );
};

export default ArticleCard;
