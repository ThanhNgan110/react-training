import clsx from 'clsx';

// Component
import RadioInput from '../RadioInput';

const ColorsPicker = ({ className, colors, onChange }) => {
  return (
    <div
      className={clsx('d-flex', {
        [className]: !!className
      })}
    >
      {colors.map((item, index) => (
        <RadioInput
          key={`${index}`}
          value={item}
          color={item}
          onChange={e => onChange(e)}
        />
      ))}
    </div>
  );
};

export default ColorsPicker;
