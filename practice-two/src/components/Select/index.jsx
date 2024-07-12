import clsx from 'clsx';

import './index.css';

const Select = ({ className, name, onChange, children }) => {
  return (
    <select
      className={clsx('select', {
        [className]: !!className
      })}
      name={name}
      onChange={onChange}
    >
      {children}
    </select>
  );
};

export default Select;
