import React from "react";

const Children = ({ text, children }) => {
  // const Children = (props) => {
  // propsはオブジェクトになっていて、通常のpropsはプロパティ名を自分たちで自由に決めていたがchildrenだけは指定の名前になっただけ
  // console.log(props);
  return (
    <div>
      {/* <h1>ここはChildrenです</h1> */}
      <p>{text}</p>
      {/* <p>{props.text}</p> */}
      <p>{children}</p>
      {/* {props.children} */}

      {/* 親でのコーディング例 */}
      {/* <Children text="これはpropsのtextです"> */}
      {/* childrenはpropsのプロパティの一種で、親で書いたコーディング内容をそのまま送れるのが特徴 */}
      {/* <p>これはpropsのchildrenです。</p> */}
      {/* </Children> */}
      {/* <hr /> */}
      {/* <Children text="これはpropsのtextです"> */}
      {/* childrenはpropsのプロパティの一種で、親で書いたコーディング内容をそのまま送れるのが特徴 */}
      {/* <h1>コピーしました</h1> */}
      {/* </Children> */}
    </div>
  );
};

export default Children;
