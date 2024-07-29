import clsx from 'clsx';

// Import css
import './index.css';

const RangeInput = ({ className, value, max, onChange }) => {
  return (
    <input
      className={clsx('input', {
        [className]: !!className
      })}
      type="range"
      min="0"
      max={max}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
};

export default RangeInput;
