import './index.css';
import '../../styles/flex.css';

const Button = ({
  classNameBtn,
  children,
  isDisabled,
  iconClassName,
  onClick,
  type,
}) => {
  return (
    <button
      className={`flex flex-row align-center btn ${classNameBtn} `}
      onClick={onClick}
      disabled={isDisabled}
      type={type}>
      {iconClassName && (
        <span className={`icon icon-small ${iconClassName}`}></span>
      )}
      {children}
    </button>
  );
};

export default Button;
