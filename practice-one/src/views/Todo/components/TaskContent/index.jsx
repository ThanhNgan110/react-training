import './index.css';
import Button from '../../../../components/Button';

const TaskContent = ({ task, onRemoveTask, onEditTask }) => {
  const { name, description } = task;

  return (
    <>
        <Button
          classNameBtn="btn-remove"
          iconClassName="icon-remove"
          onClick={() => onRemoveTask(task.id)}></Button>
        <div className="task-content">
          <h3 className="task-name">{name}</h3>
          <p className="description">{description}</p>
        </div>
      <Button
        classNameBtn="btn-edit"
        iconClassName="icon-edit"
        onClick={() => onEditTask(task.id)}></Button>
    </>
  );
};

export default TaskContent;
