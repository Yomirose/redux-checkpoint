import React, { useState } from 'react';

function AddTask({ onAddTask }) {
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      onAddTask(description);
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input className='input'
        type="text"
        placeholder="Add a new task"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className='btn' type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
