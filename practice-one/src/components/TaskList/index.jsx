import List from '../List';
import ListItem from '../ListItem';
import TaskContent from '../TaskContent';
import Form from '../Form';

const TaskList = ({ tasks, onRemoveTask, onEditTask, onCancel, onSave, selectedTaskId }) => {
  return (
    <>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            {selectedTaskId === task.id ? (
              <Form task={task} onCancel={onCancel} onSave={onSave} />
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
