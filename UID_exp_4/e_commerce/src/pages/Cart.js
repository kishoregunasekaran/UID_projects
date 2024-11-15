// src/pages/Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);

  return (
    <div style={styles.container}>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul style={styles.list}>
            {cartItems.map((item, index) => (
              <li key={index} style={styles.listItem}>
                {item.name} - {item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
        </>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    padding: '10px 0',
    borderBottom: '1px solid #ddd',
  },
};

export default Cart;
