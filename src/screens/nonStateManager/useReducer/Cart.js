import React, { useContext } from 'react';
import CartContext from './CartContext';

const Cart = () => {
  const { state } = useContext(CartContext);
  const { items } = state;
  return (
    <div>
      <h1>カート一覧</h1>
      {items.map((item, index) => (
        <p key={index}>
          {item.title}:税込{item.price}円
        </p>
      ))}
    </div>
  );
};

export default Cart;
