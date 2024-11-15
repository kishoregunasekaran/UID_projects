// src/components/Home.js
import React from 'react';

const Home = ({ user, onLogout }) => {
  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Successfully Logged In</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
