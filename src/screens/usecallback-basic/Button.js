import React from 'react';

const Button = ({ children, handleFunction }) => {
  console.count('ボタンです');

  return <button onClick={handleFunction}>{children}</button>;
};

// export default Button;
export default React.memo(Button);
