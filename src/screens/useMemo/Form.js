import React, { useMemo, useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [num, setNum] = useState(0);
  // const cal = () => {
  //   console.log("関数に入りました");
  //   let sum = 0;
  //   for (let i = 0; i < 100000000; i++) {
  //     sum += 1;
  //   }
  //   return sum;
  // };

  const cal = (num) => {
    console.log("関数に入りました");
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += 1;
    }
    return sum;
  };

  // const result = cal();
  // const result = cal(num);

  const result = useMemo(() => cal(num), [num]);

  console.log("レンダリングされました！");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <p>合計：{result}</p>
    </div>
  );
};

export default Form;
