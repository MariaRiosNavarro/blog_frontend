import BlogItem from "./BlogItem";
import { useFetchContext } from "../context/AppFetchProvider";

const BlogList = () => {
  const { blogs, setBlogs } = useFetchContext();
  return (
    <main className="w-screen h-[100%] flex items-center flex-col bg-fixed bg-parallax bg-cover py-8 dark:bg-parallaxDark">
      <section className="flex flex-col md:grid md:grid-cols-2 justify-center items-center gap-8">
        {blogs.map((article) => (
          <BlogItem key={article.id} article={article} />
        ))}
      </section>
    </main>
  );
};

export default BlogList;
