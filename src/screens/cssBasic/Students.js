import React from "react";
import Student from "./Student";

const PropsBasic = () => {
  return (
    <div>
      {/* 子供のコンポーネントで読み込んだcssが使えるが場合によっては意図しないスタイルになることもある。また命名規則をチームで徹底する必要性も出てくる */}
      {/* CSSmoduleの場合は子供のコンポーネントで読み込んでいても書き方が専用のものに変わるのでクラスの競合は起きない */}
      <strong className="student__error">エラーです</strong>
      <Student name="田中太郎" age="19" gender="男" />
      <hr />
      <Student name="鈴木大介" age="19" gender="男" />
      <hr />
      <Student name="山田花子" age="18" gender="女" />
    </div>
  );
};

export default PropsBasic;
