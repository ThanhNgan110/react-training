import './index.css';

const Select = ({ name, onChange, children }) => {
  return (
    <div>
      <select
        className="select"
        name={name}
        onChange={onChange}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
