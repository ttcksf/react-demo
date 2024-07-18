import React, { useState } from 'react';

const TailWind5 = () => {
  const [error, setError] = useState(false);

  let inputStyle = 'mt-8 p-4 border rounded';
  // if (error) {
  //   inputStyle = 'p-4 border rounded bg-red-200';
  // }

  // +=を使うときは空白を作ることに注意する
  if (error) {
    inputStyle += ' bg-red-200';
  }
  return (
    <div className="flex flex-col items-center mt-8 mb-16">
      <img
        src="https://picsum.photos/400?random=1"
        className="mb-8 w-100 h-100 object-cover "
      />
      <h1 className="text-xl md:text-4xl font-bold text-center text-amber-800 hover:text-slate-800 font-title">
        タイトル
      </h1>
      <input className={inputStyle} />
    </div>
  );
};

export default TailWind5;
