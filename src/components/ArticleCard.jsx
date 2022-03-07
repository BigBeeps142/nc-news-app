const Articlecard = ({
  article: { title, author, topic, comment_count, created_at, votes },
}) => {
  const date = new Date(created_at);
  return (
    <li className="ArticleCard">
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
