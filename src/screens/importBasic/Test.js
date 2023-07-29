import React from "react";

// const Test = () => {
//   return <div>Test</div>;
// };

const num = 100;
const str = "hello";

// この書き方もある
// export default function Test() {
//   return <div>Test</div>;
// }
// この書き方だとdefault出ないからエクスポートで{}が必要になる
export const Test = function () {
  return <div>Test</div>;
};

// export default Test;
// defaultは１ファイルに1つまで
// export default num;
// defaultを使わないエクスポート
// export { num };
// 複数あるときは1行で書くことができる(Firebaseでも使う書き方)
export { num, str };
