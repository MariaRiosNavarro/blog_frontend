import BlogForm from "../components/BlogForm";
import { AppFetchProvider } from "../context/AppFetchProvider";

const Admin = () => {
  return (
    <AppFetchProvider>
      <section>
        <BlogForm />
      </section>
    </AppFetchProvider>
  );
};

export default Admin;
