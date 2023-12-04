import BlogList from "../components/BlogList";

const Blog = () => {
  return (
    <>
      <h2>Blog</h2>
      <BlogList blogs={blogs} />
    </>
  );
};

export default Blog;
