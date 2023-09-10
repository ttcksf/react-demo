import React from "react";

const ImportFile = () => {
  return <div>ImportFile</div>;
};

// export default function ImportFile() {
//   return <div>ImportFile</div>;
// }

const num = 100;
const str = "おはよう";

// 名前つき
export { num, str };
// デフォルト(１ファイルにつき1個まで)
export default ImportFile;
