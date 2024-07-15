// Import component
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import RangeInput from '../../components/RangeInput';

// Import css
import './index.css';

const Prices = ({ maxPrice }) => {
  return (
    <div className="box-item">
      <Heading
        as="h2"
        size="lg"
        className="heading-sidebar"
      >
        PRICES
      </Heading>
      <div className="d-flex justify-content-between">
        <Text
          as="p"
          size="lg"
        >
          Ranger
        </Text>
        <Text
          as="p"
          size="lg"
        >
          {`$0 - $${maxPrice}`}
        </Text>
      </div>
      <RangeInput />
    </div>
  );
};

export default Prices;
