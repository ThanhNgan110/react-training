import { useState, useEffect } from 'react';

import iconAdd from '../../assets/images/icons/icon-plus.png';
import iconCheck from '../../assets/images/icons/icon-complete.png';
import './index.css';

import Button from '../../components/common/Button';
import Img from '../../components/common/Img';
import Form from '../../components/Form';
import List from '../../components/List';
import ListItem from '../../components/ListItem';
import TaskContent from '../../components/TaskContent';

const Todo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [editingTaskData, setEditingTaskData] = useState(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleToggleForm = () => {
    setIsOpen((prev) => !prev);
    setIsEditing(false);
    setEditingTaskId(null);
    setEditingTaskData(null);
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    setIsOpen(false);
    setIsEditing(false);
    setEditingTaskId(null);
    setEditingTaskData(null);
  };

  // const handleUpdateTask = (updatedTask) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === updatedTask.id ? updatedTask : task
  //   );
  //   setTasks(updatedTasks);
  //   localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  //   setIsOpen(false);
  //   setIsEditing(false);
  //   setEditingTaskId(null);
  //   setEditingTaskData(null);
  // };

  const handleCompleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleEdit = (taskId) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    setEditingTaskId(taskId);
    setEditingTaskData(taskToEdit);
    setIsEditing(true);
    setIsOpen(true);
  };

  const taskWord = tasks.length > 1 ? 'tasks' : 'task';

  return (
    <>
      <h1 className="title">Today</h1>
      {tasks.length >= 1 && (
        <div className="align-center">
          <Img urlIcon={iconCheck} alt="check" />
          <p className="number-task">
            {tasks.length} {taskWord}
          </p>
        </div>
      )}
      <List>
        {tasks?.map(
          (task) =>
            editingTaskId === task.id ? (
              <Form
                key={task.id}
                task={editingTaskData}
                onAddTask={handleAddTask}
                // onUpdateTask={handleUpdateTask}
                onCancel={handleToggleForm}
              />
            ) : (
              <ListItem
                key={task.id}
                task={task}
                onRemove={handleCompleteTask}
                onEdit={handleEdit}
              >
                <TaskContent taskObject={task} />
              </ListItem>
            )
        )}
        {isOpen && !isEditing && (
          <Form onAddTask={handleAddTask} onCancel={handleToggleForm} />
        )}
        {!isOpen && (
          <Button
            className="btn-toggle"
            text="Add Task"
            icon={iconAdd}
            onClick={handleToggleForm}
          />
        )}
      </List>
    </>
  );
};

export default Todo;
