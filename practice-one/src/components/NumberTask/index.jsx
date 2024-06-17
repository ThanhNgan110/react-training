const NumberTask = (numberTask) => {
  const taskWord = numberTask > 1 ? 'tasks' : 'task';

  return (
    <p>
      {numberTask} {taskWord}
    </p>
  );
};

export default NumberTask;
