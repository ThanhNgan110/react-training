import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import './index.css';

const Form = ({ onAddTask, children }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      id: self.crypto.randomUUID(),
      taskName: taskName,
      description: description,
    };
    setTaskName('');
    setDescription('');
    onAddTask(task);
    // localStorage.setItem('tasks', JSON.stringify(task));
  };
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeHolder="Task Name"
        className="input-task"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <Input
        type="text"
        placeHolder="Description"
        className="input-desc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="btn-group">
        {children}
        <Button text="Add Task" className="btn-secondary" />
      </div>
    </form>
  );
};

export default Form;
