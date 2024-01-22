import React from 'react';
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';

const Contact = () => {
  // 検索やフォームを取得するときはuseSearchParamsが必要
  const [params, setParams] = useSearchParams({ q: '' });
  const text = params.get('q');
  const navigate = useNavigate();
  const desc = '検索キーワードは';
  return (
    <div>
      Contact
      <br />
      <ul>
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
      <button onClick={() => navigate(-1)}>戻る</button>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setParams({ q: e.target.value })}
      />
      <button
        onClick={() =>
          navigate('/', {
            state: {
              text,
              desc,
            },
          })
        }
      >
        送信
      </button>
    </div>
  );
};

export default Contact;
