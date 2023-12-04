const BlogForm = () => {
  return (
    <>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
        <label htmlFor="link">Image</label>
        <input type="text" id="link" name="link" />
        <label htmlFor="description">Text</label>
        <input type="text" id="description" name="description" />
        <input type="submit" value="save" />
      </form>
      ;
    </>
  );
};

export default BlogForm;
