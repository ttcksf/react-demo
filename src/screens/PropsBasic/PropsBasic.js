import React from "react";
import Student from "./component/Student";

const PropsBasic = () => {
  return (
    <div>
      {/* <div>
        <h3>田中太郎</h3>
        <p>
          <span>19</span>歳
        </p>
        <p>男</p>
      </div> */}
      <Student name="田中太郎" age="19" gender="男" />
      <hr />
      {/* <div>
        <h3>鈴木大介</h3>
        <p>
          <span>19</span>歳
        </p>
        <p>男</p>
      </div> */}
      <Student name="鈴木大介" age="19" gender="男" />
      <hr />
      {/* <div>
        <h3>山田花子</h3>
        <p>
          <span>18</span>歳
        </p>
        <p>女</p>
      </div> */}
      <Student name="山田花子" age="18" gender="女" />
    </div>
  );
};

export default PropsBasic;
