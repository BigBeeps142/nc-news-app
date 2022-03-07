import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://beeps-nc-news.herokuapp.com/api",
});

export const getArticles = (page, limit) => {
  return newsApi.get(`/articles?p=${page}&limit=${limit}`).then((res) => {
    return res.data;
  });
};

export const getArticlesByTopic = (topic, page, limit) => {
  return newsApi
    .get(`/articles?topic=${topic}&p=${page}&limit=${limit}`)
    .then((res) => {
      return res.data;
    });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data;
  });
};
