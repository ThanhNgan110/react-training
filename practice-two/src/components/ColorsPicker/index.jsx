// Import component
import RadioInput from '../RadioInput';

const ColorsPicker = ({ colors, onChange }) => {
  return (
    <div className="d-flex justify-content-between">
      {colors.map((item, index) => (
        <RadioInput
          key={`${index}`}
          value={item}
          color={item}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default ColorsPicker;
