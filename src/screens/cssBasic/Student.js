import React from "react";
// 普通のcssを読み込まないと他のコンポーネントでもスタイルが無くなる
// import "./cssBem/Student.css";
// モジュールcssだと読み込んだコンポーネントのみでしかスタイルが適用されない。「Student_student__error__cx7S8」のような自動クラスが付与される。あえて全体で共通クラスを作るならindex.cssで変数を用意してモジュールにvarで読み込む方法がある。
import styles from "./cssModule/Student.module.css";

const Student = ({ name, age, gender }) => {
  return (
    <div>
      {/* <strong className="student__error"> */}
      <strong className={styles.student__error}>
        情報の取得に失敗しました
      </strong>
      <h3>{name}</h3>
      {/* <p className="student__text"> */}
      <p className={styles.student__text}>
        <span>{age}</span>歳
      </p>
      <p className={styles.student__text}>{gender}</p>
    </div>
  );
};

export default Student;
