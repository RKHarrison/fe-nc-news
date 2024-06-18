import "./Articles.css";
import { getArticleById, getArticles } from "../../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ArticlesCard from "../ArticlesCard/ArticlesCard";

const Articles = ({ setArticle }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  const handleArticleClick = (article_id) => {
    setIsLoading(true);
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoading(false);
      navigate(`/article/${article_id}`);
    });
  };

  return (
    <section className="articles-section">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ol>
          {articles[0] && (
            <li
              onClick={() => handleArticleClick(articles[0].article_id)}
              key={articles[0].article_id}
              className="main-article"
            >
              <ArticlesCard article={articles[0]} />
            </li>
          )}
          {articles.slice(1).map((article) => (
            <li
              onClick={() => handleArticleClick(article.article_id)}
              key={article.article_id}
              className="norm-article"
            >
              <ArticlesCard article={article} />
            </li>
          ))}
        </ol>
      )}
    </section>
  );
};

export default Articles;
