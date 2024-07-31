import { useContext } from 'react';
import { ModalContext } from '../../context';

import Text from '../Text';
import StarRating from '../StarRating';
import Button from '../Button';
import ColorsPicker from '../ColorsPicker';
import Select from '../Select';
import Divider from '../Divider';

import './index.css';

import { formatPrice } from '../../utils/formatPrice';

const ProductContent = ({ product }) => {
  const {
    id,
    name,
    price,
    reviews,
    category,
    colors,
    size,
    orderStatus,
    rating
  } = product;
  const { handleOpenModal } = useContext(ModalContext);

  return (
    <section className="product-center">
      <Text
        as="h2"
        className="fs-2"
      >
        {name}
      </Text>
      <Divider>
        <div className="d-flex align-items-center space-empty">
          <StarRating
            rating={rating}
            width="12"
            height="12"
          />
          <Text
            as="p"
            className="fs-4 text-gray"
          >
            {reviews} reviews
          </Text>
          <Button
            className="btn-link fs-md"
            onClick={() => handleOpenModal(id)}
          >
            Submit a review
          </Button>
        </div>
      </Divider>
      <Divider>
        <div className="d-flex align-items-center gap-10">
          <Text
            as="p"
            className="fs-3 text-info fw-bold space-top"
          >
            {formatPrice(price)}
          </Text>
          <Text
            as="p"
            className="fs-5 fw-normal text-decoration-line-through text-line-through space-top"
          >
            $534,33
          </Text>
          <Text
            as="p"
            className="fs-5 fw-bold text-pink space-top"
          >
            24% Off
          </Text>
        </div>
        <Text
          as="p"
          className="d-flex fs-5 space-top gap-70"
        >
          <span>Availability: </span>
          {orderStatus}
        </Text>
        <Text
          as="p"
          className="d-flex fs-5 space-top gap-79"
        >
          <span>Category:</span>
          {category}
        </Text>
        <Text
          as="p"
          className="space-top fs-5"
        >
          Free shipping
        </Text>
      </Divider>
      <Divider>
        <span className="d-flex space-top gap-50">
          Select color:
          <ColorsPicker
            className="gap-23"
            colors={colors}
          />
        </span>
        <div className="d-flex align-items-center space-top gap-117">
          <Select
            classNameLabel="fs-5 text-secondary"
            label="Size"
            name="select size"
            data={size}
          />
        </div>
      </Divider>
      <Divider>
        <div className="d-flex space-top space-btn-group">
          <Button
            className="btn-primary d-flex align-items-center"
            iconClassName="icon-facebook"
          >
            Share on a facebook
          </Button>
          <Button
            className="btn-secondary d-flex align-items-center"
            iconClassName="icon-twitter"
          >
            Share on a Twitter
          </Button>
        </div>
      </Divider>
    </section>
  );
};

export default ProductContent;
