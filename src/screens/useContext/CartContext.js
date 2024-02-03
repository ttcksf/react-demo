import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItems = (title, price) => {
    setItems((prev) => [...prev, { title, price }]);
  };
  return (
    // オブジェクトやuseStateで作ったステート変数など格納
    // <CartContext.Provider value={{ count: 1 }}>
    <CartContext.Provider value={{ items, addItems }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
