import React, { useContext } from 'react';
import CartContext from './CartContext';

const ProductCard = ({ title, price }) => {
  const { addItems } = useContext(CartContext);
  return (
    <div>
      <div>
        <p>{title}</p>
        <p>税込{price}円</p>
        <button onClick={() => addItems(title, price)}>カートに追加</button>
      </div>
      <hr />
    </div>
  );
};

export default ProductCard;
