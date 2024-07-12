import clsx from 'clsx';

// Import css
import './index.css';

const ListGroup = ({ className, horizontal = true, children }) => {
  return (
    <ul
      className={clsx('list-group', {
        vertical: !horizontal,
        [className]: !!className
      })}
    >
      {children}
    </ul>
  );
};

export default ListGroup;
