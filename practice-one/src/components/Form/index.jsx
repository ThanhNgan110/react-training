import { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import './index.css';

const Form = ({ task, onAddTask, onCancel, onSave }) => {
  const [taskName, setTaskName] = useState(task?.taskName || '');
  const [description, setDescription] = useState(task?.description || '');

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
  };

  const handleChangeName = (e) => {
    setTaskName(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        type="text"
        placeHolder="Task Name"
        className="input-task"
        value={taskName}
        onChange={handleChangeName}
      />
      <Input
        type="text"
        placeHolder="Description"
        className="input-desc"
        value={description}
        onChange={handleChangeDescription}
      />
      <div className="btn-group">
        <Button text="Cancel" classNameBtn="btn-primary" onClick={onCancel} />
        {task?.active  ? (<Button text="Save" classNameBtn="btn-secondary"/>) :
           (<Button text="Add Task" classNameBtn="btn-secondary" type="submit" />)}
      </div>
    </form>
  );
};

export default Form;
