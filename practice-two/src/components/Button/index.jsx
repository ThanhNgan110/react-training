import clsx from 'clsx';
import './index.css';

const Button = ({ variant, type, disabled, onClick, children }) => {
  return (
    <button
      className={clsx('btn', {
        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary',
        'btn-link': variant === 'link'
      })}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
