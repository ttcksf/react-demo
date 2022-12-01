import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const UseEffectUser = () => {
  const [user, setUser] = useState({});
  const id = useLocation().pathname.split("/")[2];

  useEffect(() => {
    // let cancel = false;
    //③AbortControllerを使ってもOK
    // const controller = new AbortController();
    // const signal = controller.signal;

    // fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { signal })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     //①状態をキャンセルしないと二重実行される
    //     // setUser(data);
    //     //②変数でキャンセルを管理すると解決する
    //     // if (!cancel) {
    //     //   setUser(data);
    //     // }
    //     setUser(data);
    //   })
    //   .catch((err) => {
    //     //④AbortControllerはそのまま使うとコンソールにエラーが出る
    //     if (err.name === "AbortError") {
    //       console.log("キャンセルしました");
    //     }
    //   });

    //⑤axiosを使うとjsonオブジェクトの処理を省略したり、既存の関数を使ってさらに便利に書けるので、こちらが一般的
    const cancelToken = axios.CancelToken.source();
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`, {
        cancelToken: cancelToken.token,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        if (axios.isCancel(err)) {
          console.log("キャンセルしました");
        }
      });

    return () => {
      // cancel = true;
      // controller.abort();

      cancelToken.cancel();
    };
  }, [id]);
  return (
    <div>
      <p>名前：{user.name}</p>
      <p>ニックネーム：{user.username}</p>
      <p>メールアドレス：{user.email}</p>
      <p>
        <Link to="/user/1">ユーザー１</Link>
      </p>
      <p>
        <Link to="/user/2">ユーザー２</Link>
      </p>
      <p>
        <Link to="/user/3">ユーザー３</Link>
      </p>
    </div>
  );
};

export default UseEffectUser;
