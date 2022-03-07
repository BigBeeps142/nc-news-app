import { useState } from "react";
import { useParams } from "react-router-dom";
import Articles from "./Articles";
import Pageinput from "./PageInput";
import Topicbar from "./TopicBar";

const Articlespage = () => {
  const [pageInfo, setPageInfo] = useState({ page: 1, limit: 10, count: 0 });

  const { topic } = useParams();
  return (
    <div>
      <Topicbar />
      <Pageinput pageInfo={pageInfo} setPageInfo={setPageInfo} />
      <Articles topic={topic} pageInfo={pageInfo} setPageInfo={setPageInfo} />
    </div>
  );
};

export default Articlespage;