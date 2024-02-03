import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './CartContext';

const Menu = () => {
  // const state = useContext(CartContext);
  // console.log(state.count);
  // const { count } = useContext(CartContext);
  const { items } = useContext(CartContext);
  console.log(items);
  return (
    <div>
      <nav>
        <Link to={'/'}>タイトル</Link>
        <Link to={'/cart'}>
          {/* カート：<span>0</span> */}
          {/* カート：<span>{count}</span> */}
          カート：<span>{items.length}</span>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
