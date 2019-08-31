import React from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

const Task = ({ task, index, completeTask, removeTask }) => (
  <div
    className="task"
    style={{ textDecoration: task.completed ? 'line-through' : '' }}
  >
    {task.title}

    <button
      type="submit"
      style={{ background: 'red' }}
      onClick={() => removeTask(index)}
    >
      x
    </button>
    <button type="submit" onClick={() => completeTask(index)}>
      Complete
    </button>
  </div>
);

Task.propTypes = {
  task: PropTypes.object,
  index: PropTypes.number,
  completeTask: PropTypes.func,
  removeTask: PropTypes.func,
};

export default Task;
