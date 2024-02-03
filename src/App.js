import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './screens/useContext/Products';
import Cart from './screens/useContext/Cart';
import Menu from './screens/useContext/Menu';
import { CartProvider } from './screens/useContext/CartContext';
function App() {
  // let count = 0;
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          {/* <Menu count={count} /> */}
          <Menu />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
