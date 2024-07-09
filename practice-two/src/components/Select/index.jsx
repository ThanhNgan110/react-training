import './index.css';

const Select = ({ className, name, onChange, children }) => {
  return (
    <select
      className={`select ${className}`}
      name={name}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
