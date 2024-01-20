import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
  let id = 1;
  return (
    <div>
      Posts
      <Link to={`/posts/${id}`}>2024年のお知らせ</Link>
    </div>
  );
};

export default Posts;
