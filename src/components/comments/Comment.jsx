import React from "react";

const Comment = ({ comment: { votes, author, body, created_at } }) => {
  return (
    <li>
      <p>{body}</p>
      <p>{author}</p>
      <p>{created_at}</p>
      <p>{votes}</p>
    </li>
  );
};

export default Comment;
