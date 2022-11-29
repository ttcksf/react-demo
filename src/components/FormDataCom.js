import React from "react";

const FormDataCom = ({ submitFormData, inputFormData, updateInputData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    submitFormData();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            value={inputFormData.email}
            onChange={(e) => updateInputData({ email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            value={inputFormData.password}
            onChange={(e) => updateInputData({ password: e.target.value })}
          />
        </div>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default FormDataCom;
