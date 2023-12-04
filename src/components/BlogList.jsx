import BlogItem from "./BlogItem";
import blogs from "../db/blogs";

const BlogList = () => {
  return (
    <main>
      <h2>BlogList</h2>
      <section>
        {blogs.map((article) => (
          <BlogItem key={article.id} article={article} />
        ))}
      </section>
    </main>
  );
};

export default BlogList;
