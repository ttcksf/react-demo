import React, { useState } from "react";
import "./style.css";

const BegginerMistakes3 = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = firstName + lastName;
  return (
    // フラグメントにするとdivタグが入らない
    <>
      <form>
        <input
          type="text"
          placeholder="姓"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="名"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </form>
      <p>購入者：{fullName}</p>
    </>
  );
};

export default BegginerMistakes3;
