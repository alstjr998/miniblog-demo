import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewPostPage from './pages/NewPostPage';
import PostPage from './pages/PostPage';
import './index.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState({});

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const addComment = (postId, comment) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), comment],
    }));
  };

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage posts={posts} />} />
        <Route path="/new" element={<NewPostPage addPost={addPost} />} />
        <Route
          path="/post/:id"
          element={<PostPage posts={posts} comments={comments} addComment={addComment} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
