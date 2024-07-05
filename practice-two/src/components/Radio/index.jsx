import './index.css';

const Radio = ({ name, value, onChange, colorScheme }) => {
  return (
    <input
      type="radio"
      name={name}
      value={value}
      onChange={onChange}
      style={{ background: colorScheme }}
    />
  );
};

export default Radio;
