const NumberTask = ({ tasks }) => {
  const taskWord = tasks.length > 1 ? 'tasks' : 'task';

  return (
    <>
      {tasks.length >= 1 && (
        <div className="align-center">
          <span className="icon icon-small icon-complete"></span>
          <p className="number-task">
            {tasks.length} {taskWord}
          </p>
        </div>
      )}
    </>
  );
};

export default NumberTask;
