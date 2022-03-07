import { useEffect, useState } from "react";
import { getArticles, getArticlesByTopic } from "../../api";
import Articlecard from "./ArticleCard";

const Articles = ({
  topic,
  articles,
  setArticles,
  pageInfo: { page, limit },
}) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    if (topic) {
      getArticlesByTopic(topic, page, limit).then((data) => {
        setIsLoading(false);
        setArticles(data.articles);
      });
    } else {
      getArticles(page, limit).then((data) => {
        setIsLoading(false);
        setArticles(data.articles);
      });
    }
  }, [topic, page, limit]);

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
