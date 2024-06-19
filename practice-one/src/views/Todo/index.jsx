import { useState } from 'react';

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

  const handleToggleForm = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAddTask = (newTask) => {
    setTasks((prevTodo) => [...prevTodo, newTask]);
    // Store todo list in local storage
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    setIsOpen(true);
  };

  const handleCompleteTask = (taskId) => {
    const updateTask = tasks.filter((task) => task.id !== taskId );
    setTasks(updateTask);
    localStorage.setItem('tasks', JSON.stringify(updateTask));
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
        {tasks?.map((task) => (
          <ListItem key={task.id} task={task} onRemove={handleCompleteTask}>
            <TaskContent taskObject={task} />
          </ListItem>
        ))}
      </List>
      {isOpen ? (
        <Form onAddTask={handleAddTask} onCancel={handleToggleForm}></Form>
      ) : (
        <Button
          className="btn-toggle"
          text="Add Task"
          icon={iconAdd}
          onClick={handleToggleForm}
        />
      )}
    </>
  );
};

export default Todo;
