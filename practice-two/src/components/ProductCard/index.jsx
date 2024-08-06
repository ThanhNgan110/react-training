import { Link } from 'react-router-dom';

import { formatPrice } from '../../utils/formatPrice';

import Text from '../Text';
import Image from '../Image';
import StarRating from '../StarRating';
import Button from '../Button';
import Divider from '../Divider';

import './index.css';

const ProductCard = ({ product, onOpen }) => {
  const { id, name, images, averageRating, reviewsCount, price, description } =
    product;

  return (
    <Link
      key={id}
      to={`/products/${id}`}
    >
      <article className="d-flex divider">
        <div className="box-image">
          <Image
            src={images[0] ?? ''}
            alt={`product ${name}`}
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
                rating={averageRating}
                width="12"
                height="12"
              />
              <Text
                as="p"
                className="fs-4 text-gray"
              >
                {reviewsCount ?? 0} reviews
              </Text>
              <Button
                variant="link"
                onClick={e => {
                  e.preventDefault();
                  onOpen(id);
                }}
              >
                Submit a review
              </Button>
            </div>
          </Divider>

          <div className="d-flex align-items-center gap-10">
            <Text
              as="p"
              className="fs-3 text-info fw-bold"
            >
              {price ? formatPrice(price) : ''}
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
            className="line-height-sm "
            as="p"
            variant="secondary"
            ellipsis
          >
            {description}
          </Text>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
