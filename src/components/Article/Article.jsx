import "./Article.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import Comments from "../Comments/Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="article-section">
          {article.title && (
            <ArticleCard article={article} setArticle={setArticle} />
          )}
          <Comments />
        </section>
      )}
    </>
  );
};

export default Article;
