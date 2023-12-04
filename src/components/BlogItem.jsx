import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const BlogItem = ({ article }) => {
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
      <p className="line-clamp-5">{article.description}</p>
      <div>
        {article.tags.map((tag) => (
          <span key={uuidv4()}>{tag}</span>
        ))}
      </div>
      <Link to={`/detail/${article.id}`}>
        <button className="btn">READ MORE</button>
      </Link>
    </article>
  );
};

export default BlogItem;
