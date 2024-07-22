import { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>댓글 작성하기 :</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit">댓글 작성</button>
    </form>
  );
};

export default CommentForm;
