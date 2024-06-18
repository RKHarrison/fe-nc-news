const ArticlesCard = ({article}) => {
  return (
    <>
      <img src={article.article_img_url} />
      <h2> {article.title}</h2>
      <h3>
        {article.created_at.slice(0, 10)}
      </h3>
      <p>Votes: {article.votes}</p>
    </>
  );
};

export default ArticlesCard;
