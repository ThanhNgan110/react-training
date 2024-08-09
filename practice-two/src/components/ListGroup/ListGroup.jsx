import clsx from 'clsx';

// Css
import './index.css';

const ListGroup = ({ className, vertical = false, children }) => {
  return (
    <ul
      className={clsx('list-group', {
        vertical: vertical,
        [className]: !!className
      })}
    >
      {children}
    </ul>
  );
};

export default ListGroup;
