import React, { useState } from 'react';
// モジュールCSSを使うこともできる
// import './StyleAdvance.css';
import styles from './StyleAdvance.module.css';

const StyleAdvance = () => {
  const [isError, setIsError] = useState(true);
  // classNameを使った条件つきCSSの書き方
  return (
    <div className={isError ? 'error' : ''}>
      StyleAdvance
      {/* 複数クラスの時はテンプレートリテラルを使う */}
      <p className={`content ${isError ? 'error' : ''}`}>ダミーテキスト</p>
      {/* モジュールCSSを使うとクラス名にユニークな値が追加されて複数ファイルインポートによる衝突や上書きを防ぐことが可能になる */}
      <p className={styles.content}>ダミーテキスト</p>
    </div>
  );
};

export default StyleAdvance;
