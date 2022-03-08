import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticle } from "../../api";

const Article = () => {
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticle(article_id).then(({ article }) => {
      setIsLoading(false);
      setArticle(article);
    });
  }, [article_id]);
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
    </section>
  );
};

export default Article;
