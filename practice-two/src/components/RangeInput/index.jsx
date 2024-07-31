import clsx from 'clsx';

// Import css
import './index.css';

const RangeInput = ({ className, value, max, handleChangePrice }) => {
  return (
    <input
      className={clsx('input', {
        [className]: !!className
      })}
      type="range"
      min="0"
      max={max}
      value={value ?? ''}
      onChange={e => handleChangePrice(e)}
    />
  );
};

export default RangeInput;
