import React, { useState } from 'react';
import Modal from 'react-modal';
// npm install --save react-modal
// https://github.com/reactjs/react-modal

// これがないとワーニングが出る
Modal.setAppElement('#root');
const ReactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(true)}>開く</button>
      {/* <Modal isOpen={true}> */}
      <Modal
        isOpen={isOpen}
        style={{
          overlay: {
            backgroundColor: 'grey',
          },
        }}
      >
        <h2>タイトル</h2>
        <p>テキストです</p>
        <div>
          <button onClick={() => setIsOpen(false)}>閉じる</button>
        </div>
      </Modal>
    </div>
  );
};

export default ReactModal;
