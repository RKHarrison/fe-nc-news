import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://rh-nc-news.onrender.com/api/",
});

export const getArticles = () => {
  return ncNewsApi
    .get("/articles")
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getArticleById = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getCommentsByArticleId = (article_id) => {
  return ncNewsApi
    .get(`articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const patchArticle = (article_id, vote) => {
  return ncNewsApi
    .patch(`articles/${article_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.patchedArticle;
    })
    .catch((err) => {
      if (err.response?.status === 404) {
        console.error(
          `Could not find article with id=${article_id} for vote patch request`
        );
      }
      console.error(err);
      return Promise.reject(err);
    });
};
