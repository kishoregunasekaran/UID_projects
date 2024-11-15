// src/App.js
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Handle task input
  const handleInputChange = (event) => {
    setTask(event.target.value);
  };

  // Add new task
  const handleAddTask = (event) => {
    event.preventDefault();
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask(''); // Reset input field
    }
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((item, idx) =>
      idx === index ? { ...item, completed: !item.completed } : item
    );
    setTasks(updatedTasks);
  };

  // Delete task
  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={task}
          onChange={handleInputChange}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className={item.completed ? 'completed' : ''}>
            <span className="task-text">{item.text}</span>
            <button
              className="complete-btn"
              onClick={() => toggleTaskCompletion(index)}
            >
              {item.completed ? 'Undo' : 'Complete'}
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDeleteTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
