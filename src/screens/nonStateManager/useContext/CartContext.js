import { createContext, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addItems = (title, price) => {
    setItems((prev) => [...prev, { title, price }]);
  };
  return (
    <CartContext.Provider value={{ items, addItems }}>
      {children}
    </CartContext.Provider>
  );
}
export default CartContext;
