import './index.css';
import '../../../styles/flex.css';

const Button = ({ className, text, isDisabled, icon, onClick }) => {
  return (
    <button
      className={`align-center btn ${className} `}
      onClick={onClick}
      disabled={isDisabled}>
      {icon && <span className={`icon icon-small ${icon}`}></span>}
      {text}
    </button>
  );
};

export default Button;
