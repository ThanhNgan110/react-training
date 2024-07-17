// Import component
import Text from '../../../components/Text';
import RangeInput from '../../../components/RangeInput';

// Import css
import './index';

const Prices = ({ maxPrice }) => {
  return (
    <>
      <Text
        variant="heading"
        as="h2"
        className="fs-3 fw-bold text-uppercase"
      >
        prices
      </Text>
      <div className="d-flex justify-content-between">
        <Text
          variant="text"
          as="p"
          className="fs-3"
        >
          Ranger
        </Text>
        <Text
          variant="text"
          as="p"
          className="fs-3"
        >
          {`$0 - $${maxPrice}`}
        </Text>
      </div>
      <RangeInput />
    </>
  );
};

export default Prices;
