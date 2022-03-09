import React from "react";

const Comment = ({ comment: { votes, author, body, created_at } }) => {
  return (
    <li className="Comment">
      <p className="Comment-Body">{body}</p>
      <p className="Comment-Author">{author}</p>
      <p className="Comment-Date">{new Date(created_at).toUTCString()}</p>
      <p className="Comment-Votes">{votes}</p>
    </li>
  );
};

export default Comment;
