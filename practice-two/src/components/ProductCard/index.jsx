import Text from '../Text';
import Image from '../Image';
import StarRating from '../StarRating';
import Button from '../Button';
import Divider from '../Divider';

import './index.css';

const ProductCard = ({ product }) => {
  const { name, image, rating, price, description } = product;
  return (
    <article className="d-flex divider">
      <div className="box-image">
        <Image
          src={image[0]}
          alt="product"
        />
        <span className="badge"></span>
      </div>
      <div className="d-flex flex-column product-content">
        <Text
          as="h3"
          variant="primary"
        >
          {name ? name : ''}
        </Text>
        <Divider>
          <div className="d-flex align-items-center gap-10">
            <StarRating
              rating={rating}
              width="12"
              height="12"
            />
            <Text
              as="p"
              className="fs-4 text-gray"
            >
              {rating ? rating : ''} reviews
            </Text>
            <Button variant="link">Submit a review</Button>
          </div>
        </Divider>

        <div className="d-flex align-items-center gap-10">
          <Text
            as="p"
            className="fs-3 text-info fw-bold"
          >
            $ {price ? price : ''}
          </Text>
          <div className="d-flex group">
            <Text
              as="p"
              className="fs-5 fw-normal text-decoration-line-through text-line-through"
            >
              $534,33
            </Text>
            <Text
              as="p"
              className="fs-5 fw-bold text-pink"
            >
              24% Off
            </Text>
          </div>
        </div>
        <Text
          as="p"
          variant="secondary"
          ellipsis
        >
          {description}
        </Text>
      </div>
    </article>
  );
};

export default ProductCard;
