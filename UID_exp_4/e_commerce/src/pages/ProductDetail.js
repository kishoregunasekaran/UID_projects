// src/pages/ProductDetail.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Product 1', price: '$10', description: 'Detailed description of Product 1' },
  { id: 2, name: 'Product 2', price: '$20', description: 'Detailed description of Product 2' },
  { id: 3, name: 'Product 3', price: '$30', description: 'Detailed description of Product 3' },
];

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div style={styles.container}>
      <h1>{product.name}</h1>
      <p><strong>Price:</strong> {product.price}</p>
      <p>{product.description}</p>
      <button onClick={handleAddToCart} style={styles.button}>Add to Cart</button>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default ProductDetail;
