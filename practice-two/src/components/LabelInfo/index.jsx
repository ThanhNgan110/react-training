import Text from '../Text';

import './index.css';

const LabelInfo = ({ label, number, activeSelected }) => {
  return (
    <div className="d-flex justify-content-between list-group-item">
      <Text
        variant="text"
        as="p"
        className={`fs-3 text-secondary ${activeSelected ? 'active' : ''}`}
      >
        {label}
      </Text>

      <Text
        variant="text"
        as="p"
        className={`fs-3 text-secondary ${activeSelected ? 'active' : ''}`}
      >
        {number}
      </Text>
    </div>
  );
};

export default LabelInfo;
