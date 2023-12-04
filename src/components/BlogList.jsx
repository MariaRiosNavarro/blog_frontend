import BlogItem from "./BlogItem";
import { useFetchContext } from "../context/AppFetchProvider";

const BlogList = () => {
  const { blogs, setBlogs } = useFetchContext();
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
