import BlogItem from "./BlogDetailItem";

const BlogList = ({ blogs }) => {
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
