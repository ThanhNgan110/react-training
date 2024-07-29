import Text from '../Text';
import Button from '../Button';

import './index.css';

const LabelInfo = ({ label, number, onClick }) => {
  return (
    <div className="d-flex justify-content-between list-group-item">
      <Button
        className="btn-label"
        onClick={() => onClick(label)}
      >
        {label}
      </Button>

      <Text
        variant="text"
        as="p"
        className="fs-3 text-secondary"
      >
        {number}
      </Text>
    </div>
  );
};

export default LabelInfo;
