// Import component
import RadioInput from '../RadioInput';

const RadioGroup = ({ colorSchemes }) => {
  return (
    <div className="d-flex justify-content-between">
      {colorSchemes.map((item, index) => (
        <RadioInput
          key={`${index}`}
          value={item}
          colorScheme={item}
        />
      ))}
    </div>
  );
};

export default RadioGroup;
