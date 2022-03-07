import { Link } from "react-router-dom";

const Pagenav = () => {
  const pages = ["Articles"];
  return (
    <div>
      {pages.map((page) => {
        return (
          <Link key={page} to={`/${page.toLowerCase()}`}>
            {page}
          </Link>
        );
      })}
    </div>
  );
};

export default Pagenav;
