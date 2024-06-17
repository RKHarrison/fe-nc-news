import "./Articles.css";
import { getArticles } from "../../utils/api";
import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  return (
    <section className="articles-section">
      {isLoading && <LoadingSpinner />}
      <ol>
        {articles[0] && (
          <li key={articles[0].article_id} className="main-article">
            <img src={articles[0].article_img_url} />
            <h2>{articles[0].title}</h2>
            <h4>Created by {articles[0].author} on {articles[0].created_at.slice(0, 10)}</h4>
            <p>Topic: {articles[0].topic}</p>
              <p>Votes: {articles[0].votes}</p>
          </li>
        )}
        {articles.slice(1).map((article) => (
          <li key={article.article_id} className="norm-article">
              <img src={article.article_img_url} />
              <h3> {article.title}</h3>
              <h4>
                Created by {article.author} on {article.created_at.slice(0, 10)}
              </h4>
              <p>Topic: {article.topic}</p>
              <p>Votes: {article.votes}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Articles;
