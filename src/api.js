import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://beeps-nc-news.herokuapp.com/api",
});

export const getArticles = (topic, page, limit, sort, order) => {
  console.log(sort);
  console.log(order);
  return newsApi
    .get(`/articles`, {
      params: {
        p: page,
        limit: limit,
        topic: topic,
        sort_by: sort,
        order: order,
      },
    })
    .then((res) => {
      return res.data;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data;
  });
};

export const getArticle = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const patchArticle = (article_id, inc_votes) => {
  return newsApi.patch(`/articles/${article_id}`, { inc_votes }).then((res) => {
    return res.data;
  });
};

export const getCommentsByArticle = (article_id, page, limit) => {
  return newsApi
    .get(`/articles/${article_id}/comments`, {
      params: { p: page, limit: limit },
    })
    .then((res) => {
      return res.data;
    });
};

export const getUser = (username) => {
  return newsApi.get(`/users/${username}`).then((res) => {
    return res.data;
  });
};

export const postComment = (article_id, username, body) => {
  return newsApi
    .post(`/articles/${article_id}/comments`, { username, body })
    .then((res) => {
      return res.data;
    });
};
