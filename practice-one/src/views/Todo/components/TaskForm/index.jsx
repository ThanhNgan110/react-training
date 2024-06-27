import { useState, useEffect } from 'react';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';
import Form from '../../../../components/Form';

const TaskForm = ({
  data,
  onSubmit,
  onCancel,
  textBtnPrimary,
  textBtnSecondary
}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const { name = '', description = '' } = data || {};
    setName(name);
    setDescription(description);
  }, [data]);

  const handleSubmit = e => {
    e.preventDefault();
    const task = {
      id: data?.id || self.crypto.randomUUID(),
      name: name,
      description: description
    };
    setName('');
    setDescription('');
    onSubmit(task);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeDescription = e => {
    setDescription(e.target.value);
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      content={
        <>
          <Input
            type="text"
            placeHolder="Task Name"
            className="input-task"
            value={name}
            onChange={handleChangeName}
          />
          <Input
            type="text"
            placeHolder="Description"
            className="input-desc"
            value={description}
            onChange={handleChangeDescription}
          />
        </>
      }
      footer={
        <div className="btn-group">
          <Button
            classNameBtn="btn-primary"
            type="button"
            onClick={onCancel}
          >
            {textBtnPrimary}
          </Button>
          <Button
            classNameBtn="btn-secondary"
            type="submit"
            isDisabled={!name}
          >
            {textBtnSecondary}
          </Button>
        </div>
      }
    />
  );
};

export default TaskForm;
