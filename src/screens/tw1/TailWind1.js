import React from 'react';
// https://tailwindcss.com/docs/installation
// 1.インストール実行
// 2.tsconfigのcontentを書き換える
// 3.index.cssを全て削除してインポートする
// 4.App.jsを一度リセットする（sstyleなどを削除する）
// 5.tailwindcssの拡張機能をインストールする
// 6.サーバーを再起動してから使う
const TailWind1 = () => {
  return <div className="text-pink-400">TailWind1</div>;
};

export default TailWind1;
