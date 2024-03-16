import React, { createContext, useReducer } from 'react';
import { cartReducer } from './CartReducer';

const initialState = {
  items: [],
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addItems = (title, price) => {
    dispatch({ type: 'ADD_ITEM', payload: { title, price } });
  };

  return (
    <CartContext.Provider value={{ state, addItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
