import { useEffect } from "react";
import BlogDetailItem from "../components/BlogDetailItem";
import { useParams } from "react-router-dom";
import { AppFetchProvider } from "../context/AppFetchProvider";
import Header from "../components/Header";

const BlogDetail = () => {
  return (
    <AppFetchProvider>
      <Header />

      <BlogDetailItem />
    </AppFetchProvider>
  );
};

export default BlogDetail;
