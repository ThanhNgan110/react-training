import List from '../List';
import ListItem from '../ListItem';
import TaskContent from '../TaskContent';
import TaskForm from '../TaskForm';

const TaskList = ({ tasks, onRemoveTask, onEditTask, onCancel, onSubmit, selectedTaskId }) => {

  return (
    <>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            {selectedTaskId === task.id ? (
              <TaskForm data={task} onCancel={onCancel} onSubmit={onSubmit} textBtnSecondary='Save' textBtnPrimary='Cancel'/>
            ) : (
              <TaskContent
                task={task}
                onRemoveTask={onRemoveTask}
                onEditTask={onEditTask}
              />
            )}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TaskList;
