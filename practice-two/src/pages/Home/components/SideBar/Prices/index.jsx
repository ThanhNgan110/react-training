// Component
import Text from '../../../../../components/Text';
import RangeInput from '../../../../../components/RangeInput';

import { formatPrice } from '../../../../../utils/common';

// Css
import './index';

const Prices = ({ maxPrice, price, handleChangePrice }) => {
  return (
    <>
      <Text
        variant="heading"
        as="h2"
        className="fs-3 fw-medium text-uppercase"
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
          {`$0 - ${formatPrice(price)}`}
        </Text>
      </div>
      <RangeInput
        max={maxPrice}
        handleChangePrice={handleChangePrice}
        value={price}
      />
    </>
  );
};

export default Prices;
