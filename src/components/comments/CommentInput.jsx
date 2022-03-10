import React, { useContext, useState } from "react";
import { postComment } from "../../api";
import { UserContext } from "../../contexts/UserContext";

const Commentinput = ({ article_id, setComments }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setNewComment("");
        postComment(article_id, user.username, newComment).then(
          ({ comment }) => {
            setComments((currentComments) => {
              const newComments = [...currentComments];
              newComments.push(comment);
              return newComments;
            });
          }
        );
      }}
    >
      <label htmlFor="commentInput"> New Comment</label>
      <input
        name="commentInput"
        value={newComment}
        type="text"
        onChange={(e) => {
          setNewComment(e.target.value);
        }}
      />
      <button disabled={newComment === ""}>Post</button>
    </form>
  );
};

export default Commentinput;
