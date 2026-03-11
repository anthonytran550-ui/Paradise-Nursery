import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/CartSlice';

function Navbar() {
  const cartCount = useSelector(selectCartCount);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Paradise Nursery
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/plants">Plants</Link>
          </li>
          <li>
            <Link to="/cart" className="cart-link">
              Cart
              <span className="cart-icon">
                🛒
                <span className="cart-count">{cartCount}</span>
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
