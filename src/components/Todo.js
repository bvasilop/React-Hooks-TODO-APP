import React, { useState, useEffect } from 'react';
import './Todo.css';
import CreateTask from './CreateTask';
import Task from './Task';

const Todo = () => {
  const [tasksRemaining, setTasksRemaining] = useState(0);
  const [tasks, setTasks] = useState([
    {
      title: 'Go to the movies',
      completed: true,
    },
    {
      title: 'Pay bills',
      completed: true,
    },
    {
      title: 'Get car washed',
      completed: false,
    },
  ]);

  useEffect(() => {
    setTasksRemaining(tasks.filter(task => !task.completed).length);
  }, [tasks]);

  const addTask = title => {
    const newTasks = [...tasks, { title, completed: false }];
    setTasks(newTasks);
  };

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = true;
    setTasks(newTasks);
  };

  const removeTask = index => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="todo-container">
      <div className="header">TODO ITEMS ({tasksRemaining})</div>
      <div className="tasks">
        {tasks.map((task, index) => (
          <Task
            task={task}
            index={index}
            completeTask={completeTask}
            removeTask={removeTask}
            key={index}
          />
        ))}
      </div>
      <div className="create-task">
        <CreateTask addTask={addTask} />
      </div>
    </div>
  );
};

export default Todo;
