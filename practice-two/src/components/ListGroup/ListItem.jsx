import clsx from 'clsx';

// Import css
import './index.css';

const ListItem = ({ className, children }) => {
  return (
    <li
      className={clsx('list-group-item', {
        [className]: !!className
      })}
    >
      {children}
    </li>
  );
};

export default ListItem;
