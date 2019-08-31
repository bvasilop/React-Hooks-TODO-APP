import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Todo.css';

const CreateTask = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add a new task"
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
};

CreateTask.propTypes = {
  addTask: PropTypes.func,
};

export default CreateTask;
