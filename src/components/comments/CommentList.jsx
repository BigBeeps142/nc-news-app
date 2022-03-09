import { useEffect, useState } from "react";
import { getCommentsByArticle } from "../../api";
import Comment from "./Comment";
import Commentwrapper from "./CommentWrapper";

const Commentlist = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getCommentsByArticle(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [article_id]);
  return (
    <Commentwrapper>
      <ul>
        {comments.map((comment) => {
          return <Comment key={comment.comment_id} comment={comment} />;
        })}
      </ul>
    </Commentwrapper>
  );
};

export default Commentlist;
