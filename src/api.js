import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://beeps-nc-news.herokuapp.com/api",
});

export const getArticles = (topic, page, limit) => {
  return newsApi
    .get(`/articles`, {
      params: {
        p: page,
        limit: limit,
        topic: topic,
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
