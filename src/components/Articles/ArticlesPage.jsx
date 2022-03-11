import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Articles from "./Articles";
import Pageinput from "./PageInput";
import Topicbar from "./TopicBar";

const Articlespage = () => {
  const [pageInfo, setPageInfo] = useState({ page: 1, limit: 10, count: 0 });
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentSearchParams, setCurrentSearchParams] = useState({});

  useEffect(() => {
    setSearchParams(currentSearchParams);
  }, [currentSearchParams]);

  const changePage = (inc) => {
    setPageInfo((currentInfo) => {
      const newInfo = { ...currentInfo };
      newInfo.page += inc;
      return newInfo;
    });
  };

  const changeSearchParams = (key, value) => {
    setCurrentSearchParams((currentParams) => {
      const newParams = { ...currentParams };

      newParams[key] = value;
      return newParams;
    });
  };

  return (
    <div>
      <label htmlFor="sort">Sort:</label>
      <select
        name="sort"
        id="sort"
        onChange={(e) => {
          changeSearchParams("sort_by", e.target.value);
        }}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>

      <label htmlFor="order">Order:</label>

      <select
        name="order"
        id="order"
        onChange={(e) => {
          changeSearchParams("order", e.target.value);
        }}
      >
        <option value="DESC">Decending</option>
        <option value="ASC">Acending</option>
      </select>
      <Pageinput pageInfo={pageInfo} changePage={changePage} />
      <Articles topic={topic} pageInfo={pageInfo} setPageInfo={setPageInfo} />
    </div>
  );
};

export default Articlespage;
