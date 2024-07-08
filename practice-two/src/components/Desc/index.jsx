import clsx from 'clsx';
import './index.css';

const Desc = ({ className, ellipsis, type = 'primary', children }) => {
  return (
    <p
      className={clsx('desc', {
        ellipsis,
        'desc-primary': type === 'primary',
        'desc-secondary': type === 'secondary',
        [className]: !!className
      })}
    >
      {children}
    </p>
  );
};

export default Desc;
