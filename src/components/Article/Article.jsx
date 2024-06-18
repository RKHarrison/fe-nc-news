import "./Article.css";
import ArticleCard from "../ArticleCard/ArticleCard";

const Article = ({ article }) => {
  return (
    <section className="article-section">
      {article.title && <ArticleCard article={article} />}
    </section>
  );
};

export default Article;
