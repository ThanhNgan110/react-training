import Text from '../Text';
import Select from '../Select';

import './index.css';

const Bar = ({ number, data, onChange }) => {
  return (
    <div className="d-flex align-items-center bar">
      <Text
        as="p"
        className="text-secondary fs-5"
      >
        {number} Items
      </Text>
      <Select
        classNameLabel="fs-5 text-secondary"
        label="Sort by"
        name="sort-by"
        data={data}
        onChange={onChange}
      />
    </div>
  );
};

export default Bar;
