import React from 'react';

function Task({ task, onToggleTask, onEditTask }) {
  return (
    <div>
      <input className='type'
        type="checkbox"
        checked={task.isDone}
        onChange={() => onToggleTask(task.id)}
      />
      <input className='text'
        type="text"
        value={task.description}
        onChange={(e) => onEditTask(task.id, e.target.value)}
      />
    </div>
  );
}

export default Task;
