const Slider = ({ type, value, min, max, onChange }) => {
  return (
    <input
      type={type}
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
};

export default Slider;
