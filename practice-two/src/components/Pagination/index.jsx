import Button from '../Button';

import './index.css';

const Pagination = ({ value, onChange, range }) => {
  let pattern = null;

  switch (true) {
    case range < 7:
      pattern = Array.from({ length: range }, (_, i) => i + 1);
      break;
    case value < 3:
      pattern = [1, 2, 3, 4, '...', range];
      break;
    case value > range - 4:
      pattern = [1, '...', range - 4, range - 3, range - 2, range - 1, range];
      break;
    default:
      pattern = [1, '...', value - 1, value, value + 1, '...', range];
  }

  const changeNumber = n => {
    if (typeof n === 'number' && n > 0 && n <= range) {
      onChange(n);
    }
  };
  return (
    <div className="pagination">
      <Button
        className="page-item"
        disabled={value <= 1}
        onClick={() => changeNumber(value - 1)}
      >
        {'Previous'}
      </Button>
      {pattern.map((label, index) => (
        <Button
          key={`${index}`}
          className={`page-item ${value === label ? 'active' : ''} `}
          onClick={() => changeNumber(label)}
        >
          {label}
        </Button>
      ))}
      <Button
        className="page-item"
        disabled={value >= range}
        onClick={() => changeNumber(value + 1)}
      >
        {'Next'}
      </Button>
    </div>
  );
};

export default Pagination;
