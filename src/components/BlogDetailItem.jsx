import { v4 as uuidv4 } from "uuid";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useFetchContext } from "../context/AppFetchProvider";

const BlogDetailItem = () => {
  const [favorite, setFavorite] = useState(false);
  const [messageDelete, setMessageDelete] = useState(null);
  const [messageEdit, setMessageEdit] = useState(null);
  const [edit, setEdit] = useState(false);
  // const [favorite, setFavorite] = useState(false);

  //edit
  const titleRef = useRef();
  const descriptionRef = useRef();

  //from AppFetchProvider

  const { blogs, setRefresh } = useFetchContext();
  const { id } = useParams();

  //find the article from the PROVIDER

  const article = blogs.find((blog) => blog.id === id);

  // Handle the case when the article is not found
  if (!article) {
    return <p>Article not found!</p>;
  }

  const handleFavorite = () => {
    setFavorite((prev) => !prev);
  };

  const saveBlog = async () => {
    try {
      const form = new FormData();
      form.append("id", id);
      form.append("title", titleRef.current.innerText);
      form.append("description", descriptionRef.current.innerText);
      const response = await fetch("http://localhost:9992/api/articles", {
        method: "PUT",
        body: form,
      });
      const resJson = await response.json();
      setEdit(false);
      setMessageEdit(resJson.message);
      setTimeout(() => {
        setMessageEdit(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to delete article:", error.message);
    }
  };

  const deleteBlog = async () => {
    try {
      const response = await fetch("http://localhost:9992/api/articles", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      const resJson = await response.json();
      setMessageDelete(resJson.message);
    } catch (error) {
      console.error("Failed to delete article:", error.message);
    }
  };

  const editBlog = () => {
    let id = article.id;
    setEdit((prev) => !prev);
  };

  return (
    <div className="flex justify-center  w-screen h-screen">
      {messageDelete ? (
        <div className="flex flex-col gap-8 items-center h-screen w-screen pt-8">
          <Link to="/blog" className="card-actions justify-start p-4">
            <button className="btn btn-accent">Back</button>
          </Link>
          <p className="px-8 py-4  rounded-xl  bg-success text-4xl">
            {messageDelete}
          </p>
        </div>
      ) : (
        <article className="card w-[95%] max-w-[700px] max-h-[60%] glass border-primary m-8">
          <Link to="/blog" className="card-actions justify-start p-4">
            <button className="btn btn-accent">Back</button>
          </Link>
          <figure className="h-[300px] w-[100%] overflow-hidden">
            <img
              className="w-[100%] object-cover"
              src={"http://localhost:9992/" + article.link}
              alt={article.title}
            />
          </figure>
          <div className="card-body flex-grow-0 h-auto relative ">
            <h2
              ref={titleRef}
              contentEditable={edit}
              className={`card-title  py-2 px-1  rounded-sm ${
                edit && "border border-red-400 w-[80%]"
              }`}
            >
              {article.title}
            </h2>
            <p
              ref={descriptionRef}
              contentEditable={edit}
              className={`py-2 px-1  rounded-sm ${
                edit && "border border-red-400 w-[80%]"
              }`}
            >
              {article.description}
            </p>

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
            <div
              className="absolute right-10 text-3xl"
              onClick={handleFavorite}
            >
              {favorite ? "★" : "☆"}
            </div>
            <div className="mt-8 flex justify-center gap-8">
              {edit ? (
                <button className="btn btn-primary" onClick={saveBlog}>
                  Save
                </button>
              ) : (
                <button className="btn btn-primary" onClick={editBlog}>
                  Edit
                </button>
              )}

              <button className="btn btn-accent" onClick={deleteBlog}>
                Delete
              </button>
            </div>
            {messageEdit && (
              <p className="px-8 py-4  rounded-xl  bg-success text-4xl">
                {messageEdit}
              </p>
            )}
          </div>
        </article>
      )}
    </div>
  );
};

export default BlogDetailItem;
