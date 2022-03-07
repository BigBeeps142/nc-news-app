import { useState } from "react";
import { useParams } from "react-router-dom";
import Articles from "./Articles";
import Pageinput from "./PageInput";
import Topicbar from "./TopicBar";

const Articlespage = () => {
  const [pageInfo, setPageInfo] = useState({ page: 1, limit: 10, count: 0 });
  const { topic } = useParams();

  const changePage = (inc) => {
    setPageInfo((currentInfo) => {
      const newInfo = { ...currentInfo };
      newInfo.page += inc;
      return newInfo;
    });
  };

  return (
    <div>
      <Topicbar />
      <Pageinput pageInfo={pageInfo} changePage={changePage} />
      <Articles topic={topic} pageInfo={pageInfo} setPageInfo={setPageInfo} />
    </div>
  );
};

export default Articlespage;
