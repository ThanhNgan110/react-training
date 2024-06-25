import List from '../List';
import ListItem from '../ListItem';
import TaskContent from '../TaskContent';

const TaskList = ({ tasks, onRemoveTask, onEditTask }) => {
  return (
    <>
      <List tasks={tasks}>
        {tasks.map((task) => (
          <ListItem key={task.id} primaryBtnOnClick={onRemoveTask} secondaryBtnOnClick={onEditTask}>
            <TaskContent
              task={task}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TaskList;
