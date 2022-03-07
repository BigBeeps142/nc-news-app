import { useState } from "react";
import { useParams } from "react-router-dom";
import Articles from "./Articles";
import Pageinput from "./PageInput";
import Topicbar from "./TopicBar";

const Articlespage = () => {
  const [pageInfo, setPageInfo] = useState({ page: 1, limit: 10 });
  const [articles, setArticles] = useState([]);
  const { topic } = useParams();
  return (
    <div>
      <Topicbar />
      <Pageinput
        pageInfo={pageInfo}
        setPageInfo={setPageInfo}
        articles={articles}
      />
      <Articles
        topic={topic}
        pageInfo={pageInfo}
        setArticles={setArticles}
        articles={articles}
      />
    </div>
  );
};

export default Articlespage;
