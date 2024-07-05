import './index.css';

const Text = ({ className, text }) => {
  return <p className={`text ${className}`}>{text}</p>;
};

export default Text;
