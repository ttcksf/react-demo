import React from 'react';
// https://tailwindcss.com/docs/responsive-design
// https://tailwindcss.com/docs/hover-focus-and-other-states
const TailWind4 = () => {
  return (
    <div className="flex flex-col items-center mt-8 mb-16">
      <img
        src="https://picsum.photos/400?random=1"
        className="mb-8 w-100 h-100 object-cover "
      />
      <h1 className="text-xl md:text-4xl font-bold text-center text-amber-800 hover:text-slate-800 font-title">
        タイトル
      </h1>
    </div>
  );
};

export default TailWind4;
