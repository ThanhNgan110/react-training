import Text from '../Text';
import Image from '../Image';
import StarRating from '../StarRating';
import Button from '../Button';

import './index.css';

const ProductCard = ({ product }) => {
  const { name, image, reviews, price, description } = product;
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
        <div className="d-flex align-items-center divider">
          <StarRating starFull={reviews} />
          <Text
            as="p"
            className="review"
          >
            {reviews ? reviews : ''} reviews
          </Text>
          <Button variant="link">Submit a review</Button>
        </div>
        <div className="d-flex align-item-center">
          <Text
            as="p"
            className="price"
          >
            $ {price ? price : ''}
          </Text>
          <div className="d-flex group">
            <Text
              as="p"
              className="discount"
            >
              $534,33
            </Text>
            <Text
              as="p"
              className="percentage"
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
