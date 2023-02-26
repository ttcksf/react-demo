import React from "react";

const InputText = ({ handleChange, value }) => {
  console.count("子コンポーネントです");
  return (
    <div>
      <input type="text" onChange={handleChange} value={value} />
    </div>
  );
};

export default InputText;
