
const CommentList = ({ comments }) => {
  return (
    <div>
      <h3>댓글</h3>
      {comments.length === 0 ? (
        <p>댓글이 없습니다.</p>
      ) : (
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommentList;
