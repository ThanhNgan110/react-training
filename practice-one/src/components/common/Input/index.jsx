import "./index.css";
const Input = ({ className, type, placeHolder, value, onChange }) => {

  return (
    <input
      className={`input-text ${className}`}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}></input>
  );
};

export default Input;
