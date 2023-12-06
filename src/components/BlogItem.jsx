import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const BlogItem = ({ article }) => {
  // let link = "http://localhost:9992/" + article.link;

  // console.log(link);

  return (
    <article className="flex flex-col card w-96 glass border-primary border-4">
      <figure className="h-[200px] overflow-hidden">
        <img
          className="w-[100%] object-cover"
          src={"http://localhost:9992/" + article.link}
          alt={article.title}
        />
      </figure>
      {/* 
      <figure
        className="bg-fixed bg-[image:var(--img)] bg-cover"
        style={{
          "--img": `url(${link})`,
        }}
      ></figure> */}

      <div className="card-body text-gray-900 ">
        <h2 className="card-title">{article.title}</h2>
        <p className="line-clamp-5">{article.description}</p>
        <p>{article.id}</p>
        <div>
          {article.tags.map((tag) => (
            <span key={uuidv4()}>{tag}</span>
          ))}
        </div>
        <Link to={`/blog/${article.id}`} className="card-actions justify-end">
          <button className="btn btn-accent">READ MORE</button>
        </Link>
      </div>
    </article>
  );
};

export default BlogItem;
