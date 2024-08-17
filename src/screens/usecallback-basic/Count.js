import React from 'react';

const Count = ({ count }) => {
  console.count('カウントです');

  return <span>{count}</span>;
};

// export default Count;
export default React.memo(Count);
