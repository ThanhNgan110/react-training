import { useState, useEffect } from 'react';

import './index.css';

import Button from '../../components/common/Button';

import Form from '../../components/Form';
import TaskList from '../../components/TaskList';

import { getLocalStorage } from '../../helper/localStorage';

const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTaskId, setSelectedTaskId] = useState('');

  useEffect(() => {
    const storedTasks = getLocalStorage('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleToggleForm = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    setIsOpen(false);
  };

  const handleRemoveTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleOpenEditTaskForm = (taskId) => {
    setSelectedTaskId(taskId);
  };

  const handleCloseEditTaskForm = () => {
    setSelectedTaskId('');
  };

  const handleSaveTask = (taskCurrent) => {};

  const taskWord = tasks.length > 1 ? 'tasks' : 'task';

  return (
    <>
      <h1 className="title">Today</h1>
      {tasks.length >= 1 && (
        <div className="align-center">
          <span className="icon icon-small icon-complete"></span>
          <p className="number-task">
            {tasks.length} {taskWord}
          </p>
        </div>
      )}
      <TaskList
        tasks={tasks}
        onRemoveTask={handleRemoveTask}
        onEditTask={handleOpenEditTaskForm}
        onCancel={handleCloseEditTaskForm}
        onSave={handleSaveTask}
        selectedTaskId={selectedTaskId}
      />

      {isOpen ? (
        <Form onAddTask={handleAddTask} onCancel={handleToggleForm} />
      ) : (
        <Button
          className="btn-toggle"
          text="Add Task"
          iconClassName="icon-plus"
          onClick={handleToggleForm}
        />
      )}
    </>
  );
};

export default Todo;
