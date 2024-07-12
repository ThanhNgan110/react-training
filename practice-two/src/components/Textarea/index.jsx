import clsx from 'clsx';

// Import css
import './index.css';

const Textarea = ({ className, value, onChange, placeholder }) => {
  return (
    <textarea
      className={clsx('textarea', {
        [className]: !!className
      })}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    ></textarea>
  );
};

export default Textarea;
