import clsx from 'clsx';

// Css
import './index.css';

const Divider = ({ className, children }) => {
  return (
    <div
      className={clsx('divider', {
        [className]: !!className
      })}
    >
      {children}
    </div>
  );
};

export default Divider;
