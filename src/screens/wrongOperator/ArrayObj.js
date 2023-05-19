import React from "react";

const ArrayObj = () => {
  const arr = ["aaa", "bbb", "ccc"];
  // 配列のlengthプロパティは0がデフォルトになっている
  console.log(arr);

  const obj = {
    name: "taro",
    age: 20,
    gender: "male",
  };
  console.log(obj);
  return (
    <>
      {/* {arr.length && arr.map((item, i) => <h1 key={i}>{item}</h1>)} */}

      {/* <div>{0}</div>
      <div>{null}</div>
      <div>{false}</div>
      <div>{undefined}</div> */}
      {/* 配列は1個以上ある時にデータがあると見なす */}
      {/* {arr.length > 0 && arr.map((item, i) => <h1 key={i}>{item}</h1>)} */}

      {/* オブジェクトの場合は特に気にしなくて良い、null,undefined,0,falseもカバーできる */}
      {obj && <h1>{obj.name}</h1>}
    </>
  );
};

export default ArrayObj;
