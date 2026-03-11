import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCartItems,
  selectCartTotal,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from '../redux/CartSlice';
import './CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const handleIncrease = (id) => dispatch(increaseQuantity(id));
  const handleDecrease = (id) => dispatch(decreaseQuantity(id));
  const handleRemove = (id) => dispatch(removeItem(id));

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <h1>Shopping Cart</h1>
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <Link to="/plants" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      <div className="cart-items-container">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img
              src={item.thumbnail}
              alt={item.name}
              className="cart-item-thumbnail"
            />
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.name}</h3>
              <p className="cart-item-unit-price">
                Unit Price: ${item.price.toFixed(2)}
              </p>
              <div className="cart-item-quantity">
                <button
                  className="qty-btn"
                  onClick={() => handleDecrease(item.id)}
                  aria-label="Decrease quantity"
                >
                  −
                </button>
                <span className="qty-value">{item.quantity}</span>
                <button
                  className="qty-btn"
                  onClick={() => handleIncrease(item.id)}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
              <p className="cart-item-total">
                Total: ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
            <button
              className="delete-btn"
              onClick={() => handleRemove(item.id)}
              aria-label="Remove item"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <p className="cart-total-amount">
          Total Cart Amount: <strong>${cartTotal.toFixed(2)}</strong>
        </p>
        <div className="cart-actions">
          <button
            className="checkout-btn"
            onClick={() => alert('Coming Soon!')}
          >
            Checkout (Coming Soon)
          </button>
          <Link to="/plants" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
