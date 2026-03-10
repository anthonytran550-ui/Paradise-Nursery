import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import './ProductList.css';

const products = [
  { id: 1, name: 'Aloe Vera', price: 12.99, image: '/images/aloe-vera.jpg' },
  { id: 2, name: 'Snake Plant', price: 15.49, image: '/images/snake-plant.jpg' },
  { id: 3, name: 'Peace Lily', price: 18.99, image: '/images/peace-lily.jpg' },
  { id: 4, name: 'Spider Plant', price: 10.99, image: '/images/spider-plant.jpg' },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
  };

  return (
    <div className="product-list">
      <h2>Our Plants</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
