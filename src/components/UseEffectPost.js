import React, { useEffect, useState } from "react";

const UseEffectPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    //クリーンアップ関数がないとブラウザバックしても実行されてしまう
    let cancel = false;
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!cancel) {
          console.log("start");
          setPosts(data);
          console.log(data);
        }
      });

    return () => {
      cancel = true;
    };
  }, []);
  return (
    <div>
      {posts?.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};

export default UseEffectPost;
