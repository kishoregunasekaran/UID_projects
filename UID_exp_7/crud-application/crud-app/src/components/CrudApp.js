import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CrudApp() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', description: '' });
  const [editingItem, setEditingItem] = useState(null);

  // Fetch items from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/items')
      .then(response => setItems(response.data))
      .catch(error => console.error(error));
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  // Create or Edit item
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingItem) {
      // Update existing item
      axios.put(`http://localhost:5000/api/items/${editingItem._id}`, newItem)
        .then(response => {
          setItems(items.map(item => item._id === response.data._id ? response.data : item));
          setNewItem({ name: '', description: '' });
          setEditingItem(null);
        })
        .catch(error => console.error(error));
    } else {
      // Create new item
      axios.post('http://localhost:5000/api/items', newItem)
        .then(response => {
          setItems([...items, response.data]);
          setNewItem({ name: '', description: '' });
        })
        .catch(error => console.error(error));
    }
  };

  // Start editing an item
  const handleEdit = (item) => {
    setNewItem({ name: item.name, description: item.description });
    setEditingItem(item);
  };

  // Delete an item
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/items/${id}`)
      .then(() => {
        setItems(items.filter(item => item._id !== id));
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>CRUD Application</h1>

      {/* Form to add/edit item */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newItem.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newItem.description}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{editingItem ? 'Update Item' : 'Add Item'}</button>
      </form>

      {/* List of items */}
      <ul>
        {items.map(item => (
          <li key={item._id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleEdit(item)}>Edit</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CrudApp;
