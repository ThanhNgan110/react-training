import clsx from 'clsx';

// Import css
import './index.css';

const RangeInput = ({ className, value, min, max, onChange }) => {
  return (
    <input
      className={clsx('input', {
        [className]: !!className
      })}
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={onChange}
    />
  );
};

export default RangeInput;
