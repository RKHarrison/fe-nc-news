import "./ArticlesCard.css"
import { Link } from "react-router-dom";
import { formatDateStamp } from "../Utils/component-utils";

const ArticlesCard = ({article}) => {
  return (
    <Link className="article-card-link" to={`/article/${article.article_id}`}>
      <img src={article.article_img_url} />
      <h2> {article.title}</h2>
      <h3>
        {formatDateStamp(article.created_at)}
      </h3>
      <h4>{article.topic}</h4>
    </Link>
  );
};

export default ArticlesCard;
