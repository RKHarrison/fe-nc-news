import "./Articles.css";
import { getArticles } from "../../utils/api";
import { useState, useEffect } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      console.log(articlesFromApi);
    });
  }, []);

  return (
    <section className="articles-section">
      <ol>
        {articles[0] && (
          <li key={articles[0].article_id} className="main-article">
            <img src={articles[0].article_img_url} />
            <h2>{articles[0].title}</h2>
          </li>
        )}
        {articles.slice(1).map((article) => (
          <li key={article.article_id} className="norm-article">
            <img src={article.article_img_url} />
            <h2>{article.title}</h2>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Articles;
