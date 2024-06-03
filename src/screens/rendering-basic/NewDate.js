import React, { useState } from 'react';

const NewDate = () => {
  // 子コンポーネントがレンダリングされても親コンポーネントはレンダリングされない
  const [date, setDate] = useState('');
  console.count('日時が更新されました');
  const newDate = () => {
    setDate(new Date().toString());
  };
  return (
    <div>
      {date}
      <button onClick={() => newDate()}>日時表示</button>
    </div>
  );
};

export default NewDate;
