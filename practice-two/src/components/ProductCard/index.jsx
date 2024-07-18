import Text from '../Text';
import Image from '../Image';
import StarRating from '../StarRating';
import Button from '../Button';

import './index.css';

const ProductCard = ({ product }) => {
  return product?.map(item => (
    <article
      className="d-flex"
      key={item.id}
    >
      <div className="box-image">
        <Image
          src={item.image[1]}
          alt="product"
        />
        <span className="badge"></span>
      </div>
      <div className="d-flex flex-column product-content">
        <Text
          as="h3"
          variant="primary"
        >
          {item.name}
        </Text>
        <div className="d-flex align-items-center">
          <StarRating starFull={item.reviews} />
          <Text
            as="p"
            className="review"
          >
            {item.reviews} reviews
          </Text>
          <Button variant="link">Submit a review</Button>
        </div>
        <div className="d-flex align-item-center">
          <Text
            as="p"
            className="price"
          >
            $ {item.price}
          </Text>
          <div className="d-flex group">
            <Text
              as="p"
              className="discount"
            >
              $534,33
            </Text>
            <Text as="p" className="percentage">24% Off</Text>
          </div>
        </div>
        <Text
          as="p"
          variant="secondary"
          ellipsis
        >
          {item.description}
        </Text>
      </div>
    </article>
  ));
};

export default ProductCard;
