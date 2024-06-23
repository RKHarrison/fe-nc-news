import "./Articles.css";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { getArticles } from "../../utils/api";
import { useState, useEffect } from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
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
  }return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {articles.length ? (
            <>
              <section className="sort-by-section">
                <SortBySelect />
              </section>
              <section className="articles-section">
                <div className="grid-wrapper">
                  <ol>
                    <li key={articles[0].article_id} className="lead-article">
                      <ArticlesHeadlinesCard
                        classname="articles-card"
                        article={articles[0]}
                      />
                    </li>
                    {articles.slice(1, 13).map((article) => (
                      <li key={article.article_id} className="headline-article">
                        <ArticlesHeadlinesCard article={article} />
                      </li>
                    ))}
                  </ol>
                </div>
                <Pagination />
              </section>
            </>
          ) : (
            <section className="articles-section">
              <h2>No articles to display!</h2>
              <Link to='/'>Take me home</Link>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Articles;
