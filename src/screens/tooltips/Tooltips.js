import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
// npm i @tippyjs/react
// https://github.com/atomiks/tippyjs-react

const Tooltips = () => {
  return (
    <div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy content="これはテストです">
          <button>送信</button>
        </Tippy>
      </div>
      <div style={{ paddingBottom: '20px' }}>
        <Tippy
          placement="right"
          content={<span style={{ color: 'red' }}>テスト</span>}
        >
          <button>送信</button>
        </Tippy>
      </div>
    </div>
  );
};

export default Tooltips;
