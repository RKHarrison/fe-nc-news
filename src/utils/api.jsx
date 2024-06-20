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
      console.log(err);
      return Promise.reject(err);
    });
};

export const getArticles = (topic) => {
  return ncNewsApi
    .get("/articles", {params:{topic}})
    .then(({ data }) => {
      console.log(data.articles);
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

export const deleteCommentById = (comment_id) => {
  return ncNewsApi
    .delete(`/comments/${comment_id}`)
    .then((response) => {
      alert("comment deleted!");
      console.log(response);
    })
    .catch((err) => {
      alert("could not delete comment");
      Promise.reject(err);
    });
};
