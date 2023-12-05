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
      <h2>New Post</h2>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className="flex flex-col items-center p-4"
      >
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="description">Text</label>
        <input type="text" id="description" name="description" />
        <div>
          <label className="text-center" htmlFor="tags">
            Tags
          </label>
          <div className="flex flex-col items-center">
            <input
              className="toggle"
              type="checkbox"
              id="personal"
              name="tags"
              value="personal"
              ref={personalRef}
            />
            <label htmlFor="personal">Personal</label>
          </div>
          <div className="flex flex-col items-center">
            <input
              className="toggle"
              type="checkbox"
              id="all"
              name="tags"
              value="all"
              ref={allRef}
            />
            <label htmlFor="all">All</label>
          </div>
          <div className="flex flex-col items-center">
            <input
              className="toggle"
              type="checkbox"
              id="technologie"
              name="tags"
              value="technologie"
              ref={technologieRef}
            />
            <label htmlFor="technologie">Technologie</label>
          </div>
          <div className="flex flex-col items-center">
            <input
              className="toggle"
              type="checkbox"
              id="art"
              name="tags"
              value="art"
              ref={artRef}
            />
            <label htmlFor="art">Art</label>
          </div>
          <div className="flex flex-col items-center">
            <input
              className="toggle"
              type="checkbox"
              id="science"
              name="tags"
              value="science"
              ref={scienceRef}
            />
            <label htmlFor="science">Science</label>
          </div>
        </div>
        <label htmlFor="link">Image</label>
        <input type="file" id="link" name="link" className="flex flex-col" />
        <input type="submit" value="save" />
      </form>
    </>
  );
};

export default BlogForm;
