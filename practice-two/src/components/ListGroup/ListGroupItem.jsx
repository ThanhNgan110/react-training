import clsx from 'clsx';

import './index.css';

const ListGroupItem = ({ className, onClick, children }) => {
  return (
    <li
      className={clsx('list-group-item', {
        [className]: !!className
      })}
      onClick={onClick}
    >
      {children}
    </li>
  );
};

export default ListGroupItem;
