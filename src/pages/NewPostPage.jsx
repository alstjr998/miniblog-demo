import BlogPostForm from '../components/BlogPostForm';

const NewPostPage = ({ addPost }) => {
  return (
    <div>
      <h1>Write a new post</h1>
      <BlogPostForm addPost={addPost} />
    </div>
  );
};

export default NewPostPage;
