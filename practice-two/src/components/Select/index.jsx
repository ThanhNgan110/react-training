import './index.css';

const Select = ({ name, onChange, children }) => {
  return (
    <select
      className="select"
      name={name}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
