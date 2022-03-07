import { useEffect, useState } from "react";
import { getArticles, getArticlesByTopic } from "../api";
import Articlecard from "./ArticleCard";

const Articles = ({ topic }) => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    if (topic) {
      getArticlesByTopic(topic).then((data) => {
        setIsLoading(false);
        setArticles(data.articles);
      });
    } else {
      getArticles().then((data) => {
        setIsLoading(false);
        setArticles(data.articles);
      });
    }
  }, [topic]);

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <ul className="ArticleList">
      {articles.map((article) => {
        return <Articlecard key={article.title} article={article} />;
      })}
    </ul>
  );
};

export default Articles;
