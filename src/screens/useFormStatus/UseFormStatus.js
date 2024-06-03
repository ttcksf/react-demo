import React, { useRef, useState } from 'react';

const UseFormStatus = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current == null) return;
    setIsLoading(true);
    // 実際にはタイムラグがある想定
    setTimeout(() => {
      setTodos((prev) => [...prev, inputRef.current.value]);
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>タスク</label>
        <input type="text" ref={inputRef} />
        {/* disabledがないと同じ処理なのに何回もクリックして実行できてしまう */}
        <button disabled={isLoading}>{isLoading ? '作成中' : '作成'}</button>
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default UseFormStatus;
