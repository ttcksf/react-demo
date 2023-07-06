import React from "react";

// const Children = ({ text, children }) => {
const Children = (props) => {
  // propsはオブジェクトになっていて、通常のpropsはプロパティ名を自分たちで自由に決めていたがchildrenだけは指定の名前になっただけ
  console.log(props);
  return (
    <div>
      <h1>ここはChildrenです</h1>
      {/* <p>{text}</p> */}
      <p>{props.text}</p>
      {/* <p>{children}</p> */}
      {props.children}
    </div>
  );
};

export default Children;
