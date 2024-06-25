import List from '../List';
import ListItem from '../ListItem';
import TaskContent from '../TaskContent';
import Button from '../common/Button';
import Form from '../Form';

const TaskList = ({ tasks, onRemoveTask, onEditTask, onCancel, onSave }) => {
  return (
    <>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            {task.active ? (
              <Form task={task} onCancel={onCancel} onSave={onSave}/>
            ) : (
              <>
                <div className="flex-row">
                  <Button
                    classNameBtn="btn-remove"
                    iconClassName="icon-remove"
                    onClick={() => onRemoveTask(task.id)}></Button>
                  <TaskContent task={task} />
                </div>
                <Button
                  classNameBtn="btn-edit"
                  iconClassName="icon-edit"
                  onClick={() => onEditTask(task.id)}></Button>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default TaskList;
