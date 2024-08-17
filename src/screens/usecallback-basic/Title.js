import React from 'react';

const Title = () => {
  console.count('タイトルです');

  return (
    <div>
      <h1>カウンターアプリ</h1>
    </div>
  );
};

// export default Title;
export default React.memo(Title);
