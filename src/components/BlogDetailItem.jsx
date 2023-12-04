import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogDetailItem = ({ article }) => {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <article className="flex flex-col">
      <div>
        <img
          className="max-w-[100%]"
          src={"http://localhost:9992/" + article.link}
          alt={article.title}
        />
      </div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <div>
        {article.tags.map((tag) => (
          <span key={uuidv4()}>{tag}</span>
        ))}
      </div>
      <div onClick={handleFavorite}>{favorite ? "★" : "☆"}</div>
      <Link to="/blog">
        <button className="btn">Back</button>
      </Link>
    </article>
  );
};

export default BlogDetailItem;
