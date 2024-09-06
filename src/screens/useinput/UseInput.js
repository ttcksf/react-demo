import React, { useState } from 'react';
import CustomHook from './CustomHook';

const UseInput = () => {
  // const [fName, setFname] = useState('');
  // const [lName, setLname] = useState('');

  const [fName, setFname, resetFname] = CustomHook('');
  const [lName, setLname, resetLname] = CustomHook('');

  const handleSubmit = (e) => {
    alert(`${fName} ${lName}`);
    resetFname();
    resetLname();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          FirstName
          {/* <input
            type="text"
            value={fName}
            onChange={(e) => setFname(e.target.value)}
          /> */}
          {/* valueとonChangeを取り込む */}
          <input type="text" {...setFname} />
        </label>
        <label>
          LastName
          {/* <input
            type="text"
            value={lName}
            onChange={(e) => setLname(e.target.value)}
          /> */}
          <input type="text" {...setLname} />
        </label>
        <button>送信</button>
      </form>
    </div>
  );
};

export default UseInput;
