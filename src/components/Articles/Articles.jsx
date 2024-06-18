import "./Articles.css";
import { getArticleById, getArticles } from "../../utils/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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
              <img src={articles[0].article_img_url} />
              <h2> {articles[0].title}</h2>
              <h3>
                Created by {articles[0].author} on
                {articles[0].created_at.slice(0, 10)}
              </h3>
              <p>Topic: {articles[0].topic}</p>
              <p>Votes: {articles[0].votes}</p>
            </li>
          )}
          {articles.slice(1).map((article) => (
            <li
              onClick={() => handleArticleClick(article.article_id)}
              key={article.article_id}
              className="norm-article"
            >
              <img src={article.article_img_url} />
              <h2> {article.title}</h2>
              <h3>
                Created by {article.author} on {article.created_at.slice(0, 10)}
              </h3>
              <p>Topic: {article.topic}</p>
              <p>Votes: {article.votes}</p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
};

export default Articles;
