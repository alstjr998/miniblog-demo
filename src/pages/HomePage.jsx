import { Link } from 'react-router-dom';
import BlogPostList from '../components/BlogPostList';

const HomePage = ({ posts }) => {
  return (
    <div>
      <h1>미니 블로그 데모</h1>
      <Link to="/new">글 작성하기</Link>
      <BlogPostList posts={posts} />
    </div>
  );
};

export default HomePage;
