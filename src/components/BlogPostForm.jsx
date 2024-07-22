import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BlogPostForm;
