import React from "react";
import "./Button.css";

const Button = ({ isPost, btnText }) => {
  // console.log(isPost);
  return (
    <div className="btn">
      {/* isInputButtonでクリックできるボタンとできないボタンを出力仕分けている */}
      {isPost ? (
        <button className="trueBtn">{btnText}</button>
      ) : (
        <button className="falseBtn">{btnText}</button>
      )}
    </div>
  );
};

export default Button;
