import "./ArticlesCard.css";
import { Link } from "react-router-dom";
import { capitaliseString, formatDateStamp } from "../Utils/component-utils";

const ArticlesCard = ({ article }) => {


  return (
    <>
    {article.topic&&
    <Link to={`/article/${article.article_id}`}>
      <img
        src={article.article_img_url}
        alt={`stock picture representing a mock news article titled ${article.title}`}
      />
      <h2 className="headline"> {article.title}</h2>
      <h3>{formatDateStamp(article.created_at)}</h3>
      <h4>{capitaliseString(article.topic)}</h4>
    </Link>
    }
    </>
  );
};

export default ArticlesCard;
