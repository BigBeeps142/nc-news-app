import { useEffect, useState } from "react";
import { getArticles } from "../api";
import Articlecard from "./ArticleCard";

const Articles = ({ topic }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((data) => {
      setArticles(data.articles);
    });
  }, [topic]);

  return (
    <ul>
      {articles.map((article) => {
        return <Articlecard key={article.title} article={article} />;
      })}
    </ul>
  );
};

export default Articles;
