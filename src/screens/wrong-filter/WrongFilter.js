import React, { useRef, useState } from 'react';

const WrongFilter = () => {
  // 入力結果と検索結果を別のステートとして分けて作る例
  const [items, setItems] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue === '') return;
    setItems((prev) => {
      return [...prev, inputValue];
    });
    setFiltered((prev) => {
      return [...prev, inputValue];
    });
    inputRef.current.value = '';
  };

  const onChange = (e) => {
    const searchValue = e.target.value;
    setFiltered(items.filter((p) => p.includes(searchValue)));
  };
  return (
    <div>
      検索：
      <input onChange={onChange} type="search" />
      <form onSubmit={onSubmit}>
        新規追加：
        <input type="text" ref={inputRef} />
        <button>送信</button>
      </form>
      {filtered.map((filterItem, i) => (
        <p>{filterItem}</p>
      ))}
    </div>
  );
};

export default WrongFilter;
