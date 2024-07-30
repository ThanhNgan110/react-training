import clsx from 'clsx';

import './index.css';

const Select = ({
  classNameSelect,
  classNameLabel,
  label,
  name,
  onChange,
  data
}) => {
  return (
    <>
      <label
        className={classNameLabel}
        htmlFor={name}
      >
        {label}
      </label>
      <select
        className={clsx('select', {
          [classNameSelect]: !!classNameSelect
        })}
        onChange={onChange}
      >
        {data.map((item, index) => (
          <option
            key={`${index}`}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
