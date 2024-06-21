import "./Article.css";
import ErrorComponent from "../ErrorComponent/ErrorComponent";
import ArticleCard from "../ArticleCard/ArticleCard";
import Comments from "../Comments/Comments";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const Article = () => {
  const [error, setError] = useState(null);
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleFromApi) => {
      setArticle(articleFromApi);
      setIsLoading(false);
    })   .catch((err) => 
      setError(err)
    )
  }, []);

  if (error) {
    return <ErrorComponent error={error}/>
  }
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <section className="article-section">
          <ArticleCard article={article} setArticle={setArticle} />
          <Comments />
        </section>
      )}
    </>
  );
};

export default Article;
