import React, { useState } from "react";
import FormDataCom from "../components/FormDataCom";

const FormData = () => {
  const [inputFormData, setInputFormData] = useState({
    email: "",
    password: "",
  });

  const updateInputData = (newData) => {
    setInputFormData((currentData) => {
      return { ...currentData, ...newData };
    });
  };

  const submitFormData = () => {
    console.log(inputFormData);
  };

  return (
    <div>
      <FormDataCom
        inputFormData={inputFormData}
        updateData={updateInputData}
        onSubmit={submitFormData}
      />
    </div>
  );
};

export default FormData;
