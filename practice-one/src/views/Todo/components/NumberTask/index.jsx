const NumberTask = ({ tasks }) => {
  if (tasks.length === 0) {
    return null;
  }

  const taskWord = tasks.length > 1 ? 'tasks' : 'task';

  return (
    <div className="align-center">
      <span className="icon icon-small icon-complete" />
      <p className="number-task">
        {tasks.length} {taskWord}
      </p>
    </div>
  );
};

export default NumberTask;
