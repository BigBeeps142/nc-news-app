import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle, patchArticle } from "../../api";
import Commentlist from "../comments/CommentList";
import Errorpage from "../ErrorPage";

const Article = () => {
  const [article, setArticle] = useState({});
  const [voteInc, setVoteInc] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id)
      .then(({ article }) => {
        setIsLoading(false);
        setArticle(article);
      })
      .catch((err) => {
        setError({ msg: err.response.data.msg, status: err.response.status });
      });
  }, [article_id]);

  const changeVotes = (inc) => {
    setArticle((currentArticle) => {
      const newArticle = { ...currentArticle };
      newArticle.votes += inc;
      return newArticle;
    });
    setVoteInc((currentInc) => {
      return currentInc + inc;
    });
    patchArticle(article_id, inc)
      .then(({ article }) => {
        setArticle(article);
      })
      .catch(() => {
        setArticle((currentArticle) => {
          const newArticle = { ...currentArticle };
          newArticle.votes -= inc;
          return newArticle;
        });
        setVoteInc((currentInc) => {
          return currentInc - inc;
        });
      });
  };

  console.log(error);
  if (error) return <Errorpage component={"Article"} error={error} />;

  return isLoading ? (
    <h2>Loading...</h2>
  ) : (
    <section className="Article">
      <h2 className="Article-Title">{article.title}</h2>
      <h2 className="Article-Topic">{article.topic}</h2>
      <h3 className="Article-Author">by {article.author}</h3>
      <p className="Article-Date">
        {new Date(article.created_at).toUTCString()}
      </p>
      <p className="Article-Body">{article.body}</p>
      <button
        disabled={voteInc === 1}
        onClick={() => {
          changeVotes(1);
        }}
      >
        UP
      </button>
      <p>{article.votes}</p>
      <button
        disabled={voteInc === -1}
        onClick={() => {
          changeVotes(-1);
        }}
      >
        DOWN
      </button>
      <Commentlist article_id={article_id} />
    </section>
  );
};

export default Article;
