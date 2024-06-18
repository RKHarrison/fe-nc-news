import { Link } from "react-router-dom";

const ArticlesCard = ({article}) => {
  return (
    <Link to={`/article/${article.article_id}`}>
      <img src={article.article_img_url} />
      <h2> {article.title}</h2>
      <h3>
        {article.created_at.slice(0, 10)}
      </h3>
      <p>Votes: {article.votes}</p>
    </Link>
  );
};

export default ArticlesCard;
