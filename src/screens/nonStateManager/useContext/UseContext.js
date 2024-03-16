import React from 'react';
import { CartProvider } from './CartContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Cart from './Cart';
import Menu from './Menu';

const UseContext = () => {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default UseContext;
