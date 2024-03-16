import React, { useReducer, useState } from 'react';
import { INITIAL, reducer } from './reducer';

const UseReducer = () => {
  // ステート変数、ステート関数が多く、それぞれは独立していないためステート同士の整合性も取らないといけない
  // ローディング時はステートAをTrueにしてステートBをFalseにするなど
  // const [loading, setLoading] = useState(false);
  // const [post, setPost] = useState({});
  // const [error, setError] = useState(false);

  const [state, dispatch] = useReducer(reducer, INITIAL);

  const { loading, post, error } = state;

  console.log(state);

  const handleClick = () => {
    // setLoading(true);
    // setError(false);
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     setPost(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(true);
    //     console.log(err);
    //   });

    dispatch({ type: 'START' });
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch({ type: 'SUCCESS', payload: data });
      })
      .catch((err) => {
        dispatch({ type: 'ERROR' });
      });
  };
  return (
    <div>
      <button onClick={handleClick}>
        {loading ? 'Loading...' : 'Click！'}
      </button>
      <p>{post?.title}</p>
      <p>{error && 'Error'}</p>
    </div>
  );
};

export default UseReducer;
