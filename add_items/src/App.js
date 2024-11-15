import React, { useState } from 'react';
import AddItemForm from './AddItemForm';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  // Function to add a new item with a rating
  const addItem = (newItem, rating) => {
    setItems([...items, { name: newItem, rating }]);
  };

  // Function to delete an item by its index
  const deleteItem = (index) => {
    const updatedItems = items.filter((_, idx) => idx !== index);
    setItems(updatedItems);
  };

  // Function to edit an item by its index
  const editItem = (index, updatedName, updatedRating) => {
    const updatedItems = items.map((item, idx) =>
      idx === index ? { name: updatedName, rating: updatedRating } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="app-container">
      <h1>Item List</h1>
      <AddItemForm addItem={addItem} />
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="list-item">
            <span>{item.name} (Rating: {item.rating})</span>
            <button onClick={() => deleteItem(index)} className="delete-button">Delete</button>
            <button 
              onClick={() => {
                const newName = prompt("Enter new name:", item.name);
                const newRating = prompt("Enter new rating:", item.rating);
                if (newName && newRating) {
                  editItem(index, newName, newRating);
                }
              }} 
              className="edit-button">Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
