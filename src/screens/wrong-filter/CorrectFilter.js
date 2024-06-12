import React, { useRef, useState } from 'react';

const CorrectFilter = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState('');
  const inputRef = useRef();
  const onSubmit = (e) => {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    if (inputValue === '') return;
    setItems((prev) => {
      return [...prev, inputValue];
    });
    inputRef.current.value = '';
  };

  const onChange = (e) => {
    setQuery(e.target.value);
  };
  // ステートではなくクエリに基づいて作成される配列にする
  // 新規作成時には空文字で検索しているだけなので問題ない
  const filtered = items.filter((item) => item.includes(query));

  return (
    <div>
      検索：
      <input value={query} onChange={onChange} type="search" />
      <form onSubmit={onSubmit}>
        新規追加：
        <input type="text" ref={inputRef} />
        <button>送信</button>
      </form>
      {filtered.map((filteredItem, i) => (
        <p>{filteredItem}</p>
      ))}
    </div>
  );
};

export default CorrectFilter;
