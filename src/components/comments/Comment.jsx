import React, { useEffect, useState } from "react";
import { getUser } from "../../api";

const Comment = ({ comment: { votes, author, body, created_at } }) => {
  const [commenter, setCommenter] = useState({});
  useEffect(() => {
    getUser(author).then(({ user }) => {
      setCommenter(user);
    });
  }, [author]);
  return (
    <li className="Comment">
      <p className="Comment-Body">{body}</p>
      <img
        className="Comment-Avatar"
        src={commenter.avatar_url}
        alt={commenter.username}
      />
      <p className="Comment-Author">{commenter.username}</p>
      <p className="Comment-Date">{new Date(created_at).toUTCString()}</p>
      <p className="Comment-Votes">{votes}</p>
    </li>
  );
};

export default Comment;
