import React from 'react';

const Child = ({ count }) => {
  console.count('子コンポーネントがレンダリング');
  return <span>{count}</span>;
};

export default Child;
