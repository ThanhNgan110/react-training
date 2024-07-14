// Import component
import RadioInput from '../RadioInput';

// Import css
import './index.css';

const RadioGroup = ({ colorSchemes, onChangeColor }) => {
  return (
    <div className="flex box-radio">
      {colorSchemes.map(item => {
        <RadioInput
          value={item.colors}
          colorScheme={item.colors}
          onChange={() => onChangeColor()}
        />;
      })}
    </div>
  );
};

export default RadioGroup;
