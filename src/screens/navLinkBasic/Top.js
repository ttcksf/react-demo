import React from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';

const Top = () => {
  // useNavigateで値を受け取るときはuseLocationを使う
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ul>
        {/* アクティブを判定できる */}
        {/* NotFound.jsをリダイレクトに使用できる */}
        <NavLink
          to="/"
          style={({ isActive }) => {
            return isActive ? { color: 'red' } : {};
          }}
        >
          <li>トップ</li>
        </NavLink>
        <NavLink to="/contact">
          <li>お問い合わせ</li>
        </NavLink>
      </ul>
      {location.state.desc}
      {location.state.text}です。
    </div>
  );
};

export default Top;
