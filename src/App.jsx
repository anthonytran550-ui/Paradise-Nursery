import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
          Your one-stop shop for beautiful houseplants
        </p>
        <Link to="/plants" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <AboutUs />
            </>
          }
        />
        <Route
          path="/plants"
          element={
            <>
              <Navbar />
              <ProductList />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <CartItem />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
