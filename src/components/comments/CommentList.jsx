import { useEffect, useState } from "react";
import { getCommentsByArticle } from "../../api";
import Comment from "./Comment";
import Commentinput from "./CommentInput";
import Commentwrapper from "./CommentWrapper";

const Commentlist = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [pageInfo, setPageInfo] = useState({ count: 0, page: 1, limit: 10 });
  useEffect(() => {
    getCommentsByArticle(article_id, pageInfo.page, pageInfo.limit).then(
      ({ comments, total_count }) => {
        setComments(comments);
        setPageInfo((currentInfo) => {
          const newInfo = { ...currentInfo };
          newInfo.count = total_count;
          return newInfo;
        });
      }
    );
  }, [article_id, pageInfo.page, pageInfo.limit]);

  const changePage = (inc) => {
    setPageInfo((currentInfo) => {
      const newInfo = { ...currentInfo };
      newInfo.page += inc;
      return newInfo;
    });
  };
  return (
    <>
      <p>{pageInfo.count} comments</p>
      <Commentinput article_id={article_id} setComments={setComments} />
      <Commentwrapper>
        <button
          disabled={pageInfo.page === 1}
          onClick={() => {
            changePage(-1);
          }}
        >
          {"<-"}
        </button>
        <p>{pageInfo.page}</p>
        <button
          disabled={pageInfo.page * pageInfo.limit >= pageInfo.count}
          onClick={() => {
            changePage(1);
          }}
        >
          {"->"}
        </button>
        <ul className="CommentList">
          {comments.map((comment) => {
            return <Comment key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      </Commentwrapper>
    </>
  );
};

export default Commentlist;
