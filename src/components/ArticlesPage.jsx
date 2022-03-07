import { useParams } from "react-router-dom";
import Articles from "./Articles";

const Articlespage = () => {
  const { topic } = useParams();
  return (
    <div>
      <Articles topic={topic} />
    </div>
  );
};

export default Articlespage;
