import { useNavigate } from "react-router-dom";

const Articlecard = ({
  article: {
    title,
    author,
    topic,
    comment_count,
    created_at,
    votes,
    article_id,
  },
}) => {
  const date = new Date(created_at);
  const navigate = useNavigate();
  return (
    <li
      className="ArticleCard"
      onClick={() => {
        navigate(`/articles/article/${article_id}`);
      }}
    >
      <h2>{title}</h2>
      <h3>{topic}</h3>
      <h3>{author}</h3>
      <p>
        {comment_count} {comment_count === 1 ? "comment" : "comments"}
      </p>
      <p>{date.toUTCString()}</p>
      <p>Votes: {votes}</p>
    </li>
  );
};

export default Articlecard;
