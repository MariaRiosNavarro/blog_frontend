import { useEffect } from "react";
import BlogDetailItem from "../components/BlogDetailItem";
import { useParams } from "react-router-dom";
import { AppFetchProvider } from "../context/AppFetchProvider";

const BlogDetail = () => {
  return (
    <AppFetchProvider>
      <h2>BlogDetail</h2>
      <BlogDetailItem />
    </AppFetchProvider>
  );
};

export default BlogDetail;
