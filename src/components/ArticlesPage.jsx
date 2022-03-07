import { useParams } from "react-router-dom";
import Articles from "./Articles";
import Topicbar from "./TopicBar";

const Articlespage = () => {
  const { topic } = useParams();
  return (
    <div>
      <Topicbar />
      <Articles topic={topic} />
    </div>
  );
};

export default Articlespage;
