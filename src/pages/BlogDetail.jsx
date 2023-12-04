import BlogItem from "../components/BlogItem";
import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { id } = useParams();

  return (
    <>
      <h2>BlogDetail</h2>
      <BlogItem />
    </>
  );
};

export default BlogDetail;
