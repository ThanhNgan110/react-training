import Text from '../Text';

const LabelInfo = ({ label, number }) => {
  return (
    <div className="d-flex justify-content-between list-group-item">
      <Text
        variant="text"
        as="p"
        className="fs-3"
      >
        {label}
      </Text>
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
