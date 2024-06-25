import List from '../List';
import ListItem from '../ListItem';
import TaskContent from '../TaskContent';
import Form from '../Form';

const TaskList = ({ tasks, onRemoveTask, onEditTask }) => {
  
  return (
    <>
      <List tasks={tasks}>
        {tasks.map((task) => {
          {
            task.active ? (
              <Form />
            ) : (
              <ListItem key={task.id}>
                <TaskContent
                  task={task}
                  onRemove={onRemoveTask}
                  onEdit={onEditTask}
                />
              </ListItem>
            );
          }
        })}
      </List>
    </>
  );
};

export default TaskList;
