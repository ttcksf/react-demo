import React from 'react';

// 1.index.cssにオリジナルのCSSを追加することが可能
// 2.index.htmlとtsconfigにGoogleフォントを追加することが可能

const TailWind3 = () => {
  return (
    <div className="flex flex-col items-center mt-8 mb-16">
      <img
        src="https://picsum.photos/400?random=1"
        className="mb-8 w-100 h-100 object-cover "
      />
      {/* ここを追加 */}
      <h1 className="text-4xl font-bold text-center text-amber-800 font-title">
        タイトル
      </h1>
    </div>
  );
};

export default TailWind3;
