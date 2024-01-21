import React from 'react';
import { useParams } from 'react-router-dom';

const Post = () => {
  // 手動もしくはリンクでパラメーターが変わったら取得できる
  const params = useParams();
  console.log(params);
  return <div>Post {params.id}</div>;
};

export default Post;
