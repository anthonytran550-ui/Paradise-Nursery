import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, selectCartItems } from '../redux/CartSlice';
import './ProductList.css';

const PLANT_CATEGORIES = {
  succulents: {
    name: 'Succulents',
    plants: [
      {
        id: 's1',
        name: 'Echeveria',
        price: 12.99,
        thumbnail: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=200',
      },
      {
        id: 's2',
        name: 'Jade Plant',
        price: 18.99,
        thumbnail: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=200',
      },
      {
        id: 's3',
        name: 'Aloe Vera',
        price: 14.99,
        thumbnail: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=200',
      },
      {
        id: 's4',
        name: 'Haworthia',
        price: 11.99,
        thumbnail: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200',
      },
      {
        id: 's5',
        name: 'String of Pearls',
        price: 22.99,
        thumbnail: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b19?w=200',
      },
      {
        id: 's6',
        name: 'Zebra Cactus',
        price: 16.99,
        thumbnail: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=200',
      },
    ],
  },
  tropical: {
    name: 'Tropical Plants',
    plants: [
      {
        id: 't1',
        name: 'Monstera Deliciosa',
        price: 34.99,
        thumbnail: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b19?w=200',
      },
      {
        id: 't2',
        name: 'Fiddle Leaf Fig',
        price: 42.99,
        thumbnail: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de1?w=200',
      },
      {
        id: 't3',
        name: 'Pothos Golden',
        price: 19.99,
        thumbnail: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de1?w=200',
      },
      {
        id: 't4',
        name: 'Peace Lily',
        price: 24.99,
        thumbnail: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=200',
      },
      {
        id: 't5',
        name: 'Rubber Plant',
        price: 29.99,
        thumbnail: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=200',
      },
      {
        id: 't6',
        name: 'Bird of Paradise',
        price: 39.99,
        thumbnail: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=200',
      },
    ],
  },
  flowering: {
    name: 'Flowering Houseplants',
    plants: [
      {
        id: 'f1',
        name: 'African Violet',
        price: 15.99,
        thumbnail: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=200',
      },
      {
        id: 'f2',
        name: 'Orchid Phalaenopsis',
        price: 32.99,
        thumbnail: 'https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=200',
      },
      {
        id: 'f3',
        name: 'Anthurium',
        price: 28.99,
        thumbnail: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=200',
      },
      {
        id: 'f4',
        name: 'Begonia',
        price: 17.99,
        thumbnail: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=200',
      },
      {
        id: 'f5',
        name: 'Kalanchoe',
        price: 13.99,
        thumbnail: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b19?w=200',
      },
      {
        id: 'f6',
        name: 'Christmas Cactus',
        price: 21.99,
        thumbnail: 'https://images.unsplash.com/photo-1593691509543-c55fb32d8de1?w=200',
      },
    ],
  },
};

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      <h1 className="product-list-title">Our Plants</h1>
      {Object.entries(PLANT_CATEGORIES).map(([key, category]) => (
        <section key={key} className="category-section">
          <h2 className="category-title">{category.name}</h2>
          <div className="plant-grid">
            {category.plants.map((plant) => (
              <div key={plant.id} className="plant-card">
                <img
                  src={plant.thumbnail}
                  alt={plant.name}
                  className="plant-thumbnail"
                />
                <h3 className="plant-name">{plant.name}</h3>
                <p className="plant-price">${plant.price.toFixed(2)}</p>
                <button
                  className="add-to-cart-btn"
                  onClick={() => handleAddToCart(plant)}
                  disabled={isInCart(plant.id)}
                >
                  {isInCart(plant.id) ? 'Added to Cart' : 'Add to Cart'}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default ProductList;
