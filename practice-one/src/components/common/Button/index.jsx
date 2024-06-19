import Img from '../Img';
import './index.css';
import '../../../styles/flex.css';

const Button = ({ className, text, isDisabled, icon, onClick }) => {
  return (
    <button
      className={`align-center btn ${className} `}
      onClick={onClick}
      disabled={isDisabled}>
      {icon &&  <Img urlIcon={icon} alt={text}/>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
