import clsx from 'clsx';
import './index.css';

const Button = ({
  className,
  variant,
  type,
  disabled,
  onClick,
  icon,
  children
}) => {
  return (
    <button
      className={clsx('btn', {
        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary',
        'btn-link': variant === 'link',
        [className]: !!className
      })}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon && (
        <img
          src={icon}
          alt="icon"
        />
      )}
      {children}
    </button>
  );
};

export default Button;
