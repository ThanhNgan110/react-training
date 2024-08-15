import { Link } from 'react-router-dom';

// Common
import { formatPrice } from '../../utils/common';

// Components
import Text from '../Text';
import Image from '../Image';
import CardHeader from '../CardHeader';

// Css
import './index.css';

const ProductCard = ({ product, onSubmit }) => {
  const { id, name, images, averageRating, reviewsCount, price, description } =
    product;

  return (
    <article className="d-flex divider">
      <Link
        to={`/products/${id}`}
        className="box-image"
      >
        <Image
          src={images[0] ?? ''}
          alt={`product ${name}`}
        />

        <span className="badge"></span>
      </Link>
      <div className="d-flex flex-column product-content">
        <CardHeader
          id={id}
          name={name}
          averageRating={averageRating}
          reviewsCount={reviewsCount}
          onSubmit={onSubmit}
        />

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
  );
};

export default ProductCard;
