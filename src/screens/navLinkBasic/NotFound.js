import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const NotFound = () => {
  // 2.時間差でリダイレクトする
  // useNavigateは画面遷移や別ページへ値を渡したりできる
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      // navigate('/');
      navigate(-1);
    }, 3000);
  }, []);
  return (
    <div>
      {/* 1.そのままリダイレクトする */}
      {/* <Navigate to="/" /> */}
      NotFound
    </div>
  );
};

export default NotFound;
