import React, { useRef, useState } from 'react';

const UseRefBasic = () => {
  // const [fName, setFname] = useState('');
  // const [lName, setLname] = useState('');

  const fName = useRef();
  const lName = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.count(`姓：${fName}`);
    // console.count(`名：${lName}`);

    // useRefはDOMノード（オブジェクト）になって取得される
    console.count(`姓：${fName.current.value}`);
    console.count(`名：${lName.current.value}`);
  };
  // useStateだと入力されるたびにレンダリングが走る
  console.count('レンダリング');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        姓：
        {/* <input
          type="text"
          value={fName}
          onChange={(e) => setFname(e.target.value)}
        /> */}
        <input type="text" ref={fName} />
        名：
        {/* <input
          type="text"
          value={lName}
          onChange={(e) => setLname(e.target.value)}
        /> */}
        <input type="text" ref={lName} />
        <button>送信</button>
      </form>
    </div>
  );
};

export default UseRefBasic;
