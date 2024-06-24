import Button from '../common/Button';
import './index.css';

const ListItem = ({ children, onRemove, onEdit, task }) => {
  return (
    <li className="list-item">
      <div className="flex-row">
        <Button
          icon="icon-remove"
          className="btn-remove"
          onClick={() => onRemove(task.id)}
        />
        {children}
      </div>
      <Button
        icon="icon-edit"
        className="btn-edit"
        onClick={() => onEdit(task.id)}
      />
    </li>
  );
};

export default ListItem;
