import React, { useState } from 'react';
import Task from './Task';

function ListTask({ tasks, onToggleTask, onEditTask }) {
  const [filter, setFilter] = useState('all');

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button className='listTask-btn' onClick={() => setFilter('all')}>All</button>
        <button className='listTask-btn' onClick={() => setFilter('done')}>Done</button>
        <button className='listTask-btn' onClick={() => setFilter('notDone')}>Not Done</button>
      </div>
      {filteredTasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
}

export default ListTask;
