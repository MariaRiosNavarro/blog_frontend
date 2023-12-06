import BlogList from "../components/BlogList";
import { useState, useEffect, Fragment } from "react";
import { AppFetchProvider } from "../context/AppFetchProvider";
import Header from "../components/Header";

const Blog = () => {
  return (
    <AppFetchProvider>
      <Header />
      <BlogList />
    </AppFetchProvider>
  );
};

export default Blog;
