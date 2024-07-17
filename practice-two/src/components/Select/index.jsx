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
    <div className="d-flex align-items-center ">
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
        {data.map(({ value, name }, index) => (
          <option
            key={`${index}`}
            value={value}
          >
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
