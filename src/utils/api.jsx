import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://rh-nc-news.onrender.com/api/",
});

export const postCommentByArticleId = (article_id, newComment) => {
  return ncNewsApi
    .post(`articles/${article_id}/comments`, {
      body: newComment.body,
      username: newComment.author,
    })
    .then(({ data }) => {
      return data.postedComment;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const getArticles = (topic, sort_by, order, p, limit) => {
  return ncNewsApi
    .get("/articles", {params:{topic: topic, sort_by: sort_by, order: order, p:p, limit:limit}})
    .then(({ data }) => {
      return data.articles;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const getArticleById = (article_id) => {
  return ncNewsApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      return data.article;
    })
    .catch((err) => {
      return Promise.reject(err)
    });
};

export const getCommentsByArticleId = (article_id) => {
  return ncNewsApi
    .get(`articles/${article_id}/comments`)
    .then(({ data }) => {
      return data.comments;
    })
    .catch((err) => {
      return Promise.reject(err)
    });
};

export const patchArticle = (article_id, vote) => {
  return ncNewsApi
    .patch(`articles/${article_id}`, { inc_votes: vote })
    .then(({ data }) => {
      return data.patchedArticle;
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};

export const deleteCommentById = (comment_id) => {
  return ncNewsApi
    .delete(`/comments/${comment_id}`)
    .then(() => {
      alert("comment deleted!");
    })
    .catch((err) => {
      return Promise.reject(err);
    });
};
