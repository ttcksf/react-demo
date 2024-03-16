import React from 'react';
import UseContext from './useContext/UseContext';
import UseReducer from './useReducer/UseReducer';

export default function NonStateManager() {
  return (
    <div className="App">
      {/* useContextはバケツリレーを解消してpropsなしでステートの共有ができるようになったが、どこでもステート管理できるのでプロバイダーの数が増えると煩雑になる可能性がある */}
      {/* <UseContext /> */}
      {/* 初期ステートやステート関数を切り出して各画面との依存関係を薄めたことで再利用、変更しやすくなった。またグローバルステートが複数あったとしても一つのファイルの中でステート同士の整合性を合わせやすくなった。ローディング中はステートAは変更させてステートBは変更なしでOK、など。 */}
      <UseReducer />
      {/* 最近はReactQueryなどURLにステートを載せて、クエリからステートを読み取るようなことも人気になっている。さらにNextJsを使うとサーバーサイドとの連携もできるようになった */}
      {/* まずは基本のフックの合わせ技やNextJSでからスタートして、それだけでは煩雑になったときに状態管理ライブラリを使用する方が良い */}
    </div>
  );
}
