import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Products</Link> | <Link to="/cart">Cart</Link>
      </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;