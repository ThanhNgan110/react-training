import clsx from 'clsx';

// Import css
import './index.css';

const List = ({ className, horizontal = true, children }) => {
  return (
    <ul
      className={clsx('list-group', {
        horizontal: !horizontal,
        [className]: !!className
      })}
    >
      {children}
    </ul>
  );
};

export default List;
