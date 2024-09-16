import React from 'react';
import CountUp, { useCountUp } from 'react-countup';
// npm i react-countup
// https://github.com/glennreyes/react-countup
const Count = () => {
  return (
    <div>
      <h1>
        <CountUp end={100} />
      </h1>
      <br />
      <h1>
        <CountUp end={100} duration={5} />
      </h1>
      <br />
      <h1>
        <CountUp start={50} end={150} duration={5} />
      </h1>
      <br />
      <h1>
        <CountUp end={150000} duration={5} prefix="¥" />
      </h1>
      <br />
      <h1>
        <CountUp end={150000} duration={5} suffix="円" />
      </h1>
    </div>
  );
};

export default Count;
