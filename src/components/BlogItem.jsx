import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const BlogItem = ({ article }) => {
  // let link = "http://localhost:9992/" + article.link;

  // console.log(link);

  return (
    <article className="flex flex-col card w-96 glass border-primary border-4 min-h-[100%]">
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

      <div className="card-body text-gray-100">
        <h2 className="card-title">{article.title}</h2>
        <p className="line-clamp-5">{article.description}</p>
        <div>
          {article.tags.map((tag) => (
            <span
              className={tag ? "badge badge-secondary mr-2" : ""}
              key={uuidv4()}
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/blog/${article.id}`}
          className="card-actions justify-end mt-8"
        >
          <button className="btn btn-accent">READ MORE</button>
        </Link>
      </div>
    </article>
  );
};

export default BlogItem;
