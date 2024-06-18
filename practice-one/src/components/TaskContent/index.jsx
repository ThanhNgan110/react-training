import './index.css';

const TaskContent = ({ taskObject }) => {
  const { taskName, description } = taskObject;
  
  return (
    <div className="task-content">
      <h3 className="task-name">{taskName}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default TaskContent;
