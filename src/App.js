
import './App.css';

import React, { useState } from 'react';
import AddTask from './components/Addtask';
import ListTask from './components/ListTask';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (description) => {
    const newTask = {
      id: uuidv4(),
      description,
      isDone: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    ));
  };

  const editTask = (id, newDescription) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, description: newDescription } : task
    ));
  };

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <AddTask className="addTask" onAddTask={addTask} />
      <ListTask className="addTask" tasks={tasks} onToggleTask={toggleTask} onEditTask={editTask} />
    </div>
  );
}

export default App;
