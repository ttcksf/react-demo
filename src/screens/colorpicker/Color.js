import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
// npm install react-color --save
// https://casesandberg.github.io/react-color/
const Color = () => {
  const [color, setColor] = useState('#fff');
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        {show ? '閉じる' : '開く'}
      </button>
      {show && (
        <ChromePicker color={color} onChange={(update) => setColor(update)} />
      )}
    </div>
  );
};

export default Color;
