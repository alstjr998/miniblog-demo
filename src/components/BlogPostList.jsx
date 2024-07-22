import { Link } from 'react-router-dom';

const BlogPostList = ({ posts }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index} className="post-list-item">
          <Link to={`/post/${index}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPostList;
