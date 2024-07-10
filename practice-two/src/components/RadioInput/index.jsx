import './index.css';

const RadioInput = ({ className, name, value, onChange, colorScheme }) => {
  return (
    <input
      className={className}
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      style={{ background: colorScheme }}
    />
  );
};

export default RadioInput;
