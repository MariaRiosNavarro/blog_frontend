import { useFetchContext } from "../context/AppFetchProvider";
import { useRef } from "react";

const BlogForm = () => {
  const { setRefresh } = useFetchContext();

  const allRef = useRef();
  const personalRef = useRef();
  const technologieRef = useRef();
  const artRef = useRef();
  const scienceRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const checkboxes = [
      personalRef,
      allRef,
      technologieRef,
      artRef,
      scienceRef,
    ];

    const formData = new FormData();
    formData.append("title", event.target.title.value);
    formData.append("description", event.target.description.value);
    formData.append("link", event.target.link.files[0]);

    checkboxes.forEach((checkbox) => {
      formData.append(
        "tags",
        checkbox.current.checked ? checkbox.current.value : "" //eventuell hier lieber null
      );
    });

    formData.append("favorite", false);

    fetch("http://localhost:9992/api/articles", {
      method: "POST",
      body: formData,
    }).then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setRefresh((prev) => !prev);
      event.target.reset();
      return response.json();
    });
  };

  return (
    <>
      <div className="card">
        <h2 className="card-title justify-center bg-success p-8 rounded-xl text-black">
          Add your new Article:
        </h2>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="card-body  flex flex-col items-center  p-4"
        >
          <label
            className="text-center text-primary font-extrabold p-4 text-xl"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="px-4 py-2 border-4 border-success rounded-md"
            type="text"
            id="title"
            name="title"
          />
          <label
            className="text-center text-primary font-extrabold p-4 text-xl"
            htmlFor="description"
          >
            Text
          </label>
          <textarea
            className="px-4 py-2 border-4 border-success rounded-md "
            type="text"
            id="description"
            name="description"
          />
          <div className="flex flex-col items-center">
            <label
              className="text-center text-primary font-extrabold p-4 text-xl"
              htmlFor="tags"
            >
              Tags:
            </label>
            <div className="grid grid-cols-3 border-4 border-success rounded-xl m-4 p-4">
              <div className="flex flex-col items-center">
                <input
                  className="toggle toggle-primary"
                  type="checkbox"
                  id="personal"
                  name="tags"
                  value="personal"
                  ref={personalRef}
                />
                <label className="text-primary font-bold" htmlFor="personal">
                  Personal
                </label>
              </div>
              <div className="flex flex-col items-center">
                <input
                  className="toggle toggle-primary"
                  type="checkbox"
                  id="all"
                  name="tags"
                  value="all"
                  ref={allRef}
                />
                <label className="text-primary font-bold" htmlFor="all">
                  All
                </label>
              </div>
              <div className="flex flex-col items-center">
                <input
                  className="toggle toggle-primary"
                  type="checkbox"
                  id="technologie"
                  name="tags"
                  value="technologie"
                  ref={technologieRef}
                />
                <label className="text-primary font-bold" htmlFor="technologie">
                  Technologie
                </label>
              </div>
              <div className="flex flex-col items-center">
                <input
                  className="toggle toggle-primary"
                  type="checkbox"
                  id="art"
                  name="tags"
                  value="art"
                  ref={artRef}
                />
                <label className="text-primary font-bold" htmlFor="art">
                  Art
                </label>
              </div>
              <div className="flex flex-col items-center">
                <input
                  className="toggle toggle-primary"
                  type="checkbox"
                  id="science"
                  name="tags"
                  value="science"
                  ref={scienceRef}
                />
                <label className="text-primary font-bold" htmlFor="science">
                  Science
                </label>
              </div>
            </div>
          </div>
          <label
            className="text-center text-primary font-extrabold p-4 text-xl"
            htmlFor="link"
          >
            Image
          </label>
          <input
            className="file-input file-input-bordered file-input-success w-full max-w-xs"
            type="file"
            id="link"
            name="link"
          />
          <input type="submit" value="save" className="btn btn-primary m-8" />
        </form>
      </div>
    </>
  );
};

export default BlogForm;
