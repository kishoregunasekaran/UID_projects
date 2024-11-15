// src/App.js
import React, { useState } from 'react';
import Signup from './components/SignUp';
import Login from './components/Login';
import Home from './components/Home';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      {user ? (
        <Home user={user} onLogout={handleLogout} />
      ) : (
        <>
          <h1>Welcome! Please Sign Up or Login</h1>
          <Signup onLogin={handleLogin} />
          <Login onLogin={handleLogin} />
        </>
      )}
    </div>
  );
}

export default App;
