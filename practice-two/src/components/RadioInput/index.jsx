import clsx from 'clsx';

// Import css
import './index.css';

const RadioInput = ({ className, value, onChange, color }) => {
  return (
    <label
      htmlFor="radio"
      className={clsx('label-radio', {
        [className]: !!className
      })}
      style={{ '--label-before-bg': `#${color}` }}
    >
      <input
        type="radio"
        name="radio"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default RadioInput;
