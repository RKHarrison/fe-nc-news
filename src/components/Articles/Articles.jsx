import "./Articles.css";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { getArticles } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ArticlesHeadlinesCard from "../ArticlesHeadlinesCard/ArticlesHeadlinesCard";
import SortBySelect from "../SortBySelect/SortBySelect";
import Pagination from "../Pagination/Pagitnation";

const Articles = () => {
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    
    const updatedSearchParams = {};
    searchParams.forEach((value, key) => {
      updatedSearchParams[key] = value;
    });

    getArticles(topic, updatedSearchParams)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [topic, searchParams]);

  if (error) {
    return <ErrorComponent error={error} />;
  }
  return (
    <>
      {articles[0] && (
        <section className="sort-by-section">
          <SortBySelect />
        </section>
      )}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="articles-section">
          <div className="grid-wrapper">
            <Pagination />
            <ol>
              {articles[0] && (
                <li key={articles[0].article_id} className="lead-article">
                  <ArticlesHeadlinesCard
                    classname="articles-card"
                    article={articles[0]}
                  />
                </li>
              )}
              {articles.slice(1 - 13).map((article) => (
                <li key={article.article_id} className="headline-article">
                  <ArticlesHeadlinesCard article={article} />
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
    </>
  );
};

export default Articles;
