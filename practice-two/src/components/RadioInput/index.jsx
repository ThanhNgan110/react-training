import clsx from 'clsx';

// Import css
import './index.css';

const RadioInput = ({ className, value, onChange, colorScheme }) => {
  return (
    <label
      htmlFor="radio"
      className={clsx('label', {
        [className]: !!className
      })}
      style={{ '--label-before-bg': `#${colorScheme}` }}
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
