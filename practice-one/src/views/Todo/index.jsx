import { useState, useEffect } from 'react';

import './index.css';

import Button from '../../components/Button';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import NumberTask from './components/NumberTask';

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
    setIsOpen(prev => !prev);
  };

  const handleAddTask = newTask => {
    setTasks(prevTasks => [...prevTasks, newTask]);
    localStorage.setItem(
      'tasks',
      JSON.stringify([...tasks, newTask])
    );
    setIsOpen(false);
  };

  const handleRemoveTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleSaveTask = updatedTask => {
    const taskNew = tasks.map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );
    setTasks(taskNew);
    localStorage.setItem('tasks', JSON.stringify(taskNew));
    setSelectedTaskId('');
  };

  const handleOpenEditTaskForm = taskId => {
    setSelectedTaskId(taskId);
  };

  const handleCloseEditTaskForm = () => {
    setSelectedTaskId('');
  };

  return (
    <>
      <h1 className="title">Today</h1>
      <NumberTask tasks={tasks} />
      <TaskList
        tasks={tasks}
        onRemoveTask={handleRemoveTask}
        onEditTask={handleOpenEditTaskForm}
        onCancel={handleCloseEditTaskForm}
        onSubmit={handleSaveTask}
        selectedTaskId={selectedTaskId}
      />
      {isOpen ? (
        <TaskForm
          onSubmit={handleAddTask}
          onCancel={handleToggleForm}
          textBtnPrimary="Cancel"
          textBtnSecondary="Add Task"
        />
      ) : (
        <Button
          classNameBtn="btn-toggle"
          iconClassName="icon-plus"
          onClick={handleToggleForm}
        >
          Add Task
        </Button>
      )}
    </>
  );
};

export default Todo;
