import React, { useContext, useEffect, useState } from "react";
import { deleteComment, getUser } from "../../api";
import { UserContext } from "../../contexts/UserContext";

const Comment = ({
  comment: { comment_id, votes, author, body, created_at },
  removeComment,
}) => {
  const [commenter, setCommenter] = useState({});
  const { user } = useContext(UserContext);
  const [isDeleting, setIsDeleteing] = useState(false);
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
      {user.username === commenter.username ? (
        <button
          disabled={isDeleting}
          onClick={() => {
            setIsDeleteing(true);
            deleteComment(comment_id).then(() => {
              setIsDeleteing(false);
              removeComment(comment_id);
            });
          }}
        >
          {isDeleting ? "Deleting" : "Delete"}
        </button>
      ) : (
        ""
      )}
    </li>
  );
};

export default Comment;
