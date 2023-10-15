import React, { useState } from "react";
import Button from "./Button";

const Service = () => {
  const [isPost, setIsPost] = useState(true);
  return (
    <div>
      Service <Button btnText="送信" isPost={isPost} />
    </div>
  );
};

export default Service;
