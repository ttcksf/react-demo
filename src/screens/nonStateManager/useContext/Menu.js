import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from './CartContext';

const Menu = () => {
  const { items } = useContext(CartContext);
  console.log(items);
  return (
    <div>
      <nav>
        <Link to={'/'}>タイトル</Link>
        <Link to={'/cart'}>
          カート：<span>{items.length}</span>
        </Link>
      </nav>
    </div>
  );
};

export default Menu;
