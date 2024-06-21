import Button from '../common/Button';
import iconEdit from '../../assets/images/icons/icon-edit.png';
import iconRemove from '../../assets/images/icons/icon-remove.png';
import './index.css';

const ListItem = ({ children, task, onRemove, onEdit }) => {
  return (
    <li className="list-item">
      <div className='flex-row'>
        <Button icon={iconRemove} className="btn-remove" alt="remove" onClick={()=> onRemove(task.id)} />
        {children}
      </div>
      <Button icon={iconEdit} className="btn-edit" alt="edit" onClick={()=> onEdit(task.id)} />
    </li>
  );
};

export default ListItem;
