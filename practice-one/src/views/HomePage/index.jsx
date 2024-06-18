import { useState } from 'react';

import Button from '../../components/common/Button';
import iconAdd from '../../assets/images/iconButton/iconAdd.png';
import Form from '../../components/Form';
import './index.css';

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleToggleForm = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTodo) => [...prevTodo, newTask]);
    // Store todo list in local storage
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    setIsOpen(true);
  };

  const taskWord = tasks.length > 1 ? 'tasks' : 'task';

  return (
    <>
      <h1 className="title">Today</h1>
      {tasks.length >= 1 && (
        <p className="number-task">
          {tasks.length} {taskWord}
        </p>
      )}
      {!isOpen && (
        <Button
          className="btn-toggle"
          text="Add Task"
          icon={iconAdd}
          onClick={handleToggleForm}
        />
      )}
      {isOpen && (
        <Form onAddTask={handleAddTask}>
          <Button
            text="Cancel"
            className="btn-primary"
            onClick={handleToggleForm}
          />
        </Form>
      )}
    </>
  );
};

export default HomePage;