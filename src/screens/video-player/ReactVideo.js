import React from 'react';
import ReactPlayer from 'react-player';

// npm install react-player
// https://github.com/cookpete/react-player

const ReactVideo = () => {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
        controls={true}
        width="400px"
        height="300px"
        onReady={() => console.log('再生準備')}
        onStart={() => console.log('再生開始')}
        onPause={() => console.log('再生停止')}
        onEnded={() => console.log('再生終了')}
      />
    </div>
  );
};

export default ReactVideo;
