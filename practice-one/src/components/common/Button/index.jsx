import './index.css';
import '../../../styles/flex.css';

const Button = ({ className, text, isDisabled, icon, onClick }) => {
  return (
    <button
      className={`align-center btn ${className} `}
      onClick={onClick}
      disabled={isDisabled}>
      {icon && <img src={icon} alt="icon" className="button-icon" />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
