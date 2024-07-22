import { useParams, Link } from 'react-router-dom';
import BlogPost from '../components/BlogPost';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

const PostPage = ({ posts, comments, addComment }) => {
  const { id } = useParams();
  const post = posts[id];
  const postComments = comments[id] || [];

  const handleAddComment = (comment) => {
    addComment(id, comment);
  };

  if (!post) {
    return <div>글이 없습니다.</div>;
  }

  return (
    <div>
      <Link to="/">뒤로 가기</Link>
      <BlogPost title={post.title} content={post.content} />
      <CommentList comments={postComments} />
      <CommentForm addComment={handleAddComment} />
    </div>
  );
};

export default PostPage;
