import clsx from 'clsx';

// Css
import './index.css';

const Button = ({
  className,
  variant,
  type,
  disabled,
  onClick,
  iconClassName,
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
      {iconClassName && <span className={`icon ${iconClassName}`}></span>}
      {children}
    </button>
  );
};

export default Button;
