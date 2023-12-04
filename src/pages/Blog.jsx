import BlogList from "../components/BlogList";
import { useState, useEffect } from "react";
import { AppFetchProvider } from "../context/AppFetchProvider";

const Blog = () => {
  return (
    <AppFetchProvider>
      <h2>Blog</h2>
      <BlogList />
    </AppFetchProvider>
  );
};

export default Blog;
