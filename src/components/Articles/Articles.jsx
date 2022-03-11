import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../../api";
import Articlecard from "./ArticleCard";

const Articles = ({ topic, setPageInfo, pageInfo: { page, limit, count } }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setIsLoading(true);

    getArticles(
      topic,
      page,
      limit,
      searchParams.get("sort_by"),
      searchParams.get("order")
    ).then((data) => {
      setIsLoading(false);
      setPageInfo((currentInfo) => {
        const newInfo = { ...currentInfo };
        newInfo.count = data.total_count;
        return newInfo;
      });
      setArticles(data.articles);
    });
  }, [topic, page, limit, count, searchParams]);

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
