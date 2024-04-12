import React, { useState } from 'react';

const ActiveHiddenStyle = () => {
  const [bannerNone, setBannerNone] = useState(true);
  const isBannerClose = () => {
    setBannerNone(false);
  };
  return (
    <div>
      {/* <div
        style={{
          fontSize: '40px',
          fontWeight: 'bold',
          color: '#fff',
          backgroundColor: '#222',
        }}
      > */}
      {bannerNone && (
        <div
          style={{
            fontSize: '40px',
            fontWeight: 'bold',
            color: '#fff',
            backgroundColor: '#222',
          }}
        >
          ただいまGWセール実施中！
          <button onClick={isBannerClose}>x</button>
        </div>
      )}
    </div>
  );
};

export default ActiveHiddenStyle;
