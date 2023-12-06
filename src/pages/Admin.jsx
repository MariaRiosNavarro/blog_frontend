import BlogForm from "../components/BlogForm";
import { AppFetchProvider } from "../context/AppFetchProvider";
import Header from "../components/Header";

const Admin = () => {
  return (
    <AppFetchProvider>
      <Header />
      <section>
        <BlogForm />
      </section>
    </AppFetchProvider>
  );
};

export default Admin;
