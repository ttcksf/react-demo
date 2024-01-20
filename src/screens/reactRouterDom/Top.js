import React from 'react';
import { Link } from 'react-router-dom';

const Top = () => {
  return (
    <div>
      <ul>
        <Link to="/">
          <li>トップ</li>
        </Link>
        <Link to="/contact">
          <li>お問い合わせ</li>
        </Link>
        <Link to="/posts">
          <li>お知らせ</li>
        </Link>
      </ul>
    </div>
  );
};

export default Top;
