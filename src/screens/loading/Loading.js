import React from 'react';
import { BounceLoader, BarLoader, BeatLoader } from 'react-spinners';

// npm i react-spinners
// npm i @emotion/core

const Loading = () => {
  return (
    <div>
      <BounceLoader loading={true} size={24} color="red" />
      <BarLoader loading={true} size={48} color="green" />
      <BeatLoader loading={true} size={24} color="blue" />
    </div>
  );
};

export default Loading;
