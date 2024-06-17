import "./index.css";
const Input = ({ className, type, placeHolder }) => {

  return (
    <input
      className={`input ${className}`}
      type={type}
      // value={value}
      // onChange={onChange}
      placeholder={placeHolder}></input>
  );
};

export default Input;
