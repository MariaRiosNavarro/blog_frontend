import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();
export const useFetchContext = () => useContext(AppContext);

export let initialCopyOfArticles = [];

export const AppFetchProvider = ({ children }) => {
  const url = "http://localhost:9992/api/articles";
  const [blogs, setBlogs] = useState([]);
  const [refresh, setRefreh] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9992/api/articles")
      .then((response) => response.json())
      .then((data) => {
        setBlogs(data);
        return (initialCopyOfArticles = [...blogs]);
      })
      .catch((err) => console.log("error is:", err));
  }, [refresh]);

  return (
    <AppContext.Provider value={{ blogs, setBlogs, refresh, setRefreh }}>
      {children}
    </AppContext.Provider>
  );
};
