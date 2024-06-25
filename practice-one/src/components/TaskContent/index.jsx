import './index.css';

const TaskContent = ({ task }) => {
  const { taskName, description} = task;

  return (
    <div className="task-content">
      <h3 className="task-name">{taskName}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default TaskContent;
