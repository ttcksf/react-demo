import React, { useState } from 'react';
// CSSファイルをライブラリのようにインポートすることができる
import '../../App.css';
// 複数のCSSファイルをインポートして上書きすることもできてしまうので注意
import './StyleBasic.css';
import { Lensflare } from 'three/examples/jsm/Addons.js';

const StyleBasic = () => {
  const [isLogin, setIsLogin] = useState(false);
  // 一番簡単に上書きを防ぐにはインラインで指定すること
  return (
    <div>
      StyleBasic
      <h1 style={{ textAlign: 'left' }}>Hello</h1>
      {/* JSX記法ではオブジェクト形式で書くことになっている */}
      <p
        style={{
          textAlign: 'left',
          color: 'red',
        }}
      >
        ダミーテキストです。
      </p>
      {/* インラインCSSは条件つきCSSも書きやすい */}
      <p style={{ color: isLogin ? 'red' : 'blue' }}>ダミーテキストです</p>
    </div>
  );
};

export default StyleBasic;
