import React, { useState } from 'react';

const CustomHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };
  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    },
  };

  return [value, bind, reset];
};

export default CustomHook;
