import React, { useState } from 'react';

const PropsModify = () => {
  // 1.
  // const user = {
  //   firstName: 'yamada',
  //   lastName: 'taro',
  // };

  // 3.状態として管理してあげないと変更（レンダリング）がされない
  const [user, setUser] = useState({
    firstName: 'yamada',
    lastName: 'taro',
  });

  // 1.通常の変数であればこれはできる
  // user.firstName = user.firstName.toUpperCase();
  // user.lastName = user.lastName.toUpperCase();

  // 2.通常の変数でこれはできない(状態ではなく普通の変数をただ変えているだけでレンダリングも走らないから)
  // const handleClick = () => {
  //   user.firstName = user.firstName.toUpperCase();
  //   user.lastName = user.lastName.toUpperCase();
  // };

  // 3.
  const handleClick = () => {
    setUser({
      ...user,
      firstName: user.firstName.toUpperCase(),
      lastName: user.lastName.toUpperCase(),
    });
  };
  return (
    <div>
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <button onClick={handleClick}>大文字に変更</button>
    </div>
  );
};

export default PropsModify;
