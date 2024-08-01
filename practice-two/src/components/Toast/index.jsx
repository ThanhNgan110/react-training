import clxs from 'clsx';

import './index.css';

const Toast = ({ type, msg }) => {
  console.log("type", type);
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
