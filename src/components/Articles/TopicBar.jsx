import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../../api";

const Topicbar = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    getTopics().then(({ topics }) => {
      setTopics(topics);
    });
  }, []);
  return (
    <div>
      <Link to="/articles">All</Link>
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/articles/${topic.slug}`}>
            {topic.slug}
          </Link>
        );
      })}
    </div>
  );
};

export default Topicbar;
