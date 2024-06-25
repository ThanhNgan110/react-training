import './index.css';
import '../../../styles/flex.css';

const Button = ({ classNameBtn, text, isDisabled, iconClassName, onClick }) => {
  
  return (
    <button
      className={`align-center btn ${classNameBtn} `}
      onClick={onClick}
      disabled={isDisabled}>
      {iconClassName && <span className={`icon icon-small ${iconClassName}`}></span>}
      {text}
    </button>
  );
};

export default Button;
