import "./Article.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import Comments from "../Comments/Comments";

const Article = ({ article }) => {
  return (
    <section className="article-section">
      {article.title && <ArticleCard article={article} />}
      <Comments article_id={article.article_id} />
    </section>
  );
};

export default Article;
