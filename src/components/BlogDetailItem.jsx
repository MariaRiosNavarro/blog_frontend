import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchContext } from "../context/AppFetchProvider";

const BlogDetailItem = () => {
  const [favorite, setFavorite] = useState(false);
  const { blogs } = useFetchContext();
  const { id } = useParams();

  //filter result ist a array with one result, this one and only it is what we need

  const article = blogs.find((blog) => blog.id === id);

  console.log("TEST", article);

  // Handle the case when the article is not found
  if (!article) {
    return <p>Article not found!</p>;
  }

  // const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <>
      <article className="flex flex-col">
        <div>
          <img src={article.link} alt={article.title} />
        </div>
        <div>
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
        </div>
      </article>
    </>
  );
};

export default BlogDetailItem;
