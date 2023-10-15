import React, { useState } from "react";
import Button from "./Button";

const About = () => {
  const [isPost, setIsPost] = useState(false);
  return (
    <div>
      About <Button btnText="投稿" isPost={isPost} />
    </div>
  );
};

export default About;
