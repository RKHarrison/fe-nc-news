import "./Articles.css";
import { getArticles } from "../../utils/api";
import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ArticlesCard from "../ArticlesCard/ArticlesCard";
import { useParams, useSearchParams } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const [searchParams] = useSearchParams()

  
  useEffect(() => {
    const sort_by = searchParams.get('sort_by')
    const order = searchParams.get('order')
    setIsLoading(true);
    getArticles(topic, sort_by, order).then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, [topic, searchParams]);

  return (
    <>
      <section className="articles-section">
        <div className="grid-wrapper">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <ol>
              {articles[0] && (
                <li key={articles[0].article_id} className="main-article">
                  <ArticlesCard article={articles[0]} />
                </li>
              )}
              {articles.slice(1).map((article) => (
                <li key={article.article_id} className="norm-article">
                  <ArticlesCard article={article} />
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
    </>
  );
};

export default Articles;
