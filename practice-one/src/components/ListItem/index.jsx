import Button from '../common/Button';
import iconEdit from '../../assets/images/icons/icon-edit.png';
import './index.css';

const ListItem = ({ children }) => {

  return (
    <li className="list-item">
      {children}
     <Button icon={iconEdit} className='btn-edit' alt='edit'/>
    </li>
  );
};

export default ListItem;
