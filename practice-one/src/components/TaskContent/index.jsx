import Form from '../Form';

import './index.css';

const TaskContent = ({ task }) => {
  const { taskName, description, active } = task;

  if (active) {
    return ''
  }

  return (
    <div className="task-content">
      <h3 className="task-name">{taskName}</h3>
      <p className="description">{description}</p>
    </div>
  );
};

export default TaskContent;
