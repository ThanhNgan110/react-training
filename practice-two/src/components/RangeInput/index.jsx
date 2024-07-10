const RangeInput = ({ className, value, min, max, onChange }) => {
  return (
    <input
      className={className}
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
};

export default RangeInput;
