import React, { useEffect, useState } from 'react';

const TitleOne = () => {
  const [count, setCount] = useState(0);

  // カウントに応じてtitleタグの表示が変わる
  useEffect(() => {
    document.title = `カウント ${count}`;
  }, [count]);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      {count}
    </div>
  );
};

export default TitleOne;
