// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: '$10', description: 'Description of Product 1' },
  { id: 2, name: 'Product 2', price: '$20', description: 'Description of Product 2' },
  { id: 3, name: 'Product 3', price: '$30', description: 'Description of Product 3' },
];

const Home = () => {
  return (
    <div style={styles.container}>
      <h1>Products</h1>
      <div style={styles.productList}>
        {products.map(product => (
          <div key={product.id} style={styles.productCard}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link to={`/product/${product.id}`} style={styles.button}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  productList: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  productCard: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '15px',
    width: '200px',
    textAlign: 'center',
  },
  button: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '8px 12px',
    backgroundColor: '#28a745',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '4px',
  },
};

export default Home;
