import React, { useContext, useState } from "react";
import { postComment } from "../../api";
import { UserContext } from "../../contexts/UserContext";

const Commentinput = ({ article_id }) => {
  const { user } = useContext(UserContext);
  const [newComment, setNewComment] = useState("");
  return (
    <form
      onSubmit={() => {
        postComment(article_id, user.username, newComment);
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
      <button>Post</button>
    </form>
  );
};

export default Commentinput;
