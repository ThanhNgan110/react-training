import clxs from 'clsx';

import './index.css';

const Toast = ({ type, msg }) => {
  return (
    <p
      className={clxs('toast', {
        success: type === 'success',
        danger: type === 'danger'
      })}
    >
      {msg}
    </p>
  );
};

export default Toast;
