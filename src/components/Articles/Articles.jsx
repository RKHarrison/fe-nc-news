import "./Articles.css";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import { getArticles } from "../../utils/api";
import { useState, useEffect } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ArticlesHeadlinesCard from "../ArticlesHeadlinesCard/ArticlesHeadlinesCard";
import { useParams, useSearchParams } from "react-router-dom";
import SortBySelect from "../SortBySelect/SortBySelect";

const Articles = () => {
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setIsLoading(true);
    const sort_by = searchParams.get("sort_by");
    const order = searchParams.get("order");

    getArticles(topic, sort_by, order)
      .then((articlesFromApi) => {
        setArticles(articlesFromApi);
        setIsLoading(false);
      })
      .catch((err) => 
        setError(err)
      )
        
  }, [topic, searchParams]);


 if (error) {
    return (<ErrorComponent error={error} />)
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
            <ol>
              {articles[0] && (
                <li key={articles[0].article_id} className="lead-article">
                  <ArticlesHeadlinesCard
                    classname="articles-card"
                    article={articles[0]}
                  />
                </li>
              )}
              {articles.slice(1).map((article) => (
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
