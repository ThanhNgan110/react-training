const RangeInput = ({ className, type, value, min, max, onChange }) => {
  return (
    <input
      className={className}
      type={type}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
};

export default RangeInput;
