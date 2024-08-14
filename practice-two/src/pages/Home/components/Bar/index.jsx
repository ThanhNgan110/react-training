// Components
import Text from '../../../../components/Text';

// Css
import './index.css';

const Bar = ({ count }) => {
  return (
    <div className="d-flex align-items-center bar">
      <Text
        as="p"
        className="text-secondary fs-5"
      >
        {count} Items
      </Text>
    </div>
  );
};

export default Bar;
