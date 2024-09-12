import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
// npm install --save react-toastify
// https://fkhadra.github.io/react-toastify/introduction

const ReactToast = () => {
  const notify = () => {
    toast('最新の通知です', {
      position: 'top-right',
    });
    toast.success('完了しました', {
      position: 'top-left',
    });
    toast.warning('ページを閉じないでください', {
      position: 'bottom-left',
      autoClose: false,
    });
    toast.error('エラーです', {
      position: 'bottom-right',
    });
  };
  return (
    <div>
      <button onClick={notify}>通知</button>
      <ToastContainer />
    </div>
  );
};

export default ReactToast;
